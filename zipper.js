(function () {
  var t = function (key) { return key; };

  function init(options) {
    options = options || {};
    if (options.t) t = options.t;
  }

  function getZipDefaultName() {
    return t('zipper.zipName.default') || 'materiales';
  }

  function normalizeZipName(name) {
    var value = (name || '').trim() || getZipDefaultName();
    if (!/\.zip$/i.test(value)) {
      value += '.zip';
    }
    return value;
  }

  function deriveZipBaseName(files) {
    if (!files || !files.length) return getZipDefaultName();
    var firstPath = files[0].path || '';
    if (!firstPath) return getZipDefaultName();
    var parts = firstPath.split('/');
    if (parts.length > 1) {
      var root = parts[0];
      var sameRoot = files.every(function (item) {
        return item.path && item.path.indexOf(root + '/') === 0;
      });
      if (sameRoot) {
        return root;
      }
    }
    var filename = parts[parts.length - 1] || getZipDefaultName();
    return filename.replace(/\.[^/.]+$/, '') || getZipDefaultName();
  }

  function looksLikeHtmlDocument(text) {
    var head = String(text || '').slice(0, 600);
    return /^\s*<!doctype\s+html/i.test(head) || /^\s*<html/i.test(head);
  }

  function looksLikeReactJsx(text) {
    var value = String(text || '');
    if (looksLikeHtmlDocument(value)) return false;
    var sample = value.slice(0, 6000);
    if (/import\s+React/.test(sample)) return true;
    if (/from\s+['"]react['"]/.test(sample)) return true;
    if (/react-dom/.test(sample) && /createRoot\s*\(/.test(sample)) return true;
    if (/useState\s*\(/.test(sample) || /useEffect\s*\(/.test(sample)) {
      if (/return\s*\(\s*<[\w]/.test(sample) || /className\s*=/.test(sample)) {
        return true;
      }
    }
    if (/export\s+default/.test(sample) && /return\s*\(\s*<[\w]/.test(sample)) return true;
    return false;
  }

  window.Zipper = {
    init: init,
    getZipDefaultName: getZipDefaultName,
    normalizeZipName: normalizeZipName,
    deriveZipBaseName: deriveZipBaseName,
    looksLikeHtmlDocument: looksLikeHtmlDocument,
    looksLikeReactJsx: looksLikeReactJsx
  };
})();
