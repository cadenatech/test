(function () {
  var UI = window.UI || {};
  var GAS_WEBAPP_URL = window.GAS_WEBAPP_URL || '';
  var t = window.t || function (key) { return key; };
  var base64ToBytes = window.base64ToBytes || function () { return new Uint8Array(0); };

  function init(options) {
    options = options || {};
    if (options.ui) UI = options.ui;
    if (options.gasUrl) GAS_WEBAPP_URL = options.gasUrl;
    if (options.t) t = options.t;
    if (options.base64ToBytes) base64ToBytes = options.base64ToBytes;
  }

  function formatMiB(bytes) {
    var mib = bytes / (1024 * 1024);
    return mib.toFixed(1).replace('.', ',') + ' MB';
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function formatEta(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '';
    var s = Math.round(seconds);
    var h = Math.floor(s / 3600);
    s -= h * 3600;
    var m = Math.floor(s / 60);
    s -= m * 60;
    if (h > 0) return h + ':' + pad2(m) + ':' + pad2(s);
    return m + ':' + pad2(s);
  }

  function concatUint8Arrays(chunks, totalSize) {
    var size = totalSize;
    if (!size) {
      size = chunks.reduce(function (sum, chunk) { return sum + chunk.length; }, 0);
    }
    var out = new Uint8Array(size);
    var offset = 0;
    for (var i = 0; i < chunks.length; i++) {
      out.set(chunks[i], offset);
      offset += chunks[i].length;
    }
    if (offset !== size) {
      return out.slice(0, offset);
    }
    return out;
  }

  function fetchZipBundleMeta(zipUrl) {
    var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&meta=1';
    return fetch(endpoint)
      .then(function (res) {
        if (!res.ok) {
          throw new Error('HTTP ' + res.status);
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.error) {
          throw new Error(data.error);
        }
        return data || {};
      });
  }

  function fetchZipBundleChunked(zipUrl) {
    var meta = { name: 'site.zip', size: 0, acceptRanges: false };
    var chunkSize = 20 * 1024 * 1024;
    var chunks = [];
    var downloaded = 0;
    var totalSize = 0;
    var etaTimer = null;
    var lastEtaText = '';
    var lastChunkAt = Date.now();
    var avgSpeed = 0;
    var etaBaseSeconds = 0;
    var etaBaseAt = 0;
    var lastEtaSeconds = 0;
    var baseProgress = 0;
    var maxProgress = baseProgress;
    var hasStartedDownload = false;
    var dotPhase = 0;
    var dotText = '.';

    function buildDownloadMessage() {
      var message = hasStartedDownload
        ? (formatMiB(downloaded))
        : (t('status.connecting') + dotText);
      var pct = 0;
      if (totalSize) {
        pct = downloaded / totalSize;
        if (pct < 0) pct = 0;
        if (pct > 1) pct = 1;
        message += ' / ' + formatMiB(totalSize) + ' (' + Math.round(pct * 100) + '%)';
      }
      return { message: message, pct: pct };
    }

    function updateEta() {
      if (!totalSize || !avgSpeed) {
        UI.setLoadingEtaVisible(false);
        return;
      }
      var elapsed = (Date.now() - etaBaseAt) / 1000;
      var etaSeconds = etaBaseSeconds - elapsed;
      if (etaSeconds < 0) etaSeconds = 0;
      if (lastEtaSeconds && etaSeconds > lastEtaSeconds) {
        etaSeconds = lastEtaSeconds;
      }
      lastEtaSeconds = etaSeconds;
      var etaText = formatEta(etaSeconds);
      if (etaText) {
        UI.setLoadingEta(t('loading.etaPrefix') + etaText);
        UI.setLoadingEtaVisible(true);
      } else {
        UI.setLoadingEtaVisible(false);
      }
    }

    function updateDownloadProgress() {
      var info = buildDownloadMessage();
      UI.setLoadingMessage(info.message);

      if (!totalSize) return;
      var pct = info.pct;
      var progress = baseProgress + Math.round(pct * 100);
      if (progress > 100) progress = 100;
      if (progress < maxProgress) progress = maxProgress;
      maxProgress = progress;
      UI.setProgress(progress);
    }

    UI.stopProgress();
    UI.startProgress(2);
    UI.setLoadingMessage(t('status.connecting') + '...');
    updateDownloadProgress();
    etaTimer = setInterval(function () {
      dotPhase = (dotPhase + 1) % 3;
      dotText = dotPhase === 0 ? '.' : (dotPhase === 1 ? '..' : '...');
      var info = buildDownloadMessage();
      if (info.message !== lastEtaText) {
        lastEtaText = info.message;
        UI.setLoadingMessage(info.message);
      }
      if (totalSize && downloaded) {
        updateEta();
      }
    }, 1000);

    function fetchPart(part, attempt) {
      var tries = typeof attempt === 'number' ? attempt : 0;
      var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1&part=' + part + '&chunkSize=' + chunkSize;
      return fetch(endpoint)
        .then(function (res) {
          if (!res.ok) {
            throw new Error('HTTP ' + res.status);
          }
          return res.json();
        })
        .then(function (data) {
          if (data && data.error) {
            throw new Error(data.error);
          }
          if (data && data.chunkSize && data.chunkSize !== chunkSize) {
            chunkSize = data.chunkSize;
          }
          if (!meta.name && data.name) meta.name = data.name;
          if (!totalSize && data.totalSize) totalSize = data.totalSize;
          if (!meta.acceptRanges && data.acceptRanges) meta.acceptRanges = true;
          if (totalSize && meta.size !== totalSize) meta.size = totalSize;
          var partBytes = base64ToBytes(data.base64 || '');
          if (partBytes.length) {
            if (!hasStartedDownload) {
              hasStartedDownload = true;
              UI.stopProgress();
              UI.setProgress(0);
            }
          }
          chunks.push(partBytes);
          downloaded += partBytes.length;
          var now = Date.now();
          var delta = Math.max(0.2, (now - lastChunkAt) / 1000);
          var chunkSpeed = partBytes.length / delta;
          avgSpeed = avgSpeed ? (avgSpeed * 0.8 + chunkSpeed * 0.2) : chunkSpeed;
          lastChunkAt = now;
          if (totalSize) {
            etaBaseSeconds = (totalSize - downloaded) / avgSpeed;
            etaBaseAt = now;
            if (!lastEtaSeconds) lastEtaSeconds = etaBaseSeconds;
          }
          updateDownloadProgress();
          if (totalSize && downloaded >= totalSize) {
            return;
          }
          if (!totalSize && partBytes.length < chunkSize) {
            return;
          }
          return fetchPart(part + 1, 0);
        })
        .catch(function (err) {
          if (tries >= 2) {
            throw err;
          }
          UI.setLoadingMessage('Reintentando trozo ' + (part + 1) + ' (' + (tries + 1) + '/2)...');
          return new Promise(function (resolve) { setTimeout(resolve, 700 * (tries + 1)); })
            .then(function () { return fetchPart(part, tries + 1); });
        });
    }

    return fetchPart(0, 0).then(function () {
      if (etaTimer) {
        clearInterval(etaTimer);
        etaTimer = null;
      }
      var zipBytes = concatUint8Arrays(chunks, totalSize || downloaded);
      return {
        name: meta.name || 'site.zip',
        size: totalSize || zipBytes.length,
        bytes: zipBytes
      };
    }).catch(function (err) {
      if (etaTimer) {
        clearInterval(etaTimer);
        etaTimer = null;
      }
      throw err;
    });
  }

  window.Downloads = {
    init: init,
    fetchZipBundleChunked: fetchZipBundleChunked,
    fetchZipBundleMeta: fetchZipBundleMeta,
    formatMiB: formatMiB,
    formatEta: formatEta,
    concatUint8Arrays: concatUint8Arrays
  };
})();
