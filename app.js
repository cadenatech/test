(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var createLinkButton = document.querySelector('[data-create-link]');
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
  var UI = window.UI || {};
  var Downloads = window.Downloads || {};
  var Zipper = window.Zipper || {};
  var HtmlPicker = window.HtmlPicker || {};
  var Storage = window.Storage || {};
  var Manager = window.Manager || {};
  var RestrictionUI = window.RestrictionUI || {};
  var restrictionSummary = document.querySelector('[data-restrict-summary]');
  var restrictionSummaryItems = document.querySelector('[data-restrict-summary-items]');
  var ignoreRestrictionsForShare = false;
  var restrictCountdownTimer = null;

  if (UI.init) {
    UI.init({
      loadingScreen: loadingScreen,
      loadingMessage: loadingMessage,
      loadingBar: loadingBar,
      loadingEta: loadingEta,
      output: output,
      uploadStatus: uploadStatus,
      zipStatus: zipStatus,
      htmlZipStatus: htmlZipStatus,
      getCurrentShareLink: function () { return currentShareLink; }
    });
  }
  if (Downloads.init) {
    Downloads.init({
      ui: UI,
      gasUrl: GAS_WEBAPP_URL,
      t: t,
      base64ToBytes: base64ToBytes
    });
  }

  var currentShareLink = '';
  var currentZipUrl = '';
  var selectedFiles = [];
  var zipNameDirty = false;
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

  if (Zipper.init) {
    Zipper.init({ t: t });
  }
  if (RestrictionUI.init) {
    RestrictionUI.init({
      t: t,
      lang: currentLang,
      ui: UI,
      restrictions: Restrictions,
      context: {
        restrictionToggle: restrictionToggle,
        restrictionFields: restrictionFields,
        restrictionActions: restrictionActions,
        restrictionStartInput: restrictionStartInput,
        restrictionEndInput: restrictionEndInput,
        restrictionNoEnd: restrictionNoEnd,
        restrictionAllowShare: restrictionAllowShare,
        restrictionAllowEmbed: restrictionAllowEmbed,
        restrictionAllowDownload: restrictionAllowDownload,
        restrictionHint: restrictionHint,
        restrictionAccordion: restrictionAccordion,
        restrictionZipApply: restrictionZipApply,
        restrictionZipStatus: restrictionZipStatus,
        restrictionZipFile: function () { return restrictionZipFile; },
        restrictionSummary: restrictionSummary,
        restrictionSummaryItems: restrictionSummaryItems,
        shareRestrictSummary: shareRestrictSummary,
        shareRestrictItems: shareRestrictItems,
        copyButton: copyButton,
        embedButton: embedButton,
        restrictModal: restrictModal,
        restrictRange: restrictRange,
        restrictionCountdown: restrictionCountdown,
        currentShareLink: function () { return currentShareLink; },
        currentRestrictions: function (value) {
          if (arguments.length) {
            currentRestrictions = value;
          }
          return currentRestrictions;
        },
        ignoreRestrictionsForShare: function () { return ignoreRestrictionsForShare; }
      }
    });
  }

    if (Manager.init) {
      Manager.init({
        t: t,
        lang: currentLang,
        storage: Storage,
        restrictions: Restrictions,
        ui: UI,
        context: {
        managerSortSelect: managerSortSelect,
        managerSortDirButton: document.querySelector('[data-manager-sort-dir]'),
        managerList: managerList,
        storageUsed: storageUsed,
        storageUsedPercent: storageUsedPercent,
        storageTotal: storageTotal,
        storageCount: storageCount,
        MANAGER_SORT_KEY: MANAGER_SORT_KEY,
        MANAGER_SORT_DIR_KEY: MANAGER_SORT_DIR_KEY,
        MANAGER_SORT_DEFAULT: MANAGER_SORT_DEFAULT,
        MANAGER_SORT_DIR_DEFAULT: MANAGER_SORT_DIR_DEFAULT,
        formatBytes: formatBytes,
        deriveTitleFromPath: deriveTitleFromPath,
        buildShareLink: buildShareLink,
        buildEmbedSnippet: buildEmbedSnippet,
        normalizeZipUrl: normalizeZipUrl,
        startTitleEdit: startTitleEdit,
        getCleanupDays: getCleanupDays
      }
    });
  }

  if (HtmlPicker.init) {
    HtmlPicker.init({
      modal: htmlModal,
      list: htmlList,
      confirmButton: htmlConfirm,
      closeButtons: htmlCloseButtons,
      t: t,
      ui: UI
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


  function syncZipNameDefault() {
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = Zipper.getZipDefaultName();
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
    Manager.updateSortDirButton(Manager.getManagerSortDir());
    if (output && !currentShareLink) {
      output.textContent = t('main.output.placeholder');
    }
    if (!selectedFiles.length) {
      UI.setUploadStatus(t('zipper.status.empty'));
      UI.setZipStatus(t('zipper.status.readyHint'));
    } else {
      UI.setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
      UI.setZipStatus(t('zipper.status.ready'));
    }
    if (htmlZipInput) {
      if (htmlZipInput.value.trim()) {
        UI.setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        UI.setHtmlZipStatus(t('zipper.html.status.empty'));
      }
    }
    RestrictionUI.applyRestrictionUiState();
    RestrictionUI.updateRestrictionDefaults();
    RestrictionUI.updateRestrictionSummary();
    if (RestrictionUI.init) {
    RestrictionUI.init({
      t: t,
      lang: currentLang,
      ui: UI,
      restrictions: Restrictions,
      context: {
        restrictionToggle: restrictionToggle,
        restrictionFields: restrictionFields,
        restrictionActions: restrictionActions,
        restrictionStartInput: restrictionStartInput,
        restrictionEndInput: restrictionEndInput,
        restrictionNoEnd: restrictionNoEnd,
        restrictionAllowShare: restrictionAllowShare,
        restrictionAllowEmbed: restrictionAllowEmbed,
        restrictionAllowDownload: restrictionAllowDownload,
        restrictionHint: restrictionHint,
        restrictionAccordion: restrictionAccordion,
        restrictionZipApply: restrictionZipApply,
        restrictionZipStatus: restrictionZipStatus,
        restrictionZipFile: restrictionZipFile,
        restrictionSummary: restrictionSummary,
        restrictionSummaryItems: restrictionSummaryItems,
        shareRestrictSummary: shareRestrictSummary,
        shareRestrictItems: shareRestrictItems,
        currentShareLink: function () { return currentShareLink; },
        currentRestrictions: function () { return currentRestrictions; },
        ignoreRestrictionsForShare: function () { return ignoreRestrictionsForShare; }
      }
    });
  }

  if (Manager.init) {
      Manager.init({
        t: t,
        lang: currentLang,
        storage: Storage,
        restrictions: Restrictions,
        ui: UI,
        context: {
          managerSortSelect: managerSortSelect,
          managerSortDirButton: document.querySelector('[data-manager-sort-dir]'),
          managerList: managerList,
          storageUsed: storageUsed,
          storageUsedPercent: storageUsedPercent,
          storageTotal: storageTotal,
          storageCount: storageCount,
          MANAGER_SORT_KEY: MANAGER_SORT_KEY,
          MANAGER_SORT_DIR_KEY: MANAGER_SORT_DIR_KEY,
          MANAGER_SORT_DEFAULT: MANAGER_SORT_DEFAULT,
          MANAGER_SORT_DIR_DEFAULT: MANAGER_SORT_DIR_DEFAULT,
          formatBytes: formatBytes,
          deriveTitleFromPath: deriveTitleFromPath,
          buildShareLink: buildShareLink,
          buildEmbedSnippet: buildEmbedSnippet,
          normalizeZipUrl: normalizeZipUrl,
          startTitleEdit: startTitleEdit,
          getCleanupDays: getCleanupDays
        }
      });
    }
    if (RestrictionUI.init) {
      RestrictionUI.init({
        t: t,
        lang: currentLang,
        ui: UI,
        restrictions: Restrictions,
        context: {
          restrictionToggle: restrictionToggle,
          restrictionFields: restrictionFields,
          restrictionActions: restrictionActions,
          restrictionStartInput: restrictionStartInput,
          restrictionEndInput: restrictionEndInput,
          restrictionNoEnd: restrictionNoEnd,
          restrictionAllowShare: restrictionAllowShare,
          restrictionAllowEmbed: restrictionAllowEmbed,
          restrictionAllowDownload: restrictionAllowDownload,
          restrictionHint: restrictionHint,
          restrictionAccordion: restrictionAccordion,
          restrictionZipApply: restrictionZipApply,
          restrictionZipStatus: restrictionZipStatus,
          restrictionZipFile: function () { return restrictionZipFile; },
          restrictionSummary: restrictionSummary,
          restrictionSummaryItems: restrictionSummaryItems,
          shareRestrictSummary: shareRestrictSummary,
          shareRestrictItems: shareRestrictItems,
          copyButton: copyButton,
          embedButton: embedButton,
          restrictModal: restrictModal,
          restrictRange: restrictRange,
          restrictionCountdown: restrictionCountdown,
          currentShareLink: function () { return currentShareLink; },
          currentRestrictions: function (value) {
            if (arguments.length) {
              currentRestrictions = value;
            }
            return currentRestrictions;
          },
          ignoreRestrictionsForShare: function () { return ignoreRestrictionsForShare; }
        }
      });
    }
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = t('zipper.restrict.status.ready');
    }
    if (UI.isLoading && !UI.isLoading() && loadingMessage) {
      loadingMessage.textContent = t('loading.message');
    }
    if (managerList) {
      Manager.refreshManager();
    }
  }

  function updateServiceInfo() {
    var info = SERVICE_INFO.default;
    if (input) {
      input.placeholder = t(info.placeholderKey);
    }
  }







  function appBase() {
    var path = window.location.pathname;
    if (!path.endsWith('/')) {
      path = path.replace(/[^/]+$/, '');
    }
    return window.location.origin + path;
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



  function formatUserError(err) {
    var message = (err && err.message) ? err.message : '';
    if (/no devolvio un ZIP|recibio HTML|devolvio HTML/i.test(message)) {
      return t('error.driveTooLarge');
    }
    return message || t('error.loadZip');
  }







  function resetZipDownload() {
    // No-op: downloads are triggered immediately after ZIP creation.
  }

  function updateSelectedFiles(files) {
    selectedFiles = files || [];
    resetZipDownload();
    if (!selectedFiles.length) {
      UI.setUploadStatus(t('zipper.status.empty'));
      UI.setZipStatus(t('zipper.status.readyHint'));
      if (zipNameInput && !zipNameDirty) {
        zipNameInput.value = Zipper.getZipDefaultName();
      }
      return;
    }
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = Zipper.deriveZipBaseName(selectedFiles);
    }
    UI.setUploadStatus(t('zipper.status.filesReady', { count: selectedFiles.length }));
    UI.setZipStatus(t('zipper.status.ready'));
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
      UI.setZipStatus(t('zipper.status.selectFirst'));
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      UI.setZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = Zipper.normalizeZipName(zipNameInput ? zipNameInput.value : '');
    UI.setZipStatus(t('zipper.status.creating'));
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
      var restrictions = RestrictionUI.buildRestrictionsPayload();
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
      UI.setZipStatus(t('zipper.status.downloaded'));
    }).catch(function () {
      UI.setZipStatus(t('zipper.status.failed'));
    });
  }

  function buildZipFromHtml() {
    var htmlText = htmlZipInput ? htmlZipInput.value.trim() : '';
    if (!htmlText) {
      UI.setHtmlZipStatus(t('zipper.html.status.empty'));
      return;
    }
    if (Zipper.looksLikeReactJsx(htmlText)) {
      UI.setHtmlZipStatus(t('zipper.html.status.reactDetected'));
      openReactPromptModal(htmlText);
      return;
    }
    if (!window.fflate || !window.fflate.zipSync) {
      UI.setHtmlZipStatus(t('zipper.status.engineMissing'));
      return;
    }
    var zipName = Zipper.normalizeZipName(zipNameInput ? zipNameInput.value : '');
    UI.setHtmlZipStatus(t('zipper.html.status.creating'));
    try {
      var files = {
        'index.html': encodeUtf8(htmlText)
      };
      var restrictions = RestrictionUI.buildRestrictionsPayload();
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
      UI.setHtmlZipStatus(t('zipper.html.status.downloaded'));
    } catch (err) {
      UI.setHtmlZipStatus(t('zipper.html.status.failed'));
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
    var restrictions = RestrictionUI.buildRestrictionsPayload();
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
    return Promise.all([Storage.getAllSites(), Storage.estimateStorage()]).then(function (result) {
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
      return Storage.deleteSitesSequential(toDelete).then(function () {
        return ensureStorageCapacity(extraBytes);
      });
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
      Storage.getSite(siteId).then(function (site) {
        if (!site) return;
        site.title = value;
        return Storage.saveSite(site).then(function () {
          Manager.refreshManager();
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
      Manager.refreshManager();
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
    UI.stopProgress();
    UI.setLoading(false);
  }

  function openEmbedSite(siteUrl) {
    if (!embedFrame) return;
    if (embedFallback) {
      embedFallback.setAttribute('hidden', '');
    }
    UI.setLoading(true);
    embedFrame.onload = function () {
      UI.setLoading(false);
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








  function fetchZipBundle(zipUrl) {
    if (Downloads.fetchZipBundleChunked) {
      return Downloads.fetchZipBundleChunked(zipUrl);
    }
    throw new Error('Download helper missing');
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
    return HtmlPicker.open(htmlPaths, preferred || htmlPaths[0]);
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
      UI.setLoading(true);
      UI.setProgress(5);
      UI.setLoadingMessage(t('status.preparing'));
    }
    if (!GAS_WEBAPP_URL) {
      UI.setStatus(t('error.configMissing'));
      if (showProgress && !autoOpen) {
        UI.setLoading(false);
      }
      return Promise.resolve();
    }
    UI.setStatus(t('status.preparingZip'));
    if (autoOpen) {
      UI.startProgress(8);
    }

    var workerPromise = registerServiceWorker().catch(function () {
      throw new Error(t('error.offlineNotAllowed'));
    });
    var controlPromise = workerPromise.then(function () {
      return waitForServiceWorkerControl();
    });

    return computeSiteId(effectiveZipUrl)
      .then(function (siteId) {
        return Storage.getSite(siteId).then(function (site) {
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
                UI.setStatus(t('status.restrictedReady'));
                if (showProgress && !autoOpen) {
                  UI.setLoading(false);
                }
                currentRestrictions = result.site ? result.site.restrictions || null : null;
                RestrictionUI.applyRestrictionsToActions(currentRestrictions);
                return { siteId: result.siteId, siteUrl: null };
              }
              return Storage.deleteSite(result.siteId).then(function () {
                RestrictionUI.showRestrictionModal(result.site.restrictions);
                var err = new Error(t('error.restricted'));
                err.skipStatus = true;
                throw err;
              });
            }
            if (opts.allowInactive) {
              UI.setStatus(t('status.restrictedReady'));
              if (showProgress && !autoOpen) {
                UI.setLoading(false);
              }
              currentRestrictions = result.site ? result.site.restrictions || null : null;
              RestrictionUI.applyRestrictionsToActions(currentRestrictions);
              return { siteId: result.siteId, siteUrl: null };
            }
            RestrictionUI.showRestrictionModal(result.site.restrictions);
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
              UI.setProgress(100);
              window.location.assign(siteUrl);
            }
            if (showProgress && !autoOpen) {
              UI.setLoading(false);
            }
            currentRestrictions = result.site ? result.site.restrictions || null : null;
            RestrictionUI.applyRestrictionsToActions(currentRestrictions);
            return { siteId: result.siteId, siteUrl: siteUrl };
          });
        }

        UI.setStatus(t('status.downloadingZip'));
        if (showProgress && !autoOpen) {
          UI.setLoading(true);
          UI.setLoadingMessage(t('status.connecting') + '...');
          UI.startProgress(2);
          UI.setLoadingEtaVisible(false);
        }
        if (autoOpen) {
          UI.stopProgress();
          UI.startProgress(2);
          UI.setLoadingEtaVisible(false);
        }
        return fetchZipBundle(effectiveZipUrl).then(function (bundle) {
          if (autoOpen || showProgress) {
            UI.stopProgress();
            UI.setProgress(100);
            UI.setLoadingEtaVisible(false);
          }
          UI.setStatus(t('status.unpacking'));
          if (autoOpen || showProgress) {
            UI.stopProgress();
            UI.setProgress(0);
            UI.setLoadingMessage(t('status.unpacking'));
            UI.setLoadingEtaVisible(false);
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
              UI.setStatus(t('status.restrictedReady'));
              if (autoOpen || showProgress) {
                UI.stopProgress();
                UI.setLoading(false);
              }
              currentRestrictions = restrictions || null;
              RestrictionUI.applyRestrictionsToActions(currentRestrictions);
              return { siteId: result.siteId, siteUrl: null };
            }
            RestrictionUI.showRestrictionModal(restrictions);
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
            UI.stopProgress();
            UI.setProgress(100);
          }

          var paths = files.map(function (file) { return file.path; });
          return pickIndexPath(paths).then(function (indexPath) {
            if (HtmlPicker.consumeWasLoading && HtmlPicker.consumeWasLoading()) {
              UI.setLoading(true);
              UI.setLoadingMessage(t('status.saving'));
            }
            UI.setStatus(t('status.saving'));
            if (autoOpen || showProgress) {
              UI.stopProgress();
              UI.setProgress(0);
              UI.startProgress(0);
              UI.setLoadingMessage(t('status.saving'));
              UI.setLoadingEtaVisible(false);
            }

            var totalBytes = files.reduce(function (sum, item) { return sum + item.size; }, 0);
            return ensureStorageCapacity(totalBytes).then(function (canProceed) {
              if (!canProceed) {
                throw new Error(t('error.noSpace'));
              }
              return Storage.deleteSite(result.siteId).catch(function () {
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
                return Storage.saveSite(site).then(function () {
                  return Storage.saveFiles(files).then(function () {
                    var siteUrl = buildSiteUrl(result.siteId, indexPath);
                    return controlPromise.then(function () {
                      currentRestrictions = restrictions || null;
                      RestrictionUI.applyRestrictionsToActions(currentRestrictions);
                      if (opts.embed) {
                        openEmbedSite(siteUrl);
                        return { siteId: result.siteId, siteUrl: siteUrl };
                      }
                      if (blockedNow && !opts.allowInactive) {
                        RestrictionUI.showRestrictionModal(restrictions);
                        if (showProgress || autoOpen) {
                          UI.stopProgress();
                          UI.setLoading(false);
                        }
                        if (loadingMessage) {
                          loadingMessage.textContent = t('loading.message');
                        }
                        if (loadingEta) {
                          UI.setLoadingEtaVisible(false);
                        }
                        return { siteId: result.siteId, siteUrl: null };
                      }
                      if (autoOpen) {
                        window.location.assign(siteUrl);
                      }
                      if (showProgress && !autoOpen) {
                        UI.setProgress(100);
                        UI.stopProgress();
                        UI.setLoading(false);
                      }
                      Manager.refreshManager();
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
        UI.setStatus(currentShareLink);
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
        RestrictionUI.applyRestrictionsToActions(currentRestrictions);
        if (!err || !err.skipStatus) {
          UI.setStatus(message);
        }
        if (autoOpen) {
          UI.setLoading(false);
        }
        if (showProgress && !autoOpen) {
          UI.stopProgress();
          UI.setLoading(false);
        }
      });
  }

  function copyText(value, sourceButton) {
    if (!value) return;
    var done = function () {
      if (sourceButton) {
        UI.showInlineToast(sourceButton, t('status.copySuccess'));
      } else {
        UI.flashMessage(t('status.copySuccess'));
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
        UI.setHtmlZipStatus(t('zipper.html.status.ready'));
      } else {
        UI.setHtmlZipStatus(t('zipper.html.status.empty'));
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
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionDefaults();
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
      RestrictionUI.applyRestrictionUiState();
    });
  }
  if (restrictionStartInput) {
    restrictionStartInput.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionEndInput) {
    restrictionEndInput.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
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

  function handleCreateLink(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var zipUrl = input.value.trim();
    if (!zipUrl) {
      return;
    }
    ignoreRestrictionsForShare = true;
    loadZip(zipUrl, { force: true, allowInactive: true })
      .finally(function () {
        ignoreRestrictionsForShare = false;
      });
  }
  if (form) {
    form.addEventListener('submit', handleCreateLink);
  }
  if (createLinkButton) {
    createLinkButton.addEventListener('click', handleCreateLink);
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
        Storage.deleteSite(siteId).then(function () {
          Manager.refreshManager();
        }).finally(function () {
          button.classList.remove('is-active');
        });
        return;
      }
      if (action === 'view' && siteId) {
        Storage.getSite(siteId).then(function (site) {
          if (site && Restrictions.isRestrictionActive(site.restrictions) && !Restrictions.isRestrictionAllowedNow(site.restrictions)) {
            if (Restrictions.isRestrictionExpired(site.restrictions)) {
              return Storage.deleteSite(siteId).then(function () {
                Manager.refreshManager();
                RestrictionUI.showRestrictionModal(site.restrictions);
              });
            }
            RestrictionUI.showRestrictionModal(site.restrictions);
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
    Manager.setManagerSort(Manager.getManagerSort());
    managerSortSelect.addEventListener('change', function () {
      Manager.setManagerSort(managerSortSelect.value);
      Manager.refreshManager();
    });
  }
  if (sortDirButton) {
    Manager.setManagerSortDir(Manager.getManagerSortDir());
    sortDirButton.addEventListener('click', function () {
      var nextDir = Manager.getManagerSortDir() === 'asc' ? 'desc' : 'asc';
      Manager.setManagerSortDir(nextDir);
      Manager.refreshManager();
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
      Manager.cleanupOldSites();
      Manager.refreshManager();
    });
  }
  if (resetCleanupButton) {
    resetCleanupButton.addEventListener('click', function () {
      setCleanupThreshold(CLEANUP_THRESHOLD_DEFAULT);
      setCleanupDays(CLEANUP_DAYS_DEFAULT);
      Manager.cleanupOldSites();
      Manager.refreshManager();
    });
  }
  if (deleteAllButton) {
    deleteAllButton.addEventListener('click', function () {
      if (!confirm(t('manager.deleteAllConfirm'))) {
        return;
      }
      Storage.getAllSites().then(function (sites) {
        var ids = sites.map(function (site) { return site.id; });
        return Storage.deleteSitesSequential(ids);
      }).then(function () {
        Manager.refreshManager();
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
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        HtmlPicker.close();
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
  Manager.cleanupOldSites();
  Manager.refreshManager();
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
    UI.setLoading(false);
  }
})();
