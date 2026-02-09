(function () {
  var UI = window.UI || {};
  var Restrictions = window.Restrictions || {};
  var t = function (key, vars) { return key; };
  var currentLang = 'es';
  var ctx = {};
  var restrictCountdownTimer = null;

  function init(options) {
    options = options || {};
    ctx = options.context || {};
    if (options.t) t = options.t;
    if (options.lang) currentLang = options.lang;
    if (options.ui) UI = options.ui;
    if (options.restrictions) Restrictions = options.restrictions;
  }

  function get(key) {
    return ctx && key in ctx ? ctx[key] : null;
  }

  function getValue(key) {
    var v = get(key);
    return typeof v === 'function' ? v() : v;
  }

  function setValue(key, value) {
    var v = get(key);
    if (typeof v === 'function') {
      v(value);
    } else {
      ctx[key] = value;
    }
  }

  function setLang(lang) {
    if (lang) currentLang = lang;
  }


  function applyRestrictionUiState() {
    var enabled = !!(get('restrictionToggle') && get('restrictionToggle').checked);
    if (get('restrictionFields')) {
      if (enabled) get('restrictionFields').removeAttribute('hidden');
      else get('restrictionFields').setAttribute('hidden', '');
    }
    if (get('restrictionActions')) {
      if (enabled) get('restrictionActions').removeAttribute('hidden');
      else get('restrictionActions').setAttribute('hidden', '');
    }
    var restrictTitle = document.querySelector('[data-restrict-actions-title]');
    if (restrictTitle) {
      if (enabled) restrictTitle.removeAttribute('hidden');
      else restrictTitle.setAttribute('hidden', '');
    }
    var restrictNote = document.querySelector('[data-restrict-actions-note]');
    if (restrictNote) {
      if (enabled) restrictNote.removeAttribute('hidden');
      else restrictNote.setAttribute('hidden', '');
    }
    if (get('restrictionHint')) {
      // This hint is part of the "Create a ZIP" publish choice card and should always be visible.
      get('restrictionHint').removeAttribute('hidden');
    }
    // The "restrict existing ZIP" accordion should always be visible. It is enabled/disabled
    // elsewhere based on the toggle state.
    if (get('restrictionAccordion')) {
      get('restrictionAccordion').removeAttribute('hidden');
    }
    if (get('restrictionNoEnd') && get('restrictionEndInput')) {
      get('restrictionEndInput').disabled = get('restrictionNoEnd').checked;
    }
    if (get('restrictionZipApply')) {
      get('restrictionZipApply').disabled = !enabled || !getValue('restrictionZipFile');
    }
    updateRestrictionSummary();
    var lockSvg = enabled
      ? '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>'
      : '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>';
    var lockTargets = document.querySelectorAll('[data-lock-indicator], [data-main-settings-open]');
    lockTargets.forEach(function (target) {
      var icon = target.querySelector('svg');
      if (icon) {
        icon.innerHTML = lockSvg;
      }
      if (enabled) {
        target.classList.add('is-locked');
        target.classList.remove('is-unlocked');
      } else {
        target.classList.remove('is-locked');
        target.classList.add('is-unlocked');
      }
    });
  }


  function updateRestrictionDefaults() {
    if (!get('restrictionStartInput') || !get('restrictionEndInput')) return;
    var now = new Date();
    if (!get('restrictionStartInput').value) {
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      var localValue = now.getFullYear()
        + '-' + pad(now.getMonth() + 1)
        + '-' + pad(now.getDate())
        + 'T' + pad(now.getHours())
        + ':' + pad(now.getMinutes());
      get('restrictionStartInput').value = localValue;
    }
    if (get('restrictionNoEnd') && get('restrictionNoEnd').checked) {
      get('restrictionEndInput').value = '';
    }
  }


  function buildRestrictionsPayload() {
    if (!get('restrictionToggle') || !get('restrictionToggle').checked) return null;
    updateRestrictionDefaults();
    var startValue = get('restrictionStartInput') ? get('restrictionStartInput').value : '';
    var endValue = get('restrictionEndInput') ? get('restrictionEndInput').value : '';
    startValue = Restrictions.normalizeDateTimeValue(startValue);
    endValue = Restrictions.normalizeDateTimeValue(endValue);
    var startAt = startValue ? new Date(startValue).toISOString() : new Date().toISOString();
    var neverExpires = !!(get('restrictionNoEnd') && get('restrictionNoEnd').checked);
    var endAt = null;
    if (!neverExpires && endValue) {
      endAt = new Date(endValue).toISOString();
    }
    return {
      version: 1,
      enabled: true,
      startAt: startAt,
      endAt: endAt,
      neverExpires: neverExpires,
      allowShare: !!(get('restrictionAllowShare') && get('restrictionAllowShare').checked),
      allowEmbed: !!(get('restrictionAllowEmbed') && get('restrictionAllowEmbed').checked),
      allowDownload: !!(get('restrictionAllowDownload') && get('restrictionAllowDownload').checked),
      createdAt: new Date().toISOString(),
      source: 'visor-webzip'
    };
  }


  function updateRestrictionSummary() {
    if (!get('restrictionSummary') || !get('restrictionSummaryItems')) return;
    if (get('restrictionSummaryLabel')) {
      // Avoid keeping the previous language label when a translation key is missing
      // (e.g., older cached assets). Fall back to Spanish instead of mixing languages.
      get('restrictionSummaryLabel').textContent = t('zipper.restrict.summaryTitle') || 'Acceso limitado por fechas';
    }
    var enabled = !!(get('restrictionToggle') && get('restrictionToggle').checked);
    if (!enabled) {
      get('restrictionSummary').setAttribute('hidden', '');
      get('restrictionSummaryItems').innerHTML = '';
      return;
    }
    updateRestrictionDefaults();
    var startValue = get('restrictionStartInput') ? get('restrictionStartInput').value : '';
    var endValue = get('restrictionEndInput') ? get('restrictionEndInput').value : '';
    startValue = Restrictions.normalizeDateTimeValue(startValue);
    endValue = Restrictions.normalizeDateTimeValue(endValue);
    var items = [];
    if (startValue) {
      var startText = Restrictions.formatRestrictionDate(startValue, currentLang) || startValue;
      if (startText) {
        var openText = t('badges.opening', { date: startText }) || ('Inicio: ' + startText);
        items.push(openText);
      }
    }
    if (get('restrictionNoEnd') && get('restrictionNoEnd').checked) {
      items.push(t('restrictionModal.rangeNoEnd') || 'Sin fecha de fin');
    } else if (endValue) {
      var endText = Restrictions.formatRestrictionDate(endValue, currentLang) || endValue;
      if (endText) {
        var closeText = t('badges.closing', { date: endText }) || ('Fin: ' + endText);
        items.push(closeText);
      }
    }
    if (!items.length) {
      get('restrictionSummary').setAttribute('hidden', '');
      get('restrictionSummaryItems').innerHTML = '';
      return;
    }
    get('restrictionSummary').removeAttribute('hidden');
    get('restrictionSummaryItems').innerHTML = '';
    items.forEach(function (text) {
      var span = document.createElement('span');
      span.className = 'zipper-restrict-summary__item';
      span.textContent = text;
      get('restrictionSummaryItems').appendChild(span);
    });
  }


  function updateShareRestrictionSummary(restrictions) {
    if (!get('shareRestrictSummary') || !get('shareRestrictItems')) return;
    get('shareRestrictItems').innerHTML = '';
    if (!restrictions || !restrictions.enabled) {
      get('shareRestrictSummary').setAttribute('hidden', '');
      return;
    }
    var startLabel = restrictions.startAt ? Restrictions.formatRestrictionDate(restrictions.startAt, currentLang) : '';
    var endLabel = (!restrictions.neverExpires && restrictions.endAt) ? Restrictions.formatRestrictionDate(restrictions.endAt, currentLang) : '';
    if (!startLabel && !endLabel) {
      get('shareRestrictSummary').setAttribute('hidden', '');
      return;
    }
    if (startLabel) {
      var startBadge = document.createElement('span');
      startBadge.className = 'manager-badge manager-badge--start';
      startBadge.textContent = t('badges.opening', { date: startLabel });
      get('shareRestrictItems').appendChild(startBadge);
    }
    if (endLabel) {
      var endBadge = document.createElement('span');
      endBadge.className = 'manager-badge manager-badge--end';
      endBadge.textContent = t('badges.closing', { date: endLabel });
      get('shareRestrictItems').appendChild(endBadge);
    }
    get('shareRestrictSummary').removeAttribute('hidden');
  }


  function applyRestrictionsToActions(restrictions) {
    setValue('currentRestrictions', restrictions || null);
    updateShareRestrictionSummary(getValue('currentRestrictions'));
    if (getValue('ignoreRestrictionsForShare')) return;
    if (get('copyButton')) {
      get('copyButton').disabled = !getValue('currentShareLink');
    }
    if (get('embedButton')) {
      get('embedButton').disabled = !getValue('currentShareLink');
    }
  }


  function showRestrictionModal(restrictions) {
    if (getValue('ignoreRestrictionsForShare')) return;
    if (!get('restrictModal')) return;
    if (restrictCountdownTimer) {
      clearInterval(restrictCountdownTimer);
      restrictCountdownTimer = null;
    }
    if (get('restrictionCountdown')) {
      get('restrictionCountdown').textContent = '';
      get('restrictionCountdown').setAttribute('hidden', '');
    }
    var lines = [];
    if (restrictions && restrictions.startAt) {
      var startText = Restrictions.formatRestrictionDate(restrictions.startAt, currentLang);
      if (startText) lines.push(t('restrictionModal.rangeStart', { date: startText }));
    }
    if (restrictions && restrictions.neverExpires) {
      lines.push(t('restrictionModal.rangeNoEnd'));
    } else if (restrictions && restrictions.endAt) {
      var endText = Restrictions.formatRestrictionDate(restrictions.endAt, currentLang);
      if (endText) lines.push(t('restrictionModal.rangeEnd', { date: endText }));
    }
    if (get('restrictRange')) {
      get('restrictRange').textContent = lines.join(' · ');
    }
    get('restrictModal').removeAttribute('hidden');

    if (restrictions && restrictions.startAt && Restrictions.isRestrictionBeforeStart(restrictions)) {
      var updateCountdown = function () {
        var remaining = Date.parse(restrictions.startAt) - Date.now();
        if (remaining <= 0) {
          if (restrictCountdownTimer) {
            clearInterval(restrictCountdownTimer);
            restrictCountdownTimer = null;
          }
          get('restrictModal').setAttribute('hidden', '');
          var openAllowed = getValue('openAllowedResource');
          if (typeof openAllowed === 'function') {
            openAllowed();
          }
          return;
        }
        var countdownText = Restrictions.formatCountdown(remaining);
        if (get('restrictionCountdown')) {
          get('restrictionCountdown').textContent = t('restrictionModal.countdown', { time: countdownText });
          get('restrictionCountdown').removeAttribute('hidden');
        }
      };
      updateCountdown();
      restrictCountdownTimer = setInterval(updateCountdown, 1000);
    }
  }

  window.RestrictionUI = {
    init: init,
    setLang: setLang,
    applyRestrictionUiState: applyRestrictionUiState,
    updateRestrictionDefaults: updateRestrictionDefaults,
    buildRestrictionsPayload: buildRestrictionsPayload,
    updateRestrictionSummary: updateRestrictionSummary,
    updateShareRestrictionSummary: updateShareRestrictionSummary,
    applyRestrictionsToActions: applyRestrictionsToActions,
    showRestrictionModal: showRestrictionModal
  };
})();
