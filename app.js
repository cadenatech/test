(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var copyButton = document.querySelector('[data-copy]');
  var embedButton = document.querySelector('[data-embed]');
  var openLink = document.querySelector('[data-open]');
  var shareRestrictSummary = document.querySelector('[data-share-restrict-summary]');
  var shareRestrictItems = document.querySelector('[data-share-restrict-items]');
  var stepThree = document.querySelector('[data-step-three]');
  var loadingScreen = document.querySelector('[data-loading]');
  var loadingMessage = document.querySelector('[data-loading-message]');
  var loadingBar = document.querySelector('[data-loading-bar]');
  var loadingEta = document.querySelector('[data-loading-eta]');
  var mainContent = document.querySelector('[data-main]');
  var embedShell = document.querySelector('[data-embed-shell]');
  var embedFrame = document.querySelector('[data-embed-frame]');
  var embedFallback = document.querySelector('[data-embed-fallback]');
  var embedOpenFallback = document.querySelector('[data-embed-open-fallback]');
  var embedModal = document.querySelector('[data-embed-modal]');
  var embedCode = document.querySelector('[data-embed-code]');
  var embedCopyButton = document.querySelector('[data-embed-copy]');
  var embedCloseButtons = document.querySelectorAll('[data-embed-close]');
  var aboutOpen = document.querySelector('[data-about-open]');
  var aboutModal = document.querySelector('[data-about-modal]');
  var aboutCloseButtons = document.querySelectorAll('[data-about-close]');
  var restrictModal = document.querySelector('[data-restrict-modal]');
  var restrictRange = document.querySelector('[data-restrict-range]');
  var restrictCloseButtons = document.querySelectorAll('[data-restrict-close]');
  var htmlModal = document.querySelector('[data-html-modal]');
  var htmlList = document.querySelector('[data-html-list]');
  var htmlConfirm = document.querySelector('[data-html-confirm]');
  var htmlCloseButtons = document.querySelectorAll('[data-html-close]');
  var reactModal = document.querySelector('[data-react-modal]');
  var reactPrompt = document.querySelector('[data-react-prompt]');
  var reactCopyButton = document.querySelector('[data-react-copy]');
  var reactCloseButtons = document.querySelectorAll('[data-react-close]');
  var tabButtons = document.querySelectorAll('[data-tab]');
  var tabPanels = document.querySelectorAll('[data-tab-panel]');
  var publishChoice = document.querySelector('[data-publish-choice]');
  var publishModules = document.querySelectorAll('[data-publish-module]');
  var publishStartButtons = document.querySelectorAll('[data-publish-start]');
  var publishBackButtons = document.querySelectorAll('[data-publish-back]');
  var managerList = document.querySelector('[data-manager-list]');
  var storageUsed = document.querySelector('[data-storage-used]');
  var storageUsedPercent = document.querySelector('[data-storage-used-percent]');
  var storageTotal = document.querySelector('[data-storage-total]');
  var storageCount = document.querySelector('[data-storage-count]');
  var deleteAllButton = document.querySelector('[data-delete-all]');
  var dropzone = document.querySelector('[data-dropzone]');
  var folderInput = document.querySelector('[data-folder-input]');
  var fileInput = document.querySelector('[data-file-input]');
  var folderButton = document.querySelector('[data-folder-button]');
  var fileButton = document.querySelector('[data-file-button]');
  var uploadStatus = document.querySelector('[data-upload-status]');
  var buildZipButton = document.querySelector('[data-build-zip]');
  var zipStatus = document.querySelector('[data-zip-status]');
  var zipNameInput = document.querySelector('[data-zip-name]');
  var htmlZipInput = document.querySelector('[data-html-zip-input]');
  var htmlZipBuildButton = document.querySelector('[data-html-zip-build]');
  var htmlZipStatus = document.querySelector('[data-html-zip-status]');
  var langSelect = document.querySelector('[data-lang-select]');
  var cleanupThresholdInput = document.querySelector('[data-cleanup-threshold]');
  var cleanupThresholdValue = document.querySelector('[data-cleanup-threshold-value]');
  var cleanupDaysInput = document.querySelector('[data-cleanup-days]');
  var resetCleanupButton = document.querySelector('[data-reset-cleanup]');
  var managerSortSelect = document.querySelector('[data-manager-sort]');
  var managerSettingsOpenButton = document.querySelector('[data-manager-settings-open]');
  var managerSettingsModal = document.querySelector('[data-manager-settings-modal]');
  var managerSettingsCloseButtons = document.querySelectorAll('[data-manager-settings-close]');
  var languageOpenButton = document.querySelector('[data-lang-open]');
  var languagePanel = document.querySelector('[data-lang-panel]');
  var mainSettingsOpenButtons = document.querySelectorAll('[data-main-settings-open]');
  var mainSettingsModal = document.querySelector('[data-main-settings-modal]');
  var mainSettingsCloseButtons = document.querySelectorAll('[data-main-settings-close]');
  var restrictionToggle = document.querySelector('[data-restrict-toggle]');
  var restrictionFields = document.querySelector('[data-restrict-fields]');
  var restrictionActions = document.querySelector('[data-restrict-actions]');
  var restrictionStartInput = document.querySelector('[data-restrict-start]');
  var restrictionEndInput = document.querySelector('[data-restrict-end]');
  var restrictionNoEnd = document.querySelector('[data-restrict-no-end]');
  var restrictionAllowShare = document.querySelector('[data-restrict-allow-share]');
  var restrictionAllowEmbed = document.querySelector('[data-restrict-allow-embed]');
  var restrictionAllowDownload = document.querySelector('[data-restrict-allow-download]');
  var restrictionHint = document.querySelector('[data-restrict-hint]');
  var restrictionAccordion = document.querySelector('[data-restrict-accordion]');
  var restrictionZipInput = document.querySelector('[data-restrict-zip-input]');
  var restrictionZipPick = document.querySelector('[data-restrict-zip-pick]');
  var restrictionZipApply = document.querySelector('[data-restrict-zip-apply]');
  var restrictionZipStatus = document.querySelector('[data-restrict-zip-status]');
  var restrictionCountdown = document.querySelector('[data-restrict-countdown]');
  var restrictionSummary = document.querySelector('[data-restrict-summary]');
  var restrictionSummaryItems = document.querySelector('[data-restrict-summary-items]');
  var ignoreRestrictionsForShare = false;
  var restrictCountdownTimer = null;

  var currentShareLink = '';
  var currentZipUrl = '';
  var loadingActive = false;
  var progressTimer = null;
  var lastProgressValue = 0;
  var selectedFiles = [];
  var zipNameDirty = false;
  var htmlPickerResolve = null;
  var htmlPickerReject = null;
  var htmlPickerWasLoading = false;
  var toastTimer = null;
  var inlineToastTimer = null;
  var activeTitleEdit = null;
  var activePublishModule = '';
  var isEmbedMode = false;
  var currentEmbedId = '';
  var embedHeightTimer = null;
  var lastEmbedHeight = 0;
  var currentRestrictions = null;
  var restrictionZipFile = null;
  var Restrictions = window.Restrictions || {};
  if (!Restrictions.normalizeDateTimeValue) {
    Restrictions.normalizeDateTimeValue = function (value) {
      if (!value) return '';
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value + 'T00:00';
      }
      if (/^\d{4}-\d{2}-\d{2}T$/.test(value)) {
        return value + '00:00';
      }
      return value;
    };
  }
  if (!Restrictions.formatRestrictionDate) {
    Restrictions.formatRestrictionDate = function (value, lang) {
      if (!value) return '';
      var date = new Date(value);
      if (isNaN(date.getTime())) return '';
      try {
        var map = {
          es: 'es-ES',
          ca: 'ca-ES',
          gl: 'gl-ES',
          eu: 'eu-ES',
          en: 'en-US',
          de: 'de-DE'
        };
        var locale = map[lang] || lang || 'es-ES';
        var formatter = new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        return formatter.format(date);
      } catch (e) {
        return date.toISOString();
      }
    };
  }
  if (!Restrictions.formatCountdown) {
    Restrictions.formatCountdown = function (ms) {
      var totalSeconds = Math.max(0, Math.ceil(ms / 1000));
      var days = Math.floor(totalSeconds / 86400);
      var remainder = totalSeconds % 86400;
      var hours = Math.floor(remainder / 3600);
      var minutes = Math.floor((remainder % 3600) / 60);
      var seconds = remainder % 60;
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      var time = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
      return days > 0 ? (days + 'd ' + time) : time;
    };
  }
  if (!Restrictions.isRestrictionActive) {
    Restrictions.isRestrictionActive = function (restrictions) {
      return restrictions && restrictions.enabled;
    };
  }
  if (!Restrictions.isRestrictionAllowedNow) {
    Restrictions.isRestrictionAllowedNow = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      if (restrictions.startAt) {
        var start = Date.parse(restrictions.startAt);
        if (!isNaN(start) && Date.now() < start) return false;
      }
      if (restrictions.neverExpires) return true;
      if (restrictions.endAt) {
        var end = Date.parse(restrictions.endAt);
        if (!isNaN(end) && Date.now() > end) return false;
      }
      return true;
    };
  }
  if (!Restrictions.isRestrictionExpired) {
    Restrictions.isRestrictionExpired = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return false;
      if (restrictions.neverExpires) return false;
      if (!restrictions.endAt) return false;
      var end = Date.parse(restrictions.endAt);
      if (isNaN(end)) return false;
      return Date.now() > end;
    };
  }
  if (!Restrictions.isRestrictionBeforeStart) {
    Restrictions.isRestrictionBeforeStart = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return false;
      if (!restrictions.startAt) return false;
      var start = Date.parse(restrictions.startAt);
      if (isNaN(start)) return false;
      return Date.now() < start;
    };
  }
  if (!Restrictions.allowShare) {
    Restrictions.allowShare = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      return !!restrictions.allowShare;
    };
  }
  if (!Restrictions.allowEmbed) {
    Restrictions.allowEmbed = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      return !!restrictions.allowEmbed;
    };
  }
  if (!Restrictions.allowDownload) {
    Restrictions.allowDownload = function (restrictions) {
      if (!restrictions || !restrictions.enabled) return true;
      return !!restrictions.allowDownload;
    };
  }
  if (!Restrictions.extractRestrictions) {
    Restrictions.extractRestrictions = function (entries, decodeUtf8) {
      if (!entries || !entries['restrictions.json']) return null;
      try {
        var raw = decodeUtf8(entries['restrictions.json']);
        var data = JSON.parse(raw || '{}');
        if (!data || !data.enabled) return null;
        return data;
      } catch (e) {
        return null;
      }
    };
  }

  var DB_NAME = 'visor-web-sites';
  var DB_VERSION = 1;
  var STORE_SITES = 'sites';
  var STORE_FILES = 'files';

  var I18N = window.I18N || {};


  var LANG_KEY = 'visor-lang';
  var currentLang = 'es';
  var CLEANUP_THRESHOLD_KEY = 'visor-cleanup-threshold';
  var CLEANUP_DAYS_KEY = 'visor-cleanup-days';
  var CLEANUP_THRESHOLD_DEFAULT = 70;
  var CLEANUP_DAYS_DEFAULT = 30;
  var MANAGER_SORT_KEY = 'visor-manager-sort';
  var MANAGER_SORT_DIR_KEY = 'visor-manager-sort-dir';
  var MANAGER_SORT_DEFAULT = 'date';
  var MANAGER_SORT_DIR_DEFAULT = 'desc';

  var SERVICE_INFO = {
    default: {
      placeholderKey: 'service.otherPlaceholder'
    }
  };

  function normalizeLang(lang) {
    if (!lang) return 'es';
    var value = String(lang).toLowerCase();
    if (value.indexOf('-') !== -1) {
      value = value.split('-')[0];
    }
    if (value.indexOf('_') !== -1) {
      value = value.split('_')[0];
    }
    if (I18N[value]) return value;
    return 'es';
  }

  function getSavedLang() {
    try {
      return normalizeLang(localStorage.getItem(LANG_KEY));
    } catch (err) {
      return null;
    }
  }

  function getStoredNumber(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null || raw === '') return fallback;
      var value = Number(raw);
      if (value === 0) return fallback;
      if (typeof value !== 'number' || isNaN(value)) return fallback;
      return value;
    } catch (err) {
      return fallback;
    }
  }

  function getManagerSort() {
    try {
      return localStorage.getItem(MANAGER_SORT_KEY) || MANAGER_SORT_DEFAULT;
    } catch (err) {
      return MANAGER_SORT_DEFAULT;
    }
  }

  function setManagerSort(value) {
    var sortValue = value || MANAGER_SORT_DEFAULT;
    try {
      localStorage.setItem(MANAGER_SORT_KEY, sortValue);
    } catch (err) {}
    if (managerSortSelect) {
      managerSortSelect.value = sortValue;
    }
  }

  function getManagerSortDir() {
    try {
      return localStorage.getItem(MANAGER_SORT_DIR_KEY) || MANAGER_SORT_DIR_DEFAULT;
    } catch (err) {
      return MANAGER_SORT_DIR_DEFAULT;
    }
  }

  function setManagerSortDir(value) {
    var dirValue = value === 'desc' ? 'desc' : 'asc';
    try {
      localStorage.setItem(MANAGER_SORT_DIR_KEY, dirValue);
    } catch (err) {}
    updateSortDirButton(dirValue);
  }

  function updateSortDirButton(dirValue) {
    var button = document.querySelector('[data-manager-sort-dir]');
    if (!button) return;
    var isDesc = dirValue === 'desc';
    button.setAttribute('data-i18n-tooltip', 'manager.sort.dirHelp');
    button.textContent = isDesc ? '↓' : '↑';
    button.setAttribute('aria-label', t(isDesc ? 'manager.sort.dirDesc' : 'manager.sort.dirAsc'));
    button.setAttribute('data-sort-dir', isDesc ? 'desc' : 'asc');
  }

  function getCleanupThreshold() {
    var value = getStoredNumber(CLEANUP_THRESHOLD_KEY, CLEANUP_THRESHOLD_DEFAULT);
    return Math.min(95, Math.max(40, value));
  }

  function getCleanupDays() {
    var value = getStoredNumber(CLEANUP_DAYS_KEY, CLEANUP_DAYS_DEFAULT);
    return Math.min(365, Math.max(7, value));
  }

  function setCleanupThreshold(value) {
    var normalized = Math.min(95, Math.max(40, Number(value) || CLEANUP_THRESHOLD_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_THRESHOLD_KEY, String(normalized));
    } catch (err) {}
    if (cleanupThresholdInput) {
      cleanupThresholdInput.value = String(normalized);
    }
    if (cleanupThresholdValue) {
      cleanupThresholdValue.textContent = String(normalized);
    }
  }

  function setCleanupDays(value) {
    var normalized = Math.min(365, Math.max(7, Number(value) || CLEANUP_DAYS_DEFAULT));
    try {
      localStorage.setItem(CLEANUP_DAYS_KEY, String(normalized));
    } catch (err) {}
    if (cleanupDaysInput) {
      cleanupDaysInput.value = String(normalized);
    }
  }

  function getInitialLang() {
    return getSavedLang() || normalizeLang(navigator.language || navigator.userLanguage || 'es');
  }

  function t(key, vars) {
    var table = I18N[currentLang] || I18N.es;
    var fallback = I18N.es;
    var parts = (key || '').split('.');
    var value = table;
    var fallbackValue = fallback;
    for (var i = 0; i < parts.length; i += 1) {
      if (value && typeof value === 'object' && parts[i] in value) {
        value = value[parts[i]];
      } else {
        value = null;
      }
      if (fallbackValue && typeof fallbackValue === 'object' && parts[i] in fallbackValue) {
        fallbackValue = fallbackValue[parts[i]];
      } else {
        fallbackValue = null;
      }
    }
    var resolved = value != null ? value : fallbackValue;
    if (typeof resolved !== 'string') {
      return resolved || '';
    }
    if (!vars) return resolved;
    return resolved.replace(/\{(\w+)\}/g, function (match, keyName) {
      if (vars && Object.prototype.hasOwnProperty.call(vars, keyName)) {
        return String(vars[keyName]);
      }
      return '';
    });
  }

  function applyTranslations() {
    var textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n');
      var value = t(key);
      if (value) {
        node.textContent = value;
      }
    });
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach(function (node) {
      if (node.hasAttribute('data-i18n-dynamic')) return;
      var key = node.getAttribute('data-i18n-html');
      var value = t(key);
      if (value) {
        node.innerHTML = value;
      }
    });
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (node) {
      var key = node.getAttribute('data-i18n-placeholder');
      var value = t(key);
      if (value) {
        node.setAttribute('placeholder', value);
      }
    });
    var ariaLabels = document.querySelectorAll('[data-i18n-aria-label]');
    ariaLabels.forEach(function (node) {
      var key = node.getAttribute('data-i18n-aria-label');
      var value = t(key);
      if (value) {
        node.setAttribute('aria-label', value);
      }
    });
    var tooltips = document.querySelectorAll('[data-i18n-tooltip]');
    tooltips.forEach(function (node) {
      var key = node.getAttribute('data-i18n-tooltip');
      var value = t(key);
      if (value) {
        node.setAttribute('data-tooltip', value);
      }
    });
  }

  function getZipDefaultName() {
    return t('zipper.zipName.default') || 'materiales';
  }

  function syncZipNameDefault() {
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = getZipDefaultName();
    }
  }

  function setLanguage(lang) {
    currentLang = normalizeLang(lang);
    if (langSelect) {
      langSelect.value = currentLang;
    }
    if (languagePanel) {
      languagePanel.setAttribute('hidden', '');
    }
    try {
      localStorage.setItem(LANG_KEY, currentLang);
    } catch (err) {
      // ignore persistence errors
    }
    document.documentElement.setAttribute('lang', currentLang);
    applyTranslations();
    updateServiceInfo();
    syncZipNameDefault();
    setCleanupThreshold(getCleanupThreshold());
    setCleanupDays(getCleanupDays());
    updateSortDirButton(getManagerSortDir());
    if (output && !currentShareLink) {
      output.textContent = t('main.output.placeholder');
    }
    if (!selectedFiles.length) {
      setUploadStatus(t('zipper.status.empty'));
      setZipStatus(t('zipper.status.readyHint'));
    } else {
      setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
      setZipStatus(t('zipper.status.ready'));
    }
    if (htmlZipInput) {
      if (htmlZipInput.value.trim()) {
        setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        setHtmlZipStatus(t('zipper.html.status.empty'));
      }
    }
    applyRestrictionUiState();
    updateRestrictionDefaults();
    updateRestrictionSummary();
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = t('zipper.restrict.status.ready');
    }
    if (!loadingActive && loadingMessage) {
      loadingMessage.textContent = t('loading.message');
    }
    if (managerList) {
      refreshManager();
    }
  }

  function updateServiceInfo() {
    var info = SERVICE_INFO.default;
    if (input) {
      input.placeholder = t(info.placeholderKey);
    }
  }

  function setLoading(active) {
    loadingActive = !!active;
    if (loadingScreen) {
      if (active) {
        loadingScreen.removeAttribute('hidden');
      } else {
        loadingScreen.setAttribute('hidden', '');
      }
    }
    document.body.setAttribute('data-loading', active ? 'true' : 'false');
    if (!active) {
      stopProgress();
    }
  }

  function setLoadingMessage(message) {
    if (loadingMessage) {
      loadingMessage.textContent = message;
    }
  }

  function setLoadingEta(message) {
    if (loadingEta) {
      loadingEta.textContent = message;
    }
  }

  function setLoadingEtaVisible(visible) {
    if (!loadingEta) return;
    if (visible) {
      loadingEta.removeAttribute('hidden');
    } else {
      loadingEta.setAttribute('hidden', '');
    }
  }

  function setProgress(value) {
    if (!loadingBar) return;
    var percent = Math.max(0, Math.min(100, value));
    lastProgressValue = percent;
    loadingBar.style.width = percent + '%';
  }

  function startProgress(initial) {
    stopProgress();
    var current = initial || 5;
    setProgress(current);
    progressTimer = setInterval(function () {
      current = Math.min(current + 2, 85);
      setProgress(current);
    }, 600);
  }

  function stopProgress() {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  }
  function appBase() {
    var path = window.location.pathname;
    if (!path.endsWith('/')) {
      path = path.replace(/[^/]+$/, '');
    }
    return window.location.origin + path;
  }

  function setStatus(message) {
    output.textContent = message;
    if (loadingActive && !(message && /^https?:\/\//i.test(message))) {
      setLoadingMessage(message);
    }
  }

  function setShareLink(link) {
    currentShareLink = link || '';
    output.textContent = currentShareLink || t('main.output.placeholder');
    if (copyButton) {
      copyButton.disabled = !currentShareLink || !Restrictions.allowShare(currentRestrictions);
    }
    if (embedButton) {
      embedButton.disabled = !currentShareLink || !Restrictions.allowEmbed(currentRestrictions);
    }
    if (openLink) {
      openLink.href = currentShareLink || '#';
      openLink.setAttribute('aria-disabled', currentShareLink ? 'false' : 'true');
    }
    if (currentShareLink && stepThree && !isEmbedMode) {
      stepThree.scrollIntoView({ behavior: 'smooth', block: 'center' });
      stepThree.setAttribute('tabindex', '-1');
      stepThree.focus({ preventScroll: true });
    }
  }

  function flashMessage(message) {
    output.textContent = message;
    if (currentShareLink) {
      setTimeout(function () {
        output.textContent = currentShareLink;
      }, 1500);
    }
  }

  function showInlineToast(button, message) {
    if (!button) return;
    var existing = button.querySelector('.inline-toast');
    var bubble = existing || document.createElement('span');
    bubble.className = 'inline-toast';
    bubble.textContent = message;
    if (!existing) {
      button.appendChild(bubble);
    }
    button.classList.add('show-toast');
    if (inlineToastTimer) {
      clearTimeout(inlineToastTimer);
    }
    inlineToastTimer = setTimeout(function () {
      button.classList.remove('show-toast');
    }, 1300);
  }

  function formatUserError(err) {
    var message = (err && err.message) ? err.message : '';
    if (/no devolvio un ZIP|recibio HTML|devolvio HTML/i.test(message)) {
      return t('error.driveTooLarge');
    }
    return message || t('error.loadZip');
  }

  function closeHtmlPicker(message) {
    if (!htmlModal) return;
    htmlModal.setAttribute('hidden', '');
    if (htmlList) {
      htmlList.innerHTML = '';
    }
    if (htmlPickerReject) {
      var reject = htmlPickerReject;
      htmlPickerResolve = null;
      htmlPickerReject = null;
      reject(new Error(message || t('error.noHtmlSelected')));
    }
  }

  function confirmHtmlPicker() {
    if (!htmlList || !htmlPickerResolve) return;
    var choice = htmlList.querySelector('input[name="html-choice"]:checked');
    if (!choice) {
      return;
    }
    var resolve = htmlPickerResolve;
    htmlPickerResolve = null;
    htmlPickerReject = null;
    htmlModal.setAttribute('hidden', '');
    htmlList.innerHTML = '';
    resolve(choice.value);
  }

  function openHtmlPicker(htmlPaths, preferred) {
    if (!htmlModal || !htmlList || !htmlConfirm) {
      return Promise.reject(new Error(t('error.htmlPickerOpen')));
    }
    return new Promise(function (resolve, reject) {
      htmlPickerResolve = resolve;
      htmlPickerReject = reject;
      if (loadingActive) {
        htmlPickerWasLoading = true;
        setLoading(false);
      }
      htmlList.innerHTML = '';
      htmlPaths.forEach(function (path, index) {
        var id = 'html-choice-' + index;
        var label = document.createElement('label');
        label.className = 'html-option';
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'html-choice';
        input.value = path;
        input.id = id;
        if ((preferred && preferred === path) || (!preferred && index === 0)) {
          input.checked = true;
        }
        var text = document.createElement('span');
        text.textContent = path;
        label.appendChild(input);
        label.appendChild(text);
        htmlList.appendChild(label);
      });
      htmlModal.removeAttribute('hidden');
    });
  }

  function setUploadStatus(message) {
    if (uploadStatus) {
      uploadStatus.textContent = message;
    }
  }

  function setZipStatus(message) {
    if (zipStatus) {
      zipStatus.textContent = message;
    }
  }

  function setHtmlZipStatus(message) {
    if (htmlZipStatus) {
      htmlZipStatus.textContent = message;
    }
  }

  function resetZipDownload() {
    // No-op: downloads are triggered immediately after ZIP creation.
  }

  function updateSelectedFiles(files) {
    selectedFiles = files || [];
    resetZipDownload();
    if (!selectedFiles.length) {
      setUploadStatus(t('zipper.status.empty'));
      setZipStatus(t('zipper.status.readyHint'));
      if (zipNameInput && !zipNameDirty) {
        zipNameInput.value = getZipDefaultName();
      }
      return;
    }
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = deriveZipBaseName(selectedFiles);
    }
    setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
    setZipStatus(t('zipper.status.ready'));
  }

  function normalizeZipName(name) {
    var value = (name || '').trim() || getZipDefaultName();
    if (!/\.zip$/i.test(value)) {
      value += '.zip';
    }
    return value;
  }

  function encodeUtf8(text) {
    if (window.TextEncoder) {
      return new TextEncoder().encode(text);
    }
    var utf8 = unescape(encodeURIComponent(text));
    var bytes = new Uint8Array(utf8.length);
    for (var i = 0; i < utf8.length; i += 1) {
      bytes[i] = utf8.charCodeAt(i);
    }
    return bytes;
  }

  function decodeUtf8(bytes) {
    if (window.TextDecoder) {
      return new TextDecoder('utf-8').decode(bytes);
    }
    var out = '';
    for (var i = 0; i < bytes.length; i += 1) {
      out += String.fromCharCode(bytes[i]);
    }
    try {
      return decodeURIComponent(escape(out));
    } catch (e) {
      return out;
    }
  }

  function formatLocalDateTime(value) {
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return value.getFullYear()
      + '-' + pad(value.getMonth() + 1)
      + '-' + pad(value.getDate())
      + 'T' + pad(value.getHours())
      + ':' + pad(value.getMinutes());
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

  function deriveTitleFromPath(path) {
    if (!path) return '';
    var trimmed = path.replace(/[#?].*$/, '');
    var parts = trimmed.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function deriveTitleFromUrl(url) {
    if (!url) return '';
    var cleaned = url.replace(/[#?].*$/, '');
    var parts = cleaned.split('/');
    var filename = parts[parts.length - 1] || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
  }

  function readBlobText(blob) {
    if (!blob) return Promise.resolve('');
    if (blob.text) {
      return blob.text().catch(function () { return ''; });
    }
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result || '');
      };
      reader.onerror = function () {
        resolve('');
      };
      reader.readAsText(blob);
    });
  }

  function extractTitleFromFiles(files, indexPath) {
    if (!files || !files.length || !indexPath) return Promise.resolve('');
    var target = null;
    for (var i = 0; i < files.length; i += 1) {
      if (files[i].path === indexPath) {
        target = files[i];
        break;
      }
    }
    if (!target || !target.blob) return Promise.resolve('');
    return readBlobText(target.blob).then(function (text) {
      var title = '';
      if (typeof DOMParser !== 'undefined') {
        try {
          var doc = new DOMParser().parseFromString(text, 'text/html');
          title = doc && doc.title ? doc.title : '';
        } catch (err) {
          title = '';
        }
      }
      if (!title) {
        var match = text.match(/<title[^>]*>([^<]*)<\/title>/i);
        title = match ? match[1] : '';
      }
      title = (title || '').replace(/\s+/g, ' ').trim();
      return title;
    });
  }

  function collectFilesFromInput(fileList) {
    var files = [];
    Array.prototype.forEach.call(fileList || [], function (file) {
      var path = file.webkitRelativePath || file.name || '';
      if (!path) return;
      path = path.replace(/^\//, '');
      files.push({ path: path, file: file });
    });
    updateSelectedFiles(files);
  }

  function readFileEntry(entry, basePath) {
    return new Promise(function (resolve, reject) {
      entry.file(function (file) {
        var path = (basePath || '') + (file.name || '');
        resolve([{ path: path, file: file }]);
      }, reject);
    });
  }

  function readAllEntries(reader) {
    return new Promise(function (resolve, reject) {
      var entries = [];
      var readBatch = function () {
        reader.readEntries(function (batch) {
          if (!batch.length) {
            resolve(entries);
            return;
          }
          entries = entries.concat(batch);
          readBatch();
        }, reject);
      };
      readBatch();
    });
  }

  function readDirectoryEntry(entry, basePath) {
    var reader = entry.createReader();
    return readAllEntries(reader).then(function (entries) {
      var prefix = (basePath || '') + entry.name + '/';
      var promises = entries.map(function (child) {
        return readEntry(child, prefix);
      });
      return Promise.all(promises).then(function (nested) {
        return nested.reduce(function (acc, group) {
          return acc.concat(group);
        }, []);
      });
    });
  }

  function readEntry(entry, basePath) {
    if (entry.isFile) {
      return readFileEntry(entry, basePath);
    }
    if (entry.isDirectory) {
      return readDirectoryEntry(entry, basePath);
    }
    return Promise.resolve([]);
  }

  function collectFilesFromDrop(event) {
    var items = event.dataTransfer && event.dataTransfer.items;
    if (items && items.length) {
      var entries = [];
      Array.prototype.forEach.call(items, function (item) {
        if (!item.webkitGetAsEntry) return;
        var entry = item.webkitGetAsEntry();
        if (entry) {
          entries.push(entry);
        }
      });
      if (entries.length) {
        return Promise.all(entries.map(function (entry) {
          return readEntry(entry, '');
        })).then(function (nested) {
          var files = nested.reduce(function (acc, group) {
            return acc.concat(group);
          }, []);
          updateSelectedFiles(files);
        });
      }
    }
    collectFilesFromInput(event.dataTransfer.files || []);
    return Promise.resolve();
  }

  function buildZipFromSelection() {
    if (!selectedFiles.length) {
      setZipStatus(t('zipper.status.selectFirst'));
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      setZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = normalizeZipName(zipNameInput ? zipNameInput.value : '');
    setZipStatus(t('zipper.status.creating'));
    var tasks = selectedFiles.map(function (item) {
      return item.file.arrayBuffer().then(function (buffer) {
        return {
          path: item.path,
          data: new Uint8Array(buffer)
        };
      });
    });
    Promise.all(tasks).then(function (entries) {
      var files = {};
      entries.forEach(function (entry) {
        if (entry.path) {
          files[entry.path] = entry.data;
        }
      });
      var restrictions = buildRestrictionsPayload();
      if (restrictions) {
        files['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var url = URL.createObjectURL(blob);
      var anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
      setZipStatus(t('zipper.status.downloaded'));
    }).catch(function () {
      setZipStatus(t('zipper.status.failed'));
    });
  }

  function buildZipFromHtml() {
    var htmlText = htmlZipInput ? htmlZipInput.value.trim() : '';
    if (!htmlText) {
      setHtmlZipStatus(t('zipper.html.status.empty'));
      return;
    }
    if (looksLikeReactJsx(htmlText)) {
      setHtmlZipStatus(t('zipper.html.status.reactDetected'));
      openReactPromptModal(htmlText);
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      setHtmlZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = normalizeZipName(zipNameInput ? zipNameInput.value : '');
    setHtmlZipStatus(t('zipper.html.status.creating'));
    try {
      var files = {
        'index.html': encodeUtf8(htmlText)
      };
      var restrictions = buildRestrictionsPayload();
      if (restrictions) {
        files['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      }
      var zipped = window.fflate.zipSync(files);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = zipName;
      document.body.appendChild(anchor);
      anchor.click();
      URL.revokeObjectURL(anchor.href);
      document.body.removeChild(anchor);
      setHtmlZipStatus(t('zipper.html.status.downloaded'));
    } catch (err) {
      setHtmlZipStatus(t('zipper.html.status.failed'));
    }
  }

  function downloadZipBlob(blob, name) {
    var url = URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function applyRestrictionsToZipFile(file) {
    if (!file) return;
    if (!window.fflate || !window.fflate.unzipSync || !window.fflate.zipSync) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
      return;
    }
    var restrictions = buildRestrictionsPayload();
    if (!restrictions) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
      return;
    }
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = t('zipper.restrict.status.working');
    }
    file.arrayBuffer().then(function (buffer) {
      var entries = window.fflate.unzipSync(new Uint8Array(buffer));
      entries['restrictions.json'] = encodeUtf8(JSON.stringify(restrictions, null, 2));
      var zipped = window.fflate.zipSync(entries);
      var blob = new Blob([zipped], { type: 'application/zip' });
      var name = file.name || 'site.zip';
      if (/\.elpx$/i.test(name)) {
        name = name.replace(/\.elpx$/i, '-restricciones.elpx');
      } else if (/\.zip$/i.test(name)) {
        name = name.replace(/\.zip$/i, '-restricciones.zip');
      } else {
        name += '-restricciones.zip';
      }
      downloadZipBlob(blob, name);
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.done');
      }
    }).catch(function () {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.failed');
      }
    });
  }

  function looksLikeHtmlDocument(text) {
    var head = String(text || '').slice(0, 600);
    return /^\s*<!doctype\s+html\b/i.test(head) || /^\s*<html\b/i.test(head);
  }

  function looksLikeReactJsx(text) {
    var value = String(text || '');
    if (looksLikeHtmlDocument(value)) return false;
    var sample = value.slice(0, 6000);
    if (/\bimport\s+React\b/.test(sample)) return true;
    if (/\bfrom\s+['"]react['"]/.test(sample)) return true;
    if (/\breact-dom\b/.test(sample) && /\bcreateRoot\s*\(/.test(sample)) return true;
    if (/\buseState\s*\(/.test(sample) || /\buseEffect\s*\(/.test(sample)) {
      if (/\breturn\s*\(\s*<[\w]/.test(sample) || /\bclassName\s*=/.test(sample)) {
        return true;
      }
    }
    if (/\bexport\s+default\b/.test(sample) && /\breturn\s*\(\s*<[\w]/.test(sample)) return true;
    return false;
  }

  function applyRestrictionUiState() {
    var enabled = !!(restrictionToggle && restrictionToggle.checked);
    if (restrictionFields) {
      if (enabled) restrictionFields.removeAttribute('hidden');
      else restrictionFields.setAttribute('hidden', '');
    }
    if (restrictionActions) {
      if (enabled) restrictionActions.removeAttribute('hidden');
      else restrictionActions.setAttribute('hidden', '');
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
    if (restrictionHint) {
      if (enabled) restrictionHint.removeAttribute('hidden');
      else restrictionHint.setAttribute('hidden', '');
    }
    if (restrictionAccordion) {
      if (enabled) restrictionAccordion.removeAttribute('hidden');
      else restrictionAccordion.setAttribute('hidden', '');
    }
    if (restrictionNoEnd && restrictionEndInput) {
      restrictionEndInput.disabled = restrictionNoEnd.checked;
    }
    if (restrictionZipApply) {
      restrictionZipApply.disabled = !enabled || !restrictionZipFile;
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
    if (!restrictionStartInput || !restrictionEndInput) return;
    var now = new Date();
    if (!restrictionStartInput.value) {
      restrictionStartInput.value = formatLocalDateTime(now);
    }
    if (restrictionNoEnd && restrictionNoEnd.checked) {
      restrictionEndInput.value = '';
    }
  }

  function buildRestrictionsPayload() {
    if (!restrictionToggle || !restrictionToggle.checked) return null;
    updateRestrictionDefaults();
    var startValue = restrictionStartInput ? restrictionStartInput.value : '';
    var endValue = restrictionEndInput ? restrictionEndInput.value : '';
    startValue = Restrictions.normalizeDateTimeValue(startValue);
    endValue = Restrictions.normalizeDateTimeValue(endValue);
    var startAt = startValue ? new Date(startValue).toISOString() : new Date().toISOString();
    var neverExpires = !!(restrictionNoEnd && restrictionNoEnd.checked);
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
      allowShare: !!(restrictionAllowShare && restrictionAllowShare.checked),
      allowEmbed: !!(restrictionAllowEmbed && restrictionAllowEmbed.checked),
      allowDownload: !!(restrictionAllowDownload && restrictionAllowDownload.checked),
      createdAt: new Date().toISOString(),
      source: 'visor-webzip'
    };
  }

  function updateRestrictionSummary() {
    if (!restrictionSummary || !restrictionSummaryItems) return;
    var enabled = !!(restrictionToggle && restrictionToggle.checked);
    if (!enabled) {
      restrictionSummary.setAttribute('hidden', '');
      restrictionSummaryItems.innerHTML = '';
      return;
    }
    updateRestrictionDefaults();
    var startValue = restrictionStartInput ? restrictionStartInput.value : '';
    var endValue = restrictionEndInput ? restrictionEndInput.value : '';
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
    if (restrictionNoEnd && restrictionNoEnd.checked) {
      items.push(t('restrictionModal.rangeNoEnd') || 'Sin fecha de fin');
    } else if (endValue) {
      var endText = Restrictions.formatRestrictionDate(endValue, currentLang) || endValue;
      if (endText) {
        var closeText = t('badges.closing', { date: endText }) || ('Fin: ' + endText);
        items.push(closeText);
      }
    }
    if (!items.length) {
      restrictionSummary.setAttribute('hidden', '');
      restrictionSummaryItems.innerHTML = '';
      return;
    }
    restrictionSummary.removeAttribute('hidden');
    restrictionSummaryItems.innerHTML = '';
    items.forEach(function (text) {
      var span = document.createElement('span');
      span.className = 'zipper-restrict-summary__item';
      span.textContent = text;
      restrictionSummaryItems.appendChild(span);
    });
  }









  function applyRestrictionsToActions(restrictions) {
    currentRestrictions = restrictions || null;
    updateShareRestrictionSummary(currentRestrictions);
    if (ignoreRestrictionsForShare) return;
    if (copyButton) {
      copyButton.disabled = !currentShareLink || !Restrictions.allowShare(currentRestrictions);
    }
    if (embedButton) {
      embedButton.disabled = !currentShareLink || !Restrictions.allowEmbed(currentRestrictions);
    }
  }

  function updateShareRestrictionSummary(restrictions) {
    if (!shareRestrictSummary || !shareRestrictItems) return;
    shareRestrictItems.innerHTML = '';
    if (!restrictions || !restrictions.enabled) {
      shareRestrictSummary.setAttribute('hidden', '');
      return;
    }
    var startLabel = restrictions.startAt ? Restrictions.formatRestrictionDate(restrictions.startAt, currentLang) : '';
    var endLabel = (!restrictions.neverExpires && restrictions.endAt) ? Restrictions.formatRestrictionDate(restrictions.endAt, currentLang) : '';
    if (!startLabel && !endLabel) {
      shareRestrictSummary.setAttribute('hidden', '');
      return;
    }
    if (startLabel) {
      var startBadge = document.createElement('span');
      startBadge.className = 'manager-badge manager-badge--start';
      startBadge.textContent = t('badges.opening', { date: startLabel });
      shareRestrictItems.appendChild(startBadge);
    }
    if (endLabel) {
      var endBadge = document.createElement('span');
      endBadge.className = 'manager-badge manager-badge--end';
      endBadge.textContent = t('badges.closing', { date: endLabel });
      shareRestrictItems.appendChild(endBadge);
    }
    shareRestrictSummary.removeAttribute('hidden');
  }

  function showRestrictionModal(restrictions) {
    if (ignoreRestrictionsForShare) return;
    if (!restrictModal) return;
    if (restrictCountdownTimer) {
      clearInterval(restrictCountdownTimer);
      restrictCountdownTimer = null;
    }
    if (restrictionCountdown) {
      restrictionCountdown.textContent = '';
      restrictionCountdown.setAttribute('hidden', '');
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
    if (restrictRange) {
      restrictRange.textContent = lines.join(' · ');
    }
    restrictModal.removeAttribute('hidden');

    if (restrictions && restrictions.startAt && Restrictions.isRestrictionBeforeStart(restrictions)) {
      var updateCountdown = function () {
        var remaining = Date.parse(restrictions.startAt) - Date.now();
        if (remaining <= 0) {
          if (restrictCountdownTimer) {
            clearInterval(restrictCountdownTimer);
            restrictCountdownTimer = null;
          }
          restrictModal.setAttribute('hidden', '');
          if (window.location.search.indexOf('url=') !== -1) {
            var previewUrl = currentZipUrl || urlParam;
            if (previewUrl) {
              loadZip(previewUrl, { force: false, autoOpen: true });
            }
          }
          return;
        }
        var countdownText = Restrictions.formatCountdown(remaining);
        if (restrictionCountdown) {
          restrictionCountdown.textContent = t('restrictionModal.countdown', { time: countdownText });
          restrictionCountdown.removeAttribute('hidden');
        }
      };
      updateCountdown();
      restrictCountdownTimer = setInterval(updateCountdown, 1000);
    }
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      return Promise.reject(new Error(t('error.serviceWorkerUnavailable')));
    }
    return navigator.serviceWorker.register('sw.js', { scope: './' }).then(function () {
      return navigator.serviceWorker.ready;
    });
  }

  function waitForServiceWorkerControl() {
    if (!('serviceWorker' in navigator)) {
      return Promise.resolve();
    }
    if (navigator.serviceWorker.controller) {
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var resolved = false;
      var finish = function () {
        if (resolved) return;
        resolved = true;
        navigator.serviceWorker.removeEventListener('controllerchange', onChange);
        resolve();
      };
      var onChange = function () {
        if (navigator.serviceWorker.controller) {
          finish();
        }
      };
      navigator.serviceWorker.addEventListener('controllerchange', onChange);
      setTimeout(finish, 5000);
    });
  }

  function openDb() {
    return new Promise(function (resolve, reject) {
      var request = window.indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = function () {
        var db = request.result;
        if (!db.objectStoreNames.contains(STORE_SITES)) {
          db.createObjectStore(STORE_SITES, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORE_FILES)) {
          var store = db.createObjectStore(STORE_FILES, { keyPath: 'key' });
          store.createIndex('siteId', 'siteId', { unique: false });
        }
      };
      request.onsuccess = function () {
        resolve(request.result);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function withStore(storeName, mode, action) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(storeName, mode);
        var store = tx.objectStore(storeName);
        var request = action(store);
        request.onsuccess = function () {
          resolve(request.result);
        };
        request.onerror = function () {
          reject(request.error);
        };
      });
    });
  }

  function getSite(siteId) {
    return withStore(STORE_SITES, 'readonly', function (store) {
      return store.get(siteId);
    });
  }

  function saveSite(site) {
    return withStore(STORE_SITES, 'readwrite', function (store) {
      return store.put(site);
    });
  }

  function getAllSites() {
    return withStore(STORE_SITES, 'readonly', function (store) {
      return store.getAll();
    }).then(function (sites) {
      return sites || [];
    });
  }

  function saveFiles(files) {
    if (!files.length) {
      return Promise.resolve();
    }
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(STORE_FILES, 'readwrite');
        var store = tx.objectStore(STORE_FILES);
        files.forEach(function (file) {
          store.put(file);
        });
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function deleteSite(siteId) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction([STORE_SITES, STORE_FILES], 'readwrite');
        tx.objectStore(STORE_SITES).delete(siteId);
        var fileStore = tx.objectStore(STORE_FILES);
        var index = fileStore.index('siteId');
        var request = index.getAllKeys(IDBKeyRange.only(siteId));
        request.onsuccess = function () {
          var keys = request.result || [];
          keys.forEach(function (key) {
            fileStore.delete(key);
          });
        };
        tx.oncomplete = function () {
          resolve();
        };
        tx.onerror = function () {
          reject(tx.error);
        };
      });
    });
  }

  function normalizePath(path) {
    return path.replace(/\\/g, '/').replace(/^\.?\//, '');
  }

  function guessMimeType(path) {
    var lower = path.toLowerCase();
    if (lower.endsWith('.html') || lower.endsWith('.htm')) return 'text/html';
    if (lower.endsWith('.css')) return 'text/css';
    if (lower.endsWith('.js')) return 'text/javascript';
    if (lower.endsWith('.json')) return 'application/json';
    if (lower.endsWith('.svg')) return 'image/svg+xml';
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
    if (lower.endsWith('.gif')) return 'image/gif';
    if (lower.endsWith('.webp')) return 'image/webp';
    if (lower.endsWith('.woff')) return 'font/woff';
    if (lower.endsWith('.woff2')) return 'font/woff2';
    if (lower.endsWith('.ttf')) return 'font/ttf';
    if (lower.endsWith('.otf')) return 'font/otf';
    if (lower.endsWith('.ico')) return 'image/x-icon';
    if (lower.endsWith('.mp3')) return 'audio/mpeg';
    if (lower.endsWith('.mp4')) return 'video/mp4';
    if (lower.endsWith('.webm')) return 'video/webm';
    return 'application/octet-stream';
  }

  function extractDriveId(url) {
    var match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    match = url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    match = url.match(/drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  }

  function normalizeZipUrl(url) {
    var driveId = extractDriveId(url);
    if (driveId) {
      return 'https://drive.google.com/uc?export=download&id=' + driveId;
    }
    if (url.indexOf('dropbox.com') !== -1) {
      return url.replace(/([?&])dl=0\b/, '$1dl=1');
    }
    var isNextcloud = false;
    var host = '';
    var path = '';
    try {
      var parsed = new URL(url);
      host = parsed.hostname || '';
      path = parsed.pathname || '';
    } catch (e) {
      // Ignore invalid URLs; fall back to simple checks.
      path = url;
    }
    var looksLikeNextcloud = path.indexOf('/s/') !== -1 && host.indexOf('drive.google.com') === -1;
    if (isNextcloud || looksLikeNextcloud) {
      if (url.indexOf('/download') === -1 && url.indexOf('download=1') === -1) {
        var parts = url.split('#');
        var baseAndQuery = parts[0];
        var hash = parts.length > 1 ? '#' + parts.slice(1).join('#') : '';
        var queryIndex = baseAndQuery.indexOf('?');
        var base = queryIndex === -1 ? baseAndQuery : baseAndQuery.slice(0, queryIndex);
        var query = queryIndex === -1 ? '' : baseAndQuery.slice(queryIndex);
        base = base.replace(/\/$/, '') + '/download';
        return base + query + hash;
      }
    }
    return url;
  }

  function sha1Hex(value) {
    if (!window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      return Promise.reject(new Error(t('error.sha1Unavailable')));
    }
    var data = new TextEncoder().encode(value);
    return window.crypto.subtle.digest('SHA-1', data).then(function (hash) {
      var bytes = Array.from(new Uint8Array(hash));
      return bytes.map(function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  function computeSiteId(zipUrl) {
    return sha1Hex(normalizeZipUrl(zipUrl));
  }

  function formatBytes(bytes) {
    if (!bytes) return '0 B';
    var units = (I18N[currentLang] && I18N[currentLang].units) ? I18N[currentLang].units : I18N.es.units;
    var idx = 0;
    var value = bytes;
    while (value >= 1024 && idx < units.length - 1) {
      value /= 1024;
      idx += 1;
    }
    return value.toFixed(value >= 10 || idx === 0 ? 0 : 1) + ' ' + units[idx];
  }

  function sumSiteBytes(sites) {
    return sites.reduce(function (sum, site) {
      return sum + (site.totalBytes || 0);
    }, 0);
  }

  function estimateStorage() {
    if (navigator.storage && navigator.storage.estimate) {
      return navigator.storage.estimate().catch(function () {
        return null;
      });
    }
    return Promise.resolve(null);
  }

  function deleteSitesSequential(siteIds) {
    return siteIds.reduce(function (promise, siteId) {
      return promise.then(function () {
        return deleteSite(siteId);
      });
    }, Promise.resolve());
  }

  function chooseOldestSites(sites, targetBytes) {
    var sorted = sites.slice().sort(function (a, b) {
      return (a.updatedAt || 0) - (b.updatedAt || 0);
    });
    var total = sumSiteBytes(sorted);
    var toDelete = [];
    for (var i = 0; i < sorted.length && total > targetBytes; i += 1) {
      var site = sorted[i];
      total -= site.totalBytes || 0;
      toDelete.push(site.id);
    }
    return toDelete;
  }

  function ensureStorageCapacity(extraBytes) {
    return Promise.all([getAllSites(), estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var quota = estimate && estimate.quota ? estimate.quota : 0;
      var usage = estimate && estimate.usage ? estimate.usage : sumSiteBytes(sites);
      if (!quota) {
        return true;
      }
      var projected = usage + (extraBytes || 0);
      var limit = quota * (getCleanupThreshold() / 100);
      if (projected < limit) {
        return true;
      }
      var target = Math.max(0, limit - (extraBytes || 0));
      var toDelete = chooseOldestSites(sites, target);
      if (!toDelete.length) return false;
      return deleteSitesSequential(toDelete).then(function () {
        return ensureStorageCapacity(extraBytes);
      });
    });
  }

  function cleanupOldSites() {
    var cutoff = Date.now() - getCleanupDays() * 24 * 60 * 60 * 1000;
    return getAllSites().then(function (sites) {
      var oldIds = sites.filter(function (site) {
        return site.updatedAt && site.updatedAt < cutoff;
      }).map(function (site) { return site.id; });
      if (!oldIds.length) return;
      return deleteSitesSequential(oldIds);
    });
  }

  function renderManagerList(sites) {
    if (!managerList) return;
    managerList.innerHTML = '';
    if (!sites.length) {
      var managerToolbar = document.querySelector('.manager-toolbar');
      if (managerToolbar) {
        managerToolbar.setAttribute('hidden', '');
      }
      var empty = document.createElement('p');
      empty.textContent = t('manager.empty');
      managerList.appendChild(empty);
      return;
    }
    var managerToolbar = document.querySelector('.manager-toolbar');
    if (managerToolbar) {
      managerToolbar.removeAttribute('hidden');
    }
    var sortedSites = sortManagerSites(sites);
    sortedSites.forEach(function (site) {
      var restrictions = site.restrictions || null;
      var canShare = Restrictions.allowShare(restrictions);
      var canEmbed = Restrictions.allowEmbed(restrictions);
      var canView = !Restrictions.isRestrictionBeforeStart(restrictions);
      var canDownload = Restrictions.allowDownload(restrictions);
      var item = document.createElement('div');
      item.className = 'manager-item';
      var info = document.createElement('div');
      var title = document.createElement('div');
      title.className = 'manager-item__title';
      title.setAttribute('data-title', 'true');
      var displayTitle = site.title || deriveTitleFromPath(site.indexPath) || site.url || t('manager.siteNoUrl');
      title.textContent = displayTitle;
      var meta = document.createElement('div');
      meta.className = 'manager-item__meta';
      var date = site.updatedAt ? new Date(site.updatedAt).toLocaleString(currentLang) : t('manager.noDate');
      meta.textContent = formatBytes(site.totalBytes || 0) + ' · ' + date;
      if (restrictions && restrictions.enabled) {
        var startLabel = restrictions.startAt ? Restrictions.formatRestrictionDate(restrictions.startAt, currentLang) : '';
        var endLabel = (!restrictions.neverExpires && restrictions.endAt) ? Restrictions.formatRestrictionDate(restrictions.endAt, currentLang) : '';
        if (startLabel) {
          var startBadge = document.createElement('span');
          startBadge.className = 'manager-badge manager-badge--start';
          startBadge.textContent = t('badges.opening', { date: startLabel });
          meta.appendChild(startBadge);
        }
        if (endLabel) {
          var endBadge = document.createElement('span');
          endBadge.className = 'manager-badge manager-badge--end';
          endBadge.textContent = t('badges.closing', { date: endLabel });
          meta.appendChild(endBadge);
        }
        if (!startLabel && !endLabel) {
          var genericBadge = document.createElement('span');
          genericBadge.className = 'manager-badge';
          genericBadge.textContent = t('badges.scheduled');
          meta.appendChild(genericBadge);
        }
      }
      info.appendChild(title);
      if (site.url && displayTitle !== site.url) {
        var urlLine = document.createElement('div');
        urlLine.className = 'manager-item__url';
        urlLine.textContent = site.url;
        info.appendChild(urlLine);
      }
      info.appendChild(meta);
      var actions = document.createElement('div');
      actions.className = 'manager-item__actions';
      var viewButton = document.createElement('button');
      viewButton.type = 'button';
      viewButton.className = 'icon-button';
      viewButton.setAttribute('data-action', 'view');
      viewButton.setAttribute('data-site-id', site.id);
      viewButton.setAttribute('data-index-path', site.indexPath || '');
      viewButton.setAttribute('aria-label', t('manager.actions.view'));
      viewButton.setAttribute('data-tooltip', t('manager.actions.view'));
      viewButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7-10.5-7-10.5-7z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>';
      actions.appendChild(viewButton);
      viewButton.disabled = !canView;
      var shareButton = document.createElement('button');
      shareButton.type = 'button';
      shareButton.className = 'icon-button';
      shareButton.setAttribute('data-action', 'share');
      shareButton.setAttribute('data-zip-url', site.url || '');
      shareButton.setAttribute('aria-label', t('manager.actions.share'));
      shareButton.setAttribute('data-tooltip', t('manager.actions.share'));
      shareButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.6 10.7l6.8-3.4"></path><path d="M8.6 13.3l6.8 3.4"></path></svg>';
      actions.appendChild(shareButton);
      shareButton.disabled = !site.url || !canShare;
      var embedManagerButton = document.createElement('button');
      embedManagerButton.type = 'button';
      embedManagerButton.className = 'icon-button';
      embedManagerButton.setAttribute('data-action', 'embed');
      embedManagerButton.setAttribute('data-zip-url', site.url || '');
      embedManagerButton.setAttribute('aria-label', t('manager.actions.embed'));
      embedManagerButton.setAttribute('data-tooltip', t('manager.actions.embed'));
      embedManagerButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path><path d="M14 4l-4 16"></path></svg>';
      actions.appendChild(embedManagerButton);
      embedManagerButton.disabled = !site.url || !canEmbed;
      var editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.className = 'icon-button';
      editButton.setAttribute('data-action', 'edit');
      editButton.setAttribute('data-site-id', site.id);
      editButton.setAttribute('aria-label', t('manager.actions.edit'));
      editButton.setAttribute('data-tooltip', t('manager.actions.edit'));
      editButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>';
      actions.appendChild(editButton);
      var downloadButton = document.createElement('button');
      downloadButton.type = 'button';
      downloadButton.className = 'icon-button';
      downloadButton.setAttribute('data-action', 'download');
      downloadButton.setAttribute('data-zip-url', site.url || '');
      downloadButton.setAttribute('aria-label', t('manager.actions.download'));
      downloadButton.setAttribute('data-tooltip', t('manager.actions.download'));
      downloadButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v10"></path><path d="M7 9l5 5 5-5"></path><path d="M5 21h14"></path></svg>';
      actions.appendChild(downloadButton);
      downloadButton.disabled = !site.url || !canDownload;
      var delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.className = 'icon-button';
      delButton.setAttribute('data-action', 'delete');
      delButton.setAttribute('data-site-id', site.id);
      delButton.setAttribute('aria-label', t('common.delete'));
      delButton.setAttribute('data-tooltip', t('common.delete'));
      delButton.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>';
      actions.appendChild(delButton);
      item.appendChild(info);
      item.appendChild(actions);
      managerList.appendChild(item);
    });
  }

  function refreshManager() {
    return Promise.all([getAllSites(), estimateStorage()]).then(function (result) {
      var sites = result[0];
      var estimate = result[1];
      var expiredIds = sites.filter(function (site) {
        return Restrictions.isRestrictionActive(site.restrictions) && Restrictions.isRestrictionExpired(site.restrictions);
      }).map(function (site) { return site.id; });
      if (expiredIds.length) {
        return deleteSitesSequential(expiredIds).then(function () {
          return refreshManager();
        });
      }
      var totalBytes = sumSiteBytes(sites);
      if (storageUsed) {
        storageUsed.textContent = formatBytes(totalBytes);
      }
      if (storageUsedPercent) {
        var quota = estimate && estimate.quota ? estimate.quota : 0;
        if (quota) {
          var percent = Math.min(100, Math.round((totalBytes / quota) * 100));
          storageUsedPercent.textContent = percent + '%';
        } else {
          storageUsedPercent.textContent = '--';
        }
      }
      if (storageTotal) {
        storageTotal.textContent = estimate && estimate.quota ? formatBytes(estimate.quota) : '--';
      }
      if (storageCount) {
        storageCount.textContent = String(sites.length);
      }
      renderManagerList(sites);
    });
  }

  function sortManagerSites(sites) {
    var key = getManagerSort();
    var direction = getManagerSortDir();
    var factor = direction === 'desc' ? -1 : 1;
    var collator = new Intl.Collator(currentLang, { sensitivity: 'base', numeric: true });
    return sites.slice().sort(function (a, b) {
      if (key === 'date') {
        var aDate = a.updatedAt || 0;
        var bDate = b.updatedAt || 0;
        return (aDate - bDate) * factor;
      }
      if (key === 'size') {
        var aSize = a.totalBytes || 0;
        var bSize = b.totalBytes || 0;
        return (aSize - bSize) * factor;
      }
      var aTitle = a.title || deriveTitleFromPath(a.indexPath) || a.url || '';
      var bTitle = b.title || deriveTitleFromPath(b.indexPath) || b.url || '';
      return collator.compare(aTitle, bTitle) * factor;
    });
  }

  function closeActiveTitleEdit() {
    if (!activeTitleEdit) return;
    var input = activeTitleEdit.input;
    var titleEl = activeTitleEdit.titleEl;
    if (input && input.parentNode) {
      input.parentNode.replaceChild(titleEl, input);
    }
    activeTitleEdit = null;
  }

  function startTitleEdit(siteId, titleEl) {
    if (!siteId || !titleEl) return;
    if (activeTitleEdit && activeTitleEdit.siteId === siteId) return;
    closeActiveTitleEdit();
    var currentText = titleEl.textContent || '';
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'manager-item__title-edit';
    input.value = currentText;
    titleEl.parentNode.replaceChild(input, titleEl);
    input.focus();
    input.select();
    activeTitleEdit = { siteId: siteId, input: input, titleEl: titleEl };

    var save = function () {
      var value = input.value.trim().replace(/\s+/g, ' ');
      getSite(siteId).then(function (site) {
        if (!site) return;
        site.title = value;
        return saveSite(site).then(function () {
          refreshManager();
        });
      }).finally(function () {
        closeActiveTitleEdit();
      });
    };

    input.addEventListener('blur', function () {
      save();
    });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        save();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closeActiveTitleEdit();
      }
    });
  }

  function setActiveTab(name) {
    document.body.setAttribute('data-active-tab', name);
    tabButtons.forEach(function (button) {
      var isActive = button.getAttribute('data-tab') === name;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    tabPanels.forEach(function (panel) {
      var isActive = panel.getAttribute('data-tab-panel') === name;
      panel.classList.toggle('is-active', isActive);
    });
    if (name === 'manager') {
      refreshManager();
    }
  }

  function setPublishModule(name) {
    if (!publishChoice || !publishModules.length) return;
    activePublishModule = name || '';
    if (activePublishModule) {
      publishChoice.setAttribute('hidden', '');
    } else {
      publishChoice.removeAttribute('hidden');
    }
    publishModules.forEach(function (moduleEl) {
      var isActive = moduleEl.getAttribute('data-publish-module') === activePublishModule;
      if (isActive) {
        moduleEl.removeAttribute('hidden');
      } else {
        moduleEl.setAttribute('hidden', '');
      }
    });
  }

  function buildShareLink(zipUrl, fullView) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl);
    if (fullView) {
      base += '&view=full';
    }
    return base;
  }

  function createEmbedId() {
    return 'vwz-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function buildEmbedLink(zipUrl, embedId) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl) + '&embed=1';
    if (embedId) {
      base += '&embedId=' + encodeURIComponent(embedId);
    }
    return base;
  }

  function buildEmbedSnippet(zipUrl) {
    var embedId = createEmbedId();
    var iframeId = 'visor-webzip-' + embedId;
    var src = buildEmbedLink(zipUrl, embedId);
    var origin = window.location.origin;
    return '<iframe id="' + iframeId + '" src="' + src + '" style="width:100%;height:80vh;border:0" loading="lazy" allow="fullscreen"></iframe>\n'
      + '<script>\n'
      + '(function(){\n'
      + '  var iframe=document.getElementById(' + JSON.stringify(iframeId) + ');\n'
      + '  if(!iframe) return;\n'
      + '  window.addEventListener(\"message\", function(event){\n'
      + '    if(event.origin!==' + JSON.stringify(origin) + ') return;\n'
      + '    var data=event.data||{};\n'
      + '    if(data.type!==\"visor-webzip:height\") return;\n'
      + '    if(data.embedId!==' + JSON.stringify(embedId) + ') return;\n'
      + '    var height=Number(data.height)||0;\n'
      + '    if(height>0) iframe.style.height=height+\"px\";\n'
      + '  }, false);\n'
      + '})();\n'
      + '</script>';
  }

  function buildSiteUrl(siteId, indexPath) {
    var base = appBase() + 'site/' + siteId + '/';
    if (indexPath) {
      return base + encodeURI(indexPath);
    }
    return base;
  }

  function closeEmbedModal() {
    if (!embedModal) return;
    embedModal.setAttribute('hidden', '');
  }

  function openEmbedModalForZip(zipUrl) {
    if (!embedModal || !embedCode || !zipUrl) return;
    embedCode.value = buildEmbedSnippet(zipUrl);
    embedModal.removeAttribute('hidden');
    try {
      embedCode.focus();
      embedCode.select();
    } catch (e) {
      // ignore
    }
  }

  function closeManagerSettingsModal() {
    if (!managerSettingsModal) return;
    managerSettingsModal.setAttribute('hidden', '');
  }

  function openManagerSettingsModal() {
    if (!managerSettingsModal) return;
    managerSettingsModal.removeAttribute('hidden');
    try {
      if (cleanupThresholdInput) {
        cleanupThresholdInput.focus();
      }
    } catch (e) {
      // ignore
    }
  }

  function closeMainSettingsModal() {
    if (!mainSettingsModal) return;
    mainSettingsModal.setAttribute('hidden', '');
  }

  function openMainSettingsModal() {
    if (!mainSettingsModal) return;
    mainSettingsModal.removeAttribute('hidden');
  }

  function closeReactPromptModal() {
    if (!reactModal) return;
    reactModal.setAttribute('hidden', '');
  }

  function openReactPromptModal(code) {
    if (!reactModal || !reactPrompt) return;
    var basePrompt = t('reactPrompt.prompt');
    var fullPrompt = basePrompt;
    if (code) {
      fullPrompt += '\n\n' + String(code);
    }
    reactPrompt.value = fullPrompt;
    reactModal.removeAttribute('hidden');
    try {
      reactPrompt.focus();
      reactPrompt.select();
    } catch (e) {
      // ignore
    }
  }

  function setEmbedMode(enabled, embedId) {
    isEmbedMode = !!enabled;
    currentEmbedId = embedId || '';
    if (!isEmbedMode) {
      stopEmbedHeightTracking();
    }
    if (mainContent) {
      if (isEmbedMode) {
        mainContent.setAttribute('hidden', '');
      } else {
        mainContent.removeAttribute('hidden');
      }
    }
    if (embedShell) {
      if (isEmbedMode) {
        embedShell.removeAttribute('hidden');
      } else {
        embedShell.setAttribute('hidden', '');
      }
    }
  }

  function postToParent(message) {
    if (!isEmbedMode) return;
    if (!currentEmbedId) return;
    if (!window.parent || window.parent === window) return;
    try {
      window.parent.postMessage(message, '*');
    } catch (e) {
      // ignore
    }
  }

  function sendEmbedHeight(height) {
    postToParent({
      type: 'visor-webzip:height',
      embedId: currentEmbedId,
      height: height,
      url: window.location.href
    });
  }

  function sendEmbedReady(siteUrl) {
    postToParent({
      type: 'visor-webzip:ready',
      embedId: currentEmbedId,
      siteUrl: siteUrl || '',
      url: window.location.href
    });
  }

  function sendEmbedError(message) {
    postToParent({
      type: 'visor-webzip:error',
      embedId: currentEmbedId,
      message: message || '',
      url: window.location.href
    });
  }

  function stopEmbedHeightTracking() {
    if (embedHeightTimer) {
      clearInterval(embedHeightTimer);
      embedHeightTimer = null;
    }
  }

  function getEmbedContentHeight() {
    if (!embedFrame) return 0;
    try {
      var doc = embedFrame.contentDocument;
      if (!doc) return 0;
      var body = doc.body;
      var html = doc.documentElement;
      var height = Math.max(
        body ? body.scrollHeight : 0,
        html ? html.scrollHeight : 0,
        body ? body.offsetHeight : 0,
        html ? html.offsetHeight : 0
      );
      return height || 0;
    } catch (e) {
      return 0;
    }
  }

  function startEmbedHeightTracking() {
    if (!isEmbedMode) return;
    stopEmbedHeightTracking();
    lastEmbedHeight = 0;
    embedHeightTimer = setInterval(function () {
      var height = getEmbedContentHeight();
      if (!height) return;
      if (Math.abs(height - lastEmbedHeight) < 2) return;
      lastEmbedHeight = height;
      sendEmbedHeight(height);
    }, 450);
  }

  function showEmbedFallback(zipUrl, message) {
    if (embedFallback) {
      embedFallback.removeAttribute('hidden');
    }
    if (embedOpenFallback) {
      embedOpenFallback.href = buildShareLink(zipUrl, true);
    }
    if (message) {
      sendEmbedError(message);
    }
    stopProgress();
    setLoading(false);
  }

  function openEmbedSite(siteUrl) {
    if (!embedFrame) return;
    if (embedFallback) {
      embedFallback.setAttribute('hidden', '');
    }
    setLoading(true);
    embedFrame.onload = function () {
      setLoading(false);
      sendEmbedReady(siteUrl);
      startEmbedHeightTracking();
      setTimeout(function () {
        var height = getEmbedContentHeight();
        if (height) {
          lastEmbedHeight = height;
          sendEmbedHeight(height);
        }
      }, 60);
    };
    embedFrame.src = siteUrl;
  }

  function base64ToBytes(base64) {
    var binary = atob(base64);
    var len = binary.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
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
    var downloadStartedAt = Date.now();
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
        setLoadingEtaVisible(false);
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
        setLoadingEta(t('loading.etaPrefix') + etaText);
        setLoadingEtaVisible(true);
      } else {
        setLoadingEtaVisible(false);
      }
    }

    function updateDownloadProgress() {
      var info = buildDownloadMessage();
      setLoadingMessage(info.message);

      if (!totalSize) return;
      var pct = info.pct;
      var progress = baseProgress + Math.round(pct * 100);
      if (progress > 100) progress = 100;
      if (progress < maxProgress) progress = maxProgress;
      maxProgress = progress;
      setProgress(progress);
    }

    stopProgress();
    startProgress(2);
    setLoadingMessage(t('status.connecting') + '...');
    updateDownloadProgress();
    etaTimer = setInterval(function () {
      dotPhase = (dotPhase + 1) % 3;
      dotText = dotPhase === 0 ? '.' : (dotPhase === 1 ? '..' : '...');
      var info = buildDownloadMessage();
      if (info.message !== lastEtaText) {
        lastEtaText = info.message;
        setLoadingMessage(info.message);
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
              stopProgress();
              setProgress(0);
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
          setLoadingMessage('Reintentando trozo ' + (part + 1) + ' (' + (tries + 1) + '/2)...');
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

  function fetchZipBundle(zipUrl) {
    if (!GAS_WEBAPP_URL) {
      return Promise.reject(new Error(t('error.configMissing')));
    }
    var endpoint = GAS_WEBAPP_URL + '?url=' + encodeURIComponent(zipUrl) + '&bundle=1';
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
        return data;
      })
      .catch(function () {
        return fetchZipBundleChunked(zipUrl);
      });
  }

  function findIndexPath(paths) {
    var lower = paths.map(function (path) { return path.toLowerCase(); });
    var idx = lower.findIndex(function (p) {
      return p === 'index.html' || p.endsWith('/index.html');
    });
    if (idx !== -1) return paths[idx];
    idx = lower.findIndex(function (p) {
      return p === 'index.htm' || p.endsWith('/index.htm');
    });
    if (idx !== -1) return paths[idx];
    var htmlIndex = lower.findIndex(function (p) { return p.endsWith('.html') || p.endsWith('.htm'); });
    if (htmlIndex !== -1) return paths[htmlIndex];
    return paths[0] || '';
  }

  function pickIndexPath(paths) {
    var htmlPaths = paths.filter(function (path) {
      var lower = path.toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (!htmlPaths.length) {
      return Promise.reject(new Error(t('error.needHtmlFile')));
    }
    var preferred = findIndexPath(paths);
    if (preferred && /index\.html?$/.test(preferred.toLowerCase())) {
      return Promise.resolve(preferred);
    }
    if (htmlPaths.length === 1) {
      return Promise.resolve(htmlPaths[0]);
    }
    return openHtmlPicker(htmlPaths, preferred || htmlPaths[0]);
  }

  function loadZip(zipUrl, options) {
    var opts = options || {};
    var autoOpen = !!opts.autoOpen;
    var showProgress = opts.showProgress !== false;
    var normalizedZipUrl = normalizeZipUrl(zipUrl);
    var shouldUseNormalized = false;
    if (normalizedZipUrl.indexOf('/s/') !== -1 || normalizedZipUrl.indexOf('nextcloud') !== -1) {
      shouldUseNormalized = true;
    }
    if (zipUrl.indexOf('dropbox.com') !== -1) {
      shouldUseNormalized = true;
    }
    var effectiveZipUrl = shouldUseNormalized ? normalizedZipUrl : zipUrl;
    if (shouldUseNormalized && input && input.value && input.value.trim() === zipUrl && normalizedZipUrl !== zipUrl) {
      input.value = normalizedZipUrl;
    }
    if (autoOpen) {
      setLoading(true);
      setProgress(5);
      setLoadingMessage(t('status.preparing'));
    }
    if (!GAS_WEBAPP_URL) {
      setStatus(t('error.configMissing'));
      if (showProgress && !autoOpen) {
        setLoading(false);
      }
      return Promise.resolve();
    }
    setStatus(t('status.preparingZip'));
    if (autoOpen) {
      startProgress(8);
    }

    var workerPromise = registerServiceWorker().catch(function () {
      throw new Error(t('error.offlineNotAllowed'));
    });
    var controlPromise = workerPromise.then(function () {
      return waitForServiceWorkerControl();
    });

    return computeSiteId(effectiveZipUrl)
      .then(function (siteId) {
        return getSite(siteId).then(function (site) {
          return { siteId: siteId, cached: !!site, site: site };
        });
      })
      .then(function (result) {
        currentZipUrl = effectiveZipUrl;
        var shareLink = buildShareLink(effectiveZipUrl, true);
        setShareLink(shareLink);

        if (result.cached && !opts.force) {
          if (result.site && Restrictions.isRestrictionActive(result.site.restrictions) && !Restrictions.isRestrictionAllowedNow(result.site.restrictions)) {
            if (Restrictions.isRestrictionExpired(result.site.restrictions)) {
              if (opts.allowInactive) {
                setStatus(t('status.restrictedReady'));
                if (showProgress && !autoOpen) {
                  setLoading(false);
                }
                currentRestrictions = result.site ? result.site.restrictions || null : null;
                applyRestrictionsToActions(currentRestrictions);
                return { siteId: result.siteId, siteUrl: null };
              }
              return deleteSite(result.siteId).then(function () {
                showRestrictionModal(result.site.restrictions);
                var err = new Error(t('error.restricted'));
                err.skipStatus = true;
                throw err;
              });
            }
            if (opts.allowInactive) {
              setStatus(t('status.restrictedReady'));
              if (showProgress && !autoOpen) {
                setLoading(false);
              }
              currentRestrictions = result.site ? result.site.restrictions || null : null;
              applyRestrictionsToActions(currentRestrictions);
              return { siteId: result.siteId, siteUrl: null };
            }
            showRestrictionModal(result.site.restrictions);
            var errInactive = new Error(t('error.restricted'));
            errInactive.skipStatus = true;
            throw errInactive;
          }
          if (opts.embed && result.site && Restrictions.isRestrictionActive(result.site.restrictions) && !Restrictions.allowEmbed(result.site.restrictions)) {
            throw new Error(t('error.embedNotAllowed'));
          }
          var siteUrl = buildSiteUrl(result.siteId, result.site.indexPath);
          return controlPromise.then(function () {
            if (opts.embed) {
              openEmbedSite(siteUrl);
              return { siteId: result.siteId, siteUrl: siteUrl };
            }
            if (autoOpen) {
              setProgress(100);
              window.location.assign(siteUrl);
            }
            if (showProgress && !autoOpen) {
              setLoading(false);
            }
            currentRestrictions = result.site ? result.site.restrictions || null : null;
            applyRestrictionsToActions(currentRestrictions);
            return { siteId: result.siteId, siteUrl: siteUrl };
          });
        }

        setStatus(t('status.downloadingZip'));
        if (showProgress && !autoOpen) {
          setLoading(true);
          setLoadingMessage(t('status.connecting') + '...');
          startProgress(2);
          setLoadingEtaVisible(false);
        }
        if (autoOpen) {
          stopProgress();
          startProgress(2);
          setLoadingEtaVisible(false);
        }
        return fetchZipBundle(effectiveZipUrl).then(function (bundle) {
          if (autoOpen || showProgress) {
            stopProgress();
            setProgress(100);
            setLoadingEtaVisible(false);
          }
          setStatus(t('status.unpacking'));
          if (autoOpen || showProgress) {
            stopProgress();
            setProgress(0);
            setLoadingMessage(t('status.unpacking'));
            setLoadingEtaVisible(false);
          }
          if (!window.fflate || !window.fflate.unzipSync) {
            throw new Error(t('error.fflateMissing'));
          }
          var bytes = bundle.bytes ? bundle.bytes : base64ToBytes(bundle.base64);
          var entries = window.fflate.unzipSync(bytes);
          var restrictions = Restrictions.extractRestrictions(entries, decodeUtf8);
          var blockedNow = Restrictions.isRestrictionActive(restrictions) && !Restrictions.isRestrictionAllowedNow(restrictions);
          if (blockedNow && Restrictions.isRestrictionExpired(restrictions)) {
            if (opts.allowInactive) {
              setStatus(t('status.restrictedReady'));
              if (autoOpen || showProgress) {
                stopProgress();
                setLoading(false);
              }
              currentRestrictions = restrictions || null;
              applyRestrictionsToActions(currentRestrictions);
              return { siteId: result.siteId, siteUrl: null };
            }
            showRestrictionModal(restrictions);
            var blocked = new Error(t('error.restricted'));
            blocked.skipStatus = true;
            throw blocked;
          }
          if (opts.embed && Restrictions.isRestrictionActive(restrictions) && !Restrictions.allowEmbed(restrictions)) {
            throw new Error(t('error.embedNotAllowed'));
          }
          var files = [];
          Object.keys(entries).forEach(function (entryPath) {
            if (entryPath.endsWith('/') || entryPath.indexOf('__MACOSX/') === 0) {
              return;
            }
            if (entryPath === 'restrictions.json') {
              return;
            }
            var normalized = normalizePath(entryPath);
            var data = entries[entryPath];
            var type = guessMimeType(normalized);
            var blob = new Blob([data], { type: type });
            files.push({
              key: result.siteId + '::' + normalized,
              siteId: result.siteId,
              path: normalized,
              blob: blob,
              size: blob.size,
              type: type
            });
          });

          if (!files.length) {
            throw new Error(t('error.zipNoWebFiles'));
          }
          if (autoOpen || showProgress) {
            stopProgress();
            setProgress(100);
          }

          var paths = files.map(function (file) { return file.path; });
          return pickIndexPath(paths).then(function (indexPath) {
            if (htmlPickerWasLoading) {
              htmlPickerWasLoading = false;
              setLoading(true);
              setLoadingMessage(t('status.saving'));
            }
            setStatus(t('status.saving'));
            if (autoOpen || showProgress) {
              stopProgress();
              setProgress(0);
              startProgress(0);
              setLoadingMessage(t('status.saving'));
              setLoadingEtaVisible(false);
            }

            var totalBytes = files.reduce(function (sum, item) { return sum + item.size; }, 0);
            return ensureStorageCapacity(totalBytes).then(function (canProceed) {
              if (!canProceed) {
                throw new Error(t('error.noSpace'));
              }
              return deleteSite(result.siteId).catch(function () {
                // Ignore delete errors.
              });
            }).then(function () {
              return extractTitleFromFiles(files, indexPath).then(function (foundTitle) {
                var siteTitle = foundTitle || deriveTitleFromPath(indexPath) || deriveTitleFromUrl(effectiveZipUrl);
                var site = {
                  id: result.siteId,
                  url: effectiveZipUrl,
                  indexPath: indexPath,
                  updatedAt: Date.now(),
                  fileCount: files.length,
                  totalBytes: totalBytes,
                  title: siteTitle,
                  restrictions: restrictions || null
                };
                return saveSite(site).then(function () {
                  return saveFiles(files).then(function () {
                    var siteUrl = buildSiteUrl(result.siteId, indexPath);
                    return controlPromise.then(function () {
                      currentRestrictions = restrictions || null;
                      applyRestrictionsToActions(currentRestrictions);
                      if (opts.embed) {
                        openEmbedSite(siteUrl);
                        return { siteId: result.siteId, siteUrl: siteUrl };
                      }
                      if (blockedNow && !opts.allowInactive) {
                        showRestrictionModal(restrictions);
                        if (showProgress || autoOpen) {
                          stopProgress();
                          setLoading(false);
                        }
                        if (loadingMessage) {
                          loadingMessage.textContent = t('loading.message');
                        }
                        if (loadingEta) {
                          setLoadingEtaVisible(false);
                        }
                        return { siteId: result.siteId, siteUrl: null };
                      }
                      if (autoOpen) {
                        window.location.assign(siteUrl);
                      }
                      if (showProgress && !autoOpen) {
                        setProgress(100);
                        stopProgress();
                        setLoading(false);
                      }
                      refreshManager();
                      return { siteId: result.siteId, siteUrl: siteUrl };
                    });
                  });
                });
              });
            });
          });
        });
      })
      .then(function () {
        setStatus(currentShareLink);
      })
      .catch(function (err) {
        var message = formatUserError(err);
        if (opts.embed) {
          setShareLink('');
          showEmbedFallback(effectiveZipUrl, message);
          return;
        }
        setShareLink('');
        currentRestrictions = null;
        applyRestrictionsToActions(currentRestrictions);
        if (!err || !err.skipStatus) {
          setStatus(message);
        }
        if (autoOpen) {
          setLoading(false);
        }
        if (showProgress && !autoOpen) {
          stopProgress();
          setLoading(false);
        }
      });
  }

  function copyText(value, sourceButton) {
    if (!value) return;
    var done = function () {
      if (sourceButton) {
        showInlineToast(sourceButton, t('status.copySuccess'));
      } else {
        flashMessage(t('status.copySuccess'));
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, done);
      return;
    }
    var textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      done();
    } finally {
      document.body.removeChild(textarea);
    }
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      copyText(currentShareLink);
    });
  }

  if (embedButton) {
    embedButton.addEventListener('click', function () {
      if (!currentZipUrl) {
        return;
      }
      openEmbedModalForZip(currentZipUrl);
    });
  }

  if (embedModal) {
    if (embedCloseButtons && embedCloseButtons.length) {
      embedCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeEmbedModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeEmbedModal();
      }
    });
  }

  if (embedCopyButton) {
    embedCopyButton.addEventListener('click', function () {
      if (!embedCode || !embedCode.value) {
        return;
      }
      copyText(embedCode.value, embedCopyButton);
    });
  }

  if (dropzone) {
    var stopEvent = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
    dropzone.addEventListener('dragenter', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragover', function (event) {
      stopEvent(event);
      dropzone.classList.add('is-dragover');
    });
    dropzone.addEventListener('dragleave', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
    });
    dropzone.addEventListener('drop', function (event) {
      stopEvent(event);
      dropzone.classList.remove('is-dragover');
      collectFilesFromDrop(event);
    });
  }

  if (folderInput) {
    folderInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (folderButton && folderInput) {
    folderButton.addEventListener('click', function () {
      folderInput.click();
    });
  }

  if (fileInput) {
    fileInput.addEventListener('change', function (event) {
      collectFilesFromInput(event.target.files || []);
    });
  }

  if (fileButton && fileInput) {
    fileButton.addEventListener('click', function () {
      fileInput.click();
    });
  }

  if (buildZipButton) {
    buildZipButton.addEventListener('click', function () {
      buildZipFromSelection();
    });
  }

  if (zipNameInput) {
    zipNameInput.addEventListener('input', function () {
      zipNameDirty = true;
    });
  }

  if (htmlZipInput) {
    htmlZipInput.addEventListener('input', function () {
      if (htmlZipInput.value.trim()) {
        setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        setHtmlZipStatus(t('zipper.html.status.empty'));
      }
    });
  }

  if (htmlZipBuildButton) {
    htmlZipBuildButton.addEventListener('click', function () {
      buildZipFromHtml();
    });
  }
  if (restrictionToggle) {
    restrictionToggle.addEventListener('change', function () {
      if (restrictionToggle.checked) {
        var now = new Date();
        if (restrictionStartInput) {
          restrictionStartInput.value = formatLocalDateTime(now);
        }
        if (restrictionNoEnd && restrictionNoEnd.checked && restrictionEndInput) {
          restrictionEndInput.value = '';
        }
      }
      applyRestrictionUiState();
      updateRestrictionDefaults();
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.status.ready');
      }
      if (!restrictionToggle.checked) {
        restrictionZipFile = null;
        if (restrictionZipApply) {
          restrictionZipApply.disabled = true;
        }
      }
    });
  }
  if (restrictionNoEnd) {
    restrictionNoEnd.addEventListener('change', function () {
      applyRestrictionUiState();
    });
  }
  if (restrictionStartInput) {
    restrictionStartInput.addEventListener('change', function () {
      updateRestrictionSummary();
    });
  }
  if (restrictionEndInput) {
    restrictionEndInput.addEventListener('change', function () {
      updateRestrictionSummary();
    });
  }
  if (restrictionZipPick && restrictionZipInput) {
    restrictionZipPick.addEventListener('click', function () {
      restrictionZipInput.click();
    });
  }
  if (restrictionZipInput) {
    restrictionZipInput.addEventListener('change', function () {
      restrictionZipFile = restrictionZipInput.files && restrictionZipInput.files[0] ? restrictionZipInput.files[0] : null;
      if (restrictionZipApply) {
        restrictionZipApply.disabled = !restrictionZipFile;
      }
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = restrictionZipFile ? restrictionZipFile.name : t('zipper.restrict.status.ready');
      }
    });
  }
  if (restrictionZipApply) {
    restrictionZipApply.addEventListener('click', function () {
      applyRestrictionsToZipFile(restrictionZipFile);
    });
  }

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var zipUrl = input.value.trim();
      if (!zipUrl) {
        return;
      }
      ignoreRestrictionsForShare = true;
      loadZip(zipUrl, { force: true, allowInactive: true })
        .finally(function () {
          ignoreRestrictionsForShare = false;
        });
    });
  }

  var params = new URLSearchParams(window.location.search);
  var urlParam = params.get('url');
  if (urlParam) {
    ignoreRestrictionsForShare = false;
  }
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      setLanguage(langSelect.value);
    });
  }
  setLanguage(getInitialLang());
  updateServiceInfo();
  var goTabButtons = document.querySelectorAll('[data-go-tab]');
  if (goTabButtons.length) {
    goTabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-go-tab');
        if (target) {
          if (target === 'main' || target === 'zipper') {
            setActiveTab('publish');
            setPublishModule(target);
          } else {
            setActiveTab(target);
          }
        }
      });
    });
  }
  if (publishStartButtons.length) {
    publishStartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-publish-start');
        setActiveTab('publish');
        setPublishModule(target);
      });
    });
  }
  if (publishBackButtons.length) {
    publishBackButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setActiveTab('publish');
        setPublishModule('');
      });
    });
  }
  var goPublishButtons = document.querySelectorAll('[data-go-publish]');
  if (goPublishButtons.length) {
    goPublishButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-go-publish');
        setActiveTab('publish');
        setPublishModule(target);
      });
    });
  }
  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var tab = button.getAttribute('data-tab');
        setActiveTab(tab);
        if (tab === 'publish') {
          setPublishModule('');
        }
      });
    });
    setActiveTab('publish');
  }
  if (managerList) {
    managerList.addEventListener('click', function (event) {
      var target = event.target;
      if (!(target instanceof Element)) return;
      var button = target.closest('button');
      if (!button) return;
      if (button.disabled) return;
      var action = button.getAttribute('data-action');
      var siteId = button.getAttribute('data-site-id');
      var indexPath = button.getAttribute('data-index-path') || '';
      var zipUrl = button.getAttribute('data-zip-url') || '';
      if (action === 'delete' && siteId) {
        button.classList.add('is-active');
        deleteSite(siteId).then(function () {
          refreshManager();
        }).finally(function () {
          button.classList.remove('is-active');
        });
        return;
      }
      if (action === 'view' && siteId) {
        getSite(siteId).then(function (site) {
          if (site && Restrictions.isRestrictionActive(site.restrictions) && !Restrictions.isRestrictionAllowedNow(site.restrictions)) {
            if (Restrictions.isRestrictionExpired(site.restrictions)) {
              return deleteSite(siteId).then(function () {
                refreshManager();
                showRestrictionModal(site.restrictions);
              });
            }
            showRestrictionModal(site.restrictions);
            return;
          }
          var siteUrl = buildSiteUrl(siteId, indexPath || '');
          window.open(siteUrl, '_blank');
        });
        return;
      }
      if (action === 'share' && zipUrl) {
        copyText(buildShareLink(zipUrl, true), button);
        return;
      }
      if (action === 'embed' && zipUrl) {
        copyText(buildEmbedSnippet(zipUrl), button);
        return;
      }
      if (action === 'download' && zipUrl) {
        var downloadUrl = normalizeZipUrl(zipUrl);
        window.open(downloadUrl, '_blank');
        return;
      }
      if (action === 'edit' && siteId) {
        var item = button.closest('.manager-item');
        if (!item) return;
        var titleEl = item.querySelector('[data-title]');
        startTitleEdit(siteId, titleEl);
      }
    });
  }
  var sortDirButton = document.querySelector('[data-manager-sort-dir]');
  if (managerSortSelect) {
    setManagerSort(getManagerSort());
    managerSortSelect.addEventListener('change', function () {
      setManagerSort(managerSortSelect.value);
      refreshManager();
    });
  }
  if (sortDirButton) {
    setManagerSortDir(getManagerSortDir());
    sortDirButton.addEventListener('click', function () {
      var nextDir = getManagerSortDir() === 'asc' ? 'desc' : 'asc';
      setManagerSortDir(nextDir);
      refreshManager();
    });
  }
  if (cleanupThresholdInput) {
    cleanupThresholdInput.addEventListener('input', function () {
      setCleanupThreshold(cleanupThresholdInput.value);
    });
  }
  if (cleanupDaysInput) {
    cleanupDaysInput.addEventListener('change', function () {
      setCleanupDays(cleanupDaysInput.value);
      cleanupOldSites();
      refreshManager();
    });
  }
  if (resetCleanupButton) {
    resetCleanupButton.addEventListener('click', function () {
      setCleanupThreshold(CLEANUP_THRESHOLD_DEFAULT);
      setCleanupDays(CLEANUP_DAYS_DEFAULT);
      cleanupOldSites();
      refreshManager();
    });
  }
  if (deleteAllButton) {
    deleteAllButton.addEventListener('click', function () {
      if (!confirm(t('manager.deleteAllConfirm'))) {
        return;
      }
      getAllSites().then(function (sites) {
        var ids = sites.map(function (site) { return site.id; });
        return deleteSitesSequential(ids);
      }).then(function () {
        refreshManager();
      });
    });
  }
  if (managerSettingsOpenButton && managerSettingsModal) {
    managerSettingsOpenButton.addEventListener('click', function () {
      openManagerSettingsModal();
    });
    if (managerSettingsCloseButtons && managerSettingsCloseButtons.length) {
      managerSettingsCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeManagerSettingsModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeManagerSettingsModal();
      }
    });
  }

  if (restrictCloseButtons && restrictCloseButtons.length) {
    restrictCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (restrictModal) {
          restrictModal.setAttribute('hidden', '');
        }
      });
    });
  }

  if (mainSettingsOpenButtons && mainSettingsOpenButtons.length && mainSettingsModal) {
    mainSettingsOpenButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        openMainSettingsModal();
      });
    });
    if (mainSettingsCloseButtons && mainSettingsCloseButtons.length) {
      mainSettingsCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeMainSettingsModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mainSettingsModal && !mainSettingsModal.hasAttribute('hidden')) {
        closeMainSettingsModal();
      }
    });
  }
  var lockIndicators = document.querySelectorAll('[data-lock-indicator]');
  if (lockIndicators && lockIndicators.length && mainSettingsModal) {
    lockIndicators.forEach(function (node) {
      node.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        openMainSettingsModal();
      });
      node.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openMainSettingsModal();
        }
      });
    });
  }
  if (languageOpenButton && languagePanel) {
    languageOpenButton.addEventListener('click', function (event) {
      event.preventDefault();
      if (languagePanel.hasAttribute('hidden')) {
        languagePanel.removeAttribute('hidden');
      } else {
        languagePanel.setAttribute('hidden', '');
      }
      if (langSelect) {
        try {
          langSelect.focus();
          langSelect.click();
          setTimeout(function () {
            try {
              langSelect.click();
            } catch (e) {
              // ignore
            }
          }, 0);
        } catch (e) {
          // ignore
        }
      }
    });
    document.addEventListener('click', function (event) {
      if (languagePanel.hasAttribute('hidden')) return;
      if (!languagePanel.contains(event.target) && !languageOpenButton.contains(event.target)) {
        languagePanel.setAttribute('hidden', '');
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !languagePanel.hasAttribute('hidden')) {
        languagePanel.setAttribute('hidden', '');
      }
    });
  }
  if (aboutOpen && aboutModal) {
    aboutOpen.addEventListener('click', function () {
      aboutModal.removeAttribute('hidden');
    });
    aboutCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        aboutModal.setAttribute('hidden', '');
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        aboutModal.setAttribute('hidden', '');
      }
    });
  }
  if (htmlModal) {
    htmlCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        closeHtmlPicker();
      });
    });
    if (htmlConfirm) {
      htmlConfirm.addEventListener('click', function () {
        confirmHtmlPicker();
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeHtmlPicker();
      }
    });
  }
  if (reactModal) {
    if (reactCloseButtons && reactCloseButtons.length) {
      reactCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeReactPromptModal();
        });
      });
    }
    if (reactCopyButton) {
      reactCopyButton.addEventListener('click', function () {
        if (!reactPrompt || !reactPrompt.value) {
          return;
        }
        copyText(reactPrompt.value, reactCopyButton);
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeReactPromptModal();
      }
    });
  }
  cleanupOldSites();
  refreshManager();
  if (urlParam) {
    if (input) {
      input.value = urlParam;
    }
    var viewParam = (params.get('view') || '').toLowerCase();
    var embedParam = (params.get('embed') || '').toLowerCase();
    var embedActive = embedParam === '1' || embedParam === 'true' || embedParam === 'yes';
    var autoOpen = viewParam === 'full' || viewParam === '1';
    if (embedActive) {
      var embedIdParam = params.get('embedId') || '';
      setEmbedMode(true, embedIdParam);
      loadZip(urlParam, { force: false, autoOpen: false, embed: true, embedId: embedIdParam });
    } else {
      setEmbedMode(false, '');
      setActiveTab('publish');
      setPublishModule('main');
      loadZip(urlParam, { force: false, autoOpen: autoOpen });
    }
  } else {
    setEmbedMode(false, '');
    setPublishModule('');
    setLoading(false);
  }
})();
