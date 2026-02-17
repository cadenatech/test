(function () {
  var form = document.querySelector('[data-form]');
  var input = document.querySelector('[data-url]');
  var output = document.querySelector('[data-output]');
  var createLinkButton = document.querySelector('[data-create-link]');
  var copyButton = document.querySelector('[data-copy]');
  var qrButton = document.querySelector('[data-qr]');
  var embedButton = document.querySelector('[data-embed]');
  var openLink = document.querySelector('[data-open]');
  var shareRestrictSummary = document.querySelector('[data-share-restrict-summary]');
  var shareRestrictItems = document.querySelector('[data-share-restrict-items]');
  var updateBanner = document.querySelector('[data-update-banner]');
  var updateActionButton = document.querySelector('[data-update-action]');
  var updateDismissButton = document.querySelector('[data-update-dismiss]');
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
  var resourceTitleInput = document.querySelector('[data-resource-title]');
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
  var mainSettingsOpenButtons = document.querySelectorAll('[data-main-settings-open]');
  var mainSettingsModal = document.querySelector('[data-main-settings-modal]');
  var mainSettingsCloseButtons = document.querySelectorAll('[data-main-settings-close]');
  var managerCheckUpdatesButton = document.querySelector('[data-manager-check-updates]');
  var updateCheckModal = document.querySelector('[data-update-check-modal]');
  var updateCheckCloseButtons = document.querySelectorAll('[data-update-check-close]');
  var updateCheckStatus = document.querySelector('[data-update-check-status]');
  var updateCheckNote = document.querySelector('[data-update-check-note]');
  var updateCheckProgress = document.querySelector('[data-update-check-progress]');
  var updateCheckBarWrap = document.querySelector('[data-update-check-bar-wrap]');
  var updateCheckBar = document.querySelector('[data-update-check-bar]');
  var restrictionToggle = document.querySelector('[data-restrict-toggle]');
  var restrictionFields = document.querySelector('[data-restrict-fields]');
  var restrictionActions = document.querySelector('[data-restrict-actions]');
  var restrictionStartInput = document.querySelector('[data-restrict-start]');
  var restrictionEndInput = document.querySelector('[data-restrict-end]');
  var restrictionNoEnd = document.querySelector('[data-restrict-no-end]');
  var restrictionLiveEnd = document.querySelector('[data-restrict-live-end]');
  var restrictionLiveEndWrap = document.querySelector('[data-restrict-live-end-wrap]');
  var restrictionWarningWrap = document.querySelector('[data-restrict-warning-wrap]');
  var restrictionWarningMinutes = document.querySelector('[data-restrict-warning-minutes]');
  var restrictionWarningMessage = document.querySelector('[data-restrict-warning-message]');
  var restrictionPeriodHint = document.querySelector('[data-restrict-period-hint]');
  var restrictionAllowShare = document.querySelector('[data-restrict-allow-share]');
  var restrictionAllowEmbed = document.querySelector('[data-restrict-allow-embed]');
  var restrictionAllowDownload = document.querySelector('[data-restrict-allow-download]');
  var restrictionHint = document.querySelector('[data-restrict-hint]');
  var restrictionAccordion = document.querySelector('[data-restrict-accordion]');
  var restrictionZipInput = document.querySelector('[data-restrict-zip-input]');
  var restrictionZipPick = document.querySelector('[data-restrict-zip-pick]');
  var restrictionZipApply = document.querySelector('[data-restrict-zip-apply]');
  var restrictionZipStatus = document.querySelector('[data-restrict-zip-status]');
  var restrictionZipLock = document.querySelector('[data-restrict-zip-lock]');
  var restrictionZipEnable = document.querySelector('[data-restrict-zip-enable]');
  var restrictionCountdown = document.querySelector('[data-restrict-countdown]');
  var appVersionNode = document.querySelector('[data-app-version]');
  var UI = window.UI || {};
  var Downloads = window.Downloads || {};
  var Zipper = window.Zipper || {};
  var HtmlPicker = window.HtmlPicker || {};
  var Storage = window.Storage || {};
  var Manager = window.Manager || {};
  var RestrictionUI = window.RestrictionUI || {};
  var Share = window.Share || {};
  var Nav = window.Nav || {};
  var restrictionSummary = document.querySelector('[data-restrict-summary]');
  var restrictionSummaryItems = document.querySelector('[data-restrict-summary-items]');
  var ignoreRestrictionsForShare = false;
  var restrictCountdownTimer = null;

  if (UI.init) {
    UI.init({
      loadingScreen: loadingScreen,
      loadingMessage: loadingMessage,
      loadingBar: loadingBar,
      loadingBarWrap: document.querySelector('[data-loading-bar-wrap]'),
      loadingEta: loadingEta,
      output: output,
      uploadStatus: uploadStatus,
      zipStatus: zipStatus,
      htmlZipStatus: htmlZipStatus,
      globalToast: document.querySelector('[data-global-toast]'),
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
  var currentIndexPath = '';
  var selectedFiles = [];
  var zipNameDirty = false;
  var resourceTitleDirty = false;
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
  if (Nav.init) {
    Nav.init({
      manager: Manager,
      context: {
        tabButtons: tabButtons,
        tabPanels: tabPanels,
        publishChoice: publishChoice,
        publishModules: publishModules,
        setActivePublishModule: function (value) {
          activePublishModule = value;
        }
      }
    });
  }

  if (Share.init) {
    Share.init({
      t: t,
      ui: UI,
      restrictions: Restrictions,
      context: {
        output: output,
        copyButton: copyButton,
        qrButton: qrButton,
        embedButton: embedButton,
        openLink: openLink,
        stepThree: stepThree,
        currentShareLink: function (value) {
          if (arguments.length) {
            currentShareLink = value;
          }
          return currentShareLink;
        },
        currentRestrictions: function () { return currentRestrictions; },
        isEmbedMode: function () { return isEmbedMode; }
      }
    });
    // Ensure initial disabled/enabled state matches the current link (including the empty state).
    if (Share.setShareLink) {
      Share.setShareLink(currentShareLink || '');
    }
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
        restrictionLiveEnd: restrictionLiveEnd,
        restrictionLiveEndWrap: restrictionLiveEndWrap,
        restrictionWarningWrap: restrictionWarningWrap,
        restrictionWarningMinutes: restrictionWarningMinutes,
        restrictionWarningMessage: restrictionWarningMessage,
        restrictionPeriodHint: restrictionPeriodHint,
        restrictionAllowShare: restrictionAllowShare,
        restrictionAllowEmbed: restrictionAllowEmbed,
        restrictionAllowDownload: restrictionAllowDownload,
        restrictionHint: restrictionHint,
        restrictionAccordion: restrictionAccordion,
        restrictionZipApply: restrictionZipApply,
        restrictionZipStatus: restrictionZipStatus,
        restrictionZipFile: function () { return restrictionZipFile; },
        restrictionSummary: restrictionSummary,
        restrictionSummaryLabel: document.querySelector('[data-restrict-summary-label]'),
        restrictionSummaryItems: restrictionSummaryItems,
        shareRestrictSummary: shareRestrictSummary,
        shareRestrictItems: shareRestrictItems,
        copyButton: copyButton,
        embedButton: embedButton,
        restrictModal: restrictModal,
        restrictRange: restrictRange,
        restrictionCountdown: restrictionCountdown,
        openAllowedResource: function () {
          var hasUrl = urlParam || shortParam;
          if (!hasUrl) return;
          var entryParam = params.get('entry') || params.get('index') || params.get('path') || '';
          var viewParam = (params.get('view') || '').toLowerCase();
          var embedParam = (params.get('embed') || '').toLowerCase();
          var embedActive = embedParam === '1' || embedParam === 'true' || embedParam === 'yes';
          var embedIdParam = params.get('embedId') || '';
          var autoOpen = viewParam === 'full' || viewParam === '1';
          var previewUrl = currentZipUrl || urlParam;
          if (!previewUrl) return;
          if (embedActive) {
            loadZip(previewUrl, { force: false, autoOpen: false, embed: true, embedId: embedIdParam, preferredIndexPath: entryParam });
          } else {
            loadZip(previewUrl, { force: false, autoOpen: autoOpen, preferredIndexPath: entryParam });
          }
        },
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

  function refreshFooterVersion() {
    if (!appVersionNode || !window.fetch) return;
    fetch('version.json', { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error('version file not available');
        return response.json();
      })
      .then(function (payload) {
        var version = payload && payload.version ? String(payload.version).trim() : '';
        if (!version) return;
        appVersionNode.textContent = version;
      })
      .catch(function () {
        // Keep fallback version already rendered in HTML.
      });
  }


  function syncZipNameDefault() {
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = Zipper.getZipDefaultName();
    }
  }

  function deriveResourceTitleFromSelection(files) {
    var list = files || [];
    if (!list.length) return '';
    var htmlEntry = list.find(function (item) {
      var lower = (item.path || '').toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (htmlEntry) {
      return deriveTitleFromPath(htmlEntry.path);
    }
    var firstDoc = list.find(function (item) {
      var lower = (item.path || '').toLowerCase();
      return lower.endsWith('.pdf') || lower.endsWith('.docx');
    });
    if (firstDoc) {
      return deriveTitleFromPath(firstDoc.path);
    }
    var base = Zipper.deriveZipBaseName(list) || '';
    return base.replace(/[_-]+/g, ' ').trim();
  }

  function syncResourceTitleDefault() {
    if (!resourceTitleInput || resourceTitleDirty) return;
    var derived = deriveResourceTitleFromSelection(selectedFiles);
    if (!derived) {
      var fallback = Zipper.getZipDefaultName() || '';
      derived = fallback.replace(/[_-]+/g, ' ').trim();
    }
    resourceTitleInput.value = derived;
  }

  function normalizeResourceTitle(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function setLanguage(lang) {
    currentLang = normalizeLang(lang);
    if (langSelect) {
      langSelect.value = currentLang;
    }
    try {
      localStorage.setItem(LANG_KEY, currentLang);
    } catch (err) {
      // ignore persistence errors
    }
    document.documentElement.setAttribute('lang', currentLang);
    applyTranslations();
    if (RestrictionUI && RestrictionUI.setLang) {
      RestrictionUI.setLang(currentLang);
    }
    if (RestrictionUI && RestrictionUI.updateRestrictionSummary) {
      RestrictionUI.updateRestrictionSummary();
    }
    if (RestrictionUI && RestrictionUI.updateShareRestrictionSummary) {
      RestrictionUI.updateShareRestrictionSummary(currentRestrictions);
    }
    updateServiceInfo();
    syncZipNameDefault();
    syncResourceTitleDefault();
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

  function updateRestrictZipAccordionState() {
    if (!restrictionAccordion) return;
    if (!restrictionToggle) return;
    var enabled = !!restrictionToggle.checked;
    if (restrictionZipLock) {
      if (enabled) {
        restrictionZipLock.setAttribute('hidden', '');
      } else {
        restrictionZipLock.removeAttribute('hidden');
      }
    }
    if (restrictionZipPick) restrictionZipPick.disabled = !enabled;
    if (restrictionZipInput) restrictionZipInput.disabled = !enabled;
    if (!enabled) {
      if (restrictionZipStatus) {
        restrictionZipStatus.textContent = t('zipper.restrict.lockedStatus');
      }
      if (restrictionZipApply) {
        restrictionZipApply.disabled = true;
      }
      return;
    }
    // Enabled: restore status and apply enablement based on file selection.
    if (restrictionZipStatus) {
      restrictionZipStatus.textContent = restrictionZipFile ? restrictionZipFile.name : t('zipper.restrict.status.ready');
    }
    if (restrictionZipApply) {
      restrictionZipApply.disabled = !restrictionZipFile;
    }
  }







  function appBase() {
    var path = window.location.pathname;
    if (!path.endsWith('/')) {
      path = path.replace(/[^/]+$/, '');
    }
    return window.location.origin + path;
  }





  function isGoogleDriveUrl(url) {
    if (!url) return false;
    try {
      var host = (new URL(url)).hostname || '';
      host = host.toLowerCase();
      if (host === 'drive.google.com' || host.endsWith('.drive.google.com')) return true;
    } catch (e) {
      // ignore
    }
    return /drive\.google\.com/i.test(url);
  }

  function formatUserError(err, zipUrl) {
    var message = (err && err.message) ? err.message : '';
    if (/no devolvio un ZIP|recibio HTML|devolvio HTML/i.test(message)) {
      // Only show the Drive-specific hint for Drive URLs.
      if (isGoogleDriveUrl(zipUrl)) {
        return t('error.driveTooLarge');
      }
    }
    return message || t('error.loadZip');
  }







  function resetZipDownload() {
    // No-op: downloads are triggered immediately after ZIP creation.
  }

  function updateSelectedFiles(files) {
    selectedFiles = files || [];
    resetZipDownload();
    zipNameDirty = false;
    resourceTitleDirty = false;
    if (!selectedFiles.length) {
      UI.setUploadStatus(t('zipper.status.empty'));
      UI.setZipStatus(t('zipper.status.readyHint'));
      if (zipNameInput && !zipNameDirty) {
        zipNameInput.value = Zipper.getZipDefaultName();
      }
      if (resourceTitleInput && !resourceTitleDirty) {
        resourceTitleInput.value = '';
      }
      return;
    }
    if (zipNameInput && !zipNameDirty) {
      zipNameInput.value = Zipper.deriveZipBaseName(selectedFiles);
    }
    if (resourceTitleInput && !resourceTitleDirty) {
      resourceTitleInput.value = deriveResourceTitleFromSelection(selectedFiles);
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
    if (!files || !files.length) return Promise.resolve('');
    var metaFile = null;
    var target = null;
    for (var i = 0; i < files.length; i += 1) {
      if (files[i].path === '__vwz_meta.json') {
        metaFile = files[i];
      }
      if (indexPath && files[i].path === indexPath) {
        target = files[i];
      }
    }
    var readMetaTitle = function () {
      if (!metaFile || !metaFile.blob) return Promise.resolve('');
      return readBlobText(metaFile.blob).then(function (text) {
        if (!text) return '';
        try {
          var parsed = JSON.parse(text);
          return normalizeResourceTitle(parsed && parsed.title ? parsed.title : '');
        } catch (err) {
          return '';
        }
      });
    };
    return readMetaTitle().then(function (metaTitle) {
      if (metaTitle) return metaTitle;
      if (!target || !target.blob) return '';
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
    var resourceTitle = normalizeResourceTitle(resourceTitleInput ? resourceTitleInput.value : '');
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
      var hasHtmlFiles = selectedFiles.some(function (item) {
        var lower = (item.path || '').toLowerCase();
        return lower.endsWith('.html') || lower.endsWith('.htm');
      });
      if (!hasHtmlFiles && resourceTitle) {
        files['__vwz_meta.json'] = encodeUtf8(JSON.stringify({
          title: resourceTitle
        }, null, 2));
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
    return navigator.serviceWorker.register('sw.js', { scope: './' }).then(function (registration) {
      try {
        if (registration && registration.update) {
          registration.update();
        }
      } catch (e) {}
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
    if (lower.endsWith('.pdf')) return 'application/pdf';
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
    match = url.match(/drive\.google\.com\/uc\?(?:[^#]*[?&])?id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }
    return '';
  }

  function normalizeGithubBlobUrl(url) {
    // Convert GitHub "blob" URLs to raw URLs so the backend fetches the ZIP bytes, not HTML.
    // Example:
    // https://github.com/u/r/blob/main/file.zip -> https://raw.githubusercontent.com/u/r/main/file.zip
    var parsed;
    try {
      parsed = new URL(url);
    } catch (e) {
      return url;
    }
    var host = (parsed.hostname || '').toLowerCase();
    if (host === 'raw.githubusercontent.com') return url;
    if (host !== 'github.com' && host !== 'www.github.com') return url;

    var path = parsed.pathname || '';
    var parts = path.split('/').filter(Boolean);
    // /{user}/{repo}/blob/{ref}/{path...}
    if (parts.length < 5) return url;
    if (parts[2] !== 'blob') return url;

    var user = parts[0];
    var repo = parts[1];
    var ref = parts[3];
    var filePath = parts.slice(4).join('/');
    if (!user || !repo || !ref || !filePath) return url;
    return 'https://raw.githubusercontent.com/' + user + '/' + repo + '/' + ref + '/' + filePath;
  }

  function normalizeZipUrl(url) {
    url = normalizeGithubBlobUrl(url);
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



  function buildShareLink(zipUrl, fullView, entryPath) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl);
    if (fullView) {
      base += '&view=full';
    }
    if (entryPath) {
      base += '&entry=' + encodeURIComponent(entryPath);
    }
    return base;
  }

  var shortLinkCache = {};
  var shortResolveCache = {};

  function buildShortShareLink(token, fullView, entryPath) {
    var base = appBase() + '?key=' + encodeURIComponent(token);
    if (fullView) {
      base += '&view=full';
    }
    if (entryPath) {
      base += '&entry=' + encodeURIComponent(entryPath);
    }
    return base;
  }

  function createShortToken(zipUrl) {
    if (!GAS_WEBAPP_URL) {
      return Promise.reject(new Error(t('error.configMissing')));
    }
    if (shortLinkCache[zipUrl]) {
      return Promise.resolve(shortLinkCache[zipUrl]);
    }
    var endpoint = GAS_WEBAPP_URL + '?short=1&format=json&url=' + encodeURIComponent(zipUrl);
    return fetch(endpoint, { method: 'GET' })
      .then(function (resp) { return resp.json(); })
      .then(function (data) {
        if (!data || !data.token) {
          throw new Error(t('error.loadZip'));
        }
        shortLinkCache[zipUrl] = data.token;
        return data.token;
      });
  }

  function resolveShortToken(token) {
    if (!GAS_WEBAPP_URL) {
      return Promise.reject(new Error(t('error.configMissing')));
    }
    if (shortResolveCache[token]) {
      return Promise.resolve(shortResolveCache[token]);
    }
    var endpoint = GAS_WEBAPP_URL + '?short=' + encodeURIComponent(token) + '&format=json';
    return fetch(endpoint, { method: 'GET' })
      .then(function (resp) { return resp.json(); })
      .then(function (data) {
        if (!data || !data.url) {
          throw new Error(t('error.loadZip'));
        }
        shortResolveCache[token] = data.url;
        return data.url;
      });
  }

  function buildShareLinkAsync(zipUrl, fullView, entryPath) {
    if (!zipUrl) return Promise.resolve('');
    return createShortToken(zipUrl)
      .then(function (token) {
        return buildShortShareLink(token, fullView, entryPath);
      })
      .catch(function () {
        return buildShareLink(zipUrl, fullView, entryPath);
      });
  }

  function refreshShareLink(zipUrl, entryPath) {
    return buildShareLinkAsync(zipUrl, true, entryPath).then(function (shareLink) {
      Share.setShareLink(shareLink);
      return shareLink;
    });
  }

  function createEmbedId() {
    return 'vwz-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function buildEmbedLink(zipUrl, embedId, entryPath) {
    var base = appBase() + '?url=' + encodeURIComponent(zipUrl) + '&embed=1';
    if (embedId) {
      base += '&embedId=' + encodeURIComponent(embedId);
    }
    if (entryPath) {
      base += '&entry=' + encodeURIComponent(entryPath);
    }
    return base;
  }

  function buildEmbedSnippet(zipUrl, entryPath) {
    var embedId = createEmbedId();
    var iframeId = 'visor-webzip-' + embedId;
    var src = buildEmbedLink(zipUrl, embedId, entryPath);
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
    embedCode.value = buildEmbedSnippet(zipUrl, currentIndexPath);
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
      embedOpenFallback.href = buildShareLink(zipUrl, true, currentIndexPath);
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

  function normalizeMetaSignature(meta) {
    if (!meta) return null;
    var signature = {};
    if (meta.size) signature.size = meta.size;
    if (meta.etag) signature.etag = meta.etag;
    if (meta.lastModified) signature.lastModified = meta.lastModified;
    if (meta.sampleHash) signature.sampleHash = meta.sampleHash;
    return Object.keys(signature).length ? signature : null;
  }

  function mergeMetaSignature(stored, remote) {
    var signature = {};
    if (stored) {
      if (stored.size) signature.size = stored.size;
      if (stored.etag) signature.etag = stored.etag;
      if (stored.lastModified) signature.lastModified = stored.lastModified;
      if (stored.sampleHash) signature.sampleHash = stored.sampleHash;
    }
    if (remote) {
      if (remote.size) signature.size = remote.size;
      if (remote.etag) signature.etag = remote.etag;
      if (remote.lastModified) signature.lastModified = remote.lastModified;
      if (remote.sampleHash) signature.sampleHash = remote.sampleHash;
    }
    return Object.keys(signature).length ? signature : null;
  }

  function metaEqual(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return (a.size || null) === (b.size || null)
      && (a.etag || '') === (b.etag || '')
      && (a.lastModified || '') === (b.lastModified || '')
      && (a.sampleHash || '') === (b.sampleHash || '');
  }

  function isMetaChanged(stored, remote) {
    if (!stored || !remote) return false;
    var comparable = false;
    if (stored.etag && remote.etag) {
      comparable = true;
      if (stored.etag !== remote.etag) return true;
    }
    if (stored.lastModified && remote.lastModified) {
      comparable = true;
      if (stored.lastModified !== remote.lastModified) return true;
    }
    if (stored.size && remote.size) {
      comparable = true;
      if (stored.size !== remote.size) return true;
    }
    if (stored.sampleHash && remote.sampleHash) {
      comparable = true;
      if (stored.sampleHash !== remote.sampleHash) return true;
    }
    return comparable ? false : false;
  }

  function fetchRemoteMetaSignature(zipUrl) {
    if (!Downloads || !Downloads.fetchZipBundleMeta || !Downloads.hasGas || !Downloads.hasGas()) {
      return Promise.resolve(null);
    }
    return Downloads.fetchZipBundleMeta(zipUrl).then(function (meta) {
      return normalizeMetaSignature(meta);
    }).catch(function () {
      return null;
    });
  }

  function showUpdateBanner(zipUrl, indexPath) {
    if (!updateBanner) return;
    updateBanner.removeAttribute('hidden');
    if (updateActionButton) {
      updateActionButton.setAttribute('data-zip-url', zipUrl || '');
      updateActionButton.setAttribute('data-index-path', indexPath || '');
    }
  }

  function hideUpdateBanner() {
    if (!updateBanner) return;
    updateBanner.setAttribute('hidden', '');
    if (updateActionButton) {
      updateActionButton.removeAttribute('data-zip-url');
      updateActionButton.removeAttribute('data-index-path');
    }
  }

  function checkForRemoteUpdate(site, options) {
    if (!site || !site.url) return Promise.resolve();
    var opts = options || {};
    return fetchRemoteMetaSignature(site.url).then(function (remoteSignature) {
      if (!remoteSignature) return;
      var storedSignature = site.remoteMeta || null;
      var changed = storedSignature ? isMetaChanged(storedSignature, remoteSignature) : false;
      var nextUpdateAvailable = !!changed;

      // IMPORTANT:
      // Keep `remoteMeta` as the local baseline while an update is pending.
      // If we overwrite it with remote values here, the next check would think
      // there is no change and the update badge/banner would disappear.
      var nextSignature = changed ? storedSignature : mergeMetaSignature(storedSignature, remoteSignature);
      var needsSave = !metaEqual(storedSignature, nextSignature) || site.updateAvailable !== nextUpdateAvailable;
      if (!needsSave) {
        if (changed && opts.showBanner) {
          showUpdateBanner(opts.zipUrl || site.url, opts.indexPath || site.indexPath || '');
        }
        return changed;
      }
      site.remoteMeta = nextSignature;
      site.updateAvailable = nextUpdateAvailable;
      return Storage.saveSite(site).then(function () {
        if (changed && opts.showBanner) {
          showUpdateBanner(opts.zipUrl || site.url, opts.indexPath || site.indexPath || '');
        }
        if (changed && Manager && Manager.refreshManager) {
          Manager.refreshManager();
        }
        return changed;
      });
    });
  }

  function openUpdateCheckModal() {
    if (!updateCheckModal) return;
    updateCheckModal.removeAttribute('hidden');
  }

  function closeUpdateCheckModal() {
    if (!updateCheckModal) return;
    updateCheckModal.setAttribute('hidden', '');
  }

  function setUpdateCheckStatus(text) {
    if (updateCheckStatus) {
      updateCheckStatus.textContent = text;
    }
  }

  function setUpdateCheckNote(text) {
    if (updateCheckNote) {
      updateCheckNote.textContent = text;
    }
  }

  function setUpdateCheckProgress(done, total) {
    if (updateCheckProgress) {
      updateCheckProgress.textContent = t('manager.checkUpdatesProgress', { done: done, total: total });
    }
    if (updateCheckBar) {
      var pct = total ? Math.round((done / total) * 100) : 0;
      updateCheckBar.style.width = pct + '%';
    }
    if (updateCheckBarWrap) {
      if (total > 0) {
        updateCheckBarWrap.removeAttribute('hidden');
      } else {
        updateCheckBarWrap.setAttribute('hidden', '');
      }
    }
  }

  function checkUpdatesForAllSites() {
    var total = 0;
    var checked = 0;
    var changedIds = [];
    var skipSummary = false;
    openUpdateCheckModal();
    if (!Downloads || !Downloads.fetchZipBundleMeta || !Downloads.hasGas || !Downloads.hasGas()) {
      setUpdateCheckStatus(t('manager.checkUpdatesUnavailable'));
      setUpdateCheckNote(t('manager.checkUpdatesNote'));
      setUpdateCheckProgress(0, 0);
      if (UI.showInlineToast && managerCheckUpdatesButton) {
        UI.showInlineToast(managerCheckUpdatesButton, t('manager.checkUpdatesUnavailable'));
      }
      if (UI.showToast) {
        UI.showToast(t('manager.checkUpdatesUnavailable'));
      }
      return;
    }
    if (managerCheckUpdatesButton) {
      managerCheckUpdatesButton.disabled = true;
    }
    setUpdateCheckStatus(t('manager.checkingUpdates'));
    setUpdateCheckNote(t('manager.checkUpdatesNote'));
    Storage.getAllSites().then(function (sites) {
      total = sites.length;
      checked = 0;
      changedIds = [];
      setUpdateCheckProgress(0, total);
      if (!total) {
        setUpdateCheckStatus(t('manager.checkUpdatesNone'));
        skipSummary = true;
        return Manager.refreshManager();
      }
      return sites.reduce(function (promise, site) {
        return promise.then(function () {
          return checkForRemoteUpdate(site, { showBanner: false }).then(function (changed) {
            checked += 1;
            if (changed) changedIds.push(site.id);
            setUpdateCheckProgress(checked, total);
          });
        });
      }, Promise.resolve());
    }).then(function () {
      if (skipSummary) return;
      return Manager.refreshManager().then(function () {
        if (changedIds.length && Manager.highlightSites) {
          Manager.highlightSites(changedIds);
        }
        var summary = t('manager.checkUpdatesDoneSummary', { changed: changedIds.length, total: total });
        setUpdateCheckStatus(summary);
        if (UI.showInlineToast && managerCheckUpdatesButton) {
          UI.showInlineToast(managerCheckUpdatesButton, summary);
        }
        if (UI.showToast) {
          UI.showToast(summary);
        }
      });
    }).catch(function () {
      var doneMsg = t('manager.checkUpdatesDone');
      setUpdateCheckStatus(doneMsg);
      if (UI.showInlineToast && managerCheckUpdatesButton) {
        UI.showInlineToast(managerCheckUpdatesButton, doneMsg);
      }
      if (UI.showToast) {
        UI.showToast(doneMsg);
      }
    }).finally(function () {
      if (managerCheckUpdatesButton) {
        managerCheckUpdatesButton.disabled = false;
      }
    });
  }








  function fetchZipBundle(zipUrl) {
    if (!window.Downloads) {
      throw new Error('Download helper missing');
    }
    if (Downloads.init) {
      Downloads.init({ ui: UI, gasUrl: GAS_WEBAPP_URL, t: t, base64ToBytes: base64ToBytes });
    }
    if (Downloads.fetchZipBundle) {
      return Downloads.fetchZipBundle(zipUrl);
    }
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

  function isPdfPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.pdf');
  }

  function isDocxPath(path) {
    var lower = (path || '').toLowerCase();
    return lower.endsWith('.docx');
  }

  function encodePathForHref(path) {
    return (path || '').split('/').map(function (segment) {
      return encodeURIComponent(segment);
    }).join('/');
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getDocumentViewerStrings() {
    function getViewerText(key, fallback) {
      return t('documentViewer.' + key) || t('pdfViewer.' + key) || fallback;
    }
    return {
      documentsTitle: getViewerText('documentsTitle', 'Documentos'),
      hideList: getViewerText('hideList', 'Ocultar lista'),
      showList: getViewerText('showList', 'Mostrar lista'),
      loadingPdf: getViewerText('loadingPdf', 'Cargando PDF...'),
      failedPdf: getViewerText('failedPdf', 'No se pudo mostrar este PDF.'),
      downloadPdf: getViewerText('downloadPdf', 'Descargar PDF'),
      prevPage: getViewerText('prevPage', 'Anterior'),
      nextPage: getViewerText('nextPage', 'Siguiente'),
      zoomIn: getViewerText('zoomIn', '+'),
      zoomOut: getViewerText('zoomOut', '-'),
      fitWidth: getViewerText('fitWidth', 'Ajustar al ancho'),
      pageLabel: getViewerText('pageLabel', 'Página {current} / {total}'),
      missingPdfEngine: getViewerText('missingPdfEngine', 'No se pudo cargar el visor PDF.'),
      loadingDocx: getViewerText('loadingDocx', 'Cargando DOCX...'),
      failedDocx: getViewerText('failedDocx', 'No se pudo mostrar este DOCX.'),
      downloadDocx: getViewerText('downloadDocx', 'Descargar DOCX'),
      missingDocxEngine: getViewerText('missingDocxEngine', 'No se pudo cargar el visor DOCX.')
    };
  }

  function isDownloadAllowedByRestrictions(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    if (Restrictions && Restrictions.allowDownload) {
      return !!Restrictions.allowDownload(restrictions);
    }
    return !!restrictions.allowDownload;
  }

  function mapDocumentEntries(documentPaths) {
    return (documentPaths || []).map(function (path) {
      var type = isDocxPath(path) ? 'docx' : 'pdf';
      return {
        path: path,
        href: encodePathForHref(path),
        title: deriveTitleFromPath(path) || path,
        type: type
      };
    });
  }

  function buildSinglePdfDocumentHtml(selectedDoc, pageLang, strings, allowDownload) {
    var loadingPdfJs = JSON.stringify(strings.loadingPdf);
    var failedPdfJs = JSON.stringify(strings.failedPdf);
    var missingPdfEngineJs = JSON.stringify(strings.missingPdfEngine);
    var zoomInJs = JSON.stringify(strings.zoomIn);
    var zoomOutJs = JSON.stringify(strings.zoomOut);
    var fitWidthJs = JSON.stringify(strings.fitWidth);
    var downloadPdfJs = JSON.stringify(strings.downloadPdf);
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
      + '<title>' + escapeHtml(selectedDoc.title || 'PDF') + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#fff;--ink:#0f172a;--border:#e2e8f0;--accent:#2563eb}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:#f6f8fc;color:var(--ink)}'
      + '.pdf-shell{height:100%;padding:12px;display:grid;grid-template-rows:auto auto 1fr;gap:10px}'
      + '.pdf-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}'
      + '.pdf-icon-btn{width:40px;height:40px;border:1px solid var(--border);background:var(--surface);color:var(--ink);border-radius:11px;padding:0;cursor:pointer;display:inline-grid;place-items:center}'
      + '.pdf-icon-btn svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-icon-btn:disabled{opacity:.45;cursor:not-allowed}'
      + '.pdf-icon-btn:not(:disabled):hover{background:#eef4ff;color:var(--accent);border-color:#bfdbfe}'
      + '.pdf-download{margin-left:auto;color:var(--accent);text-decoration:none;font-weight:600;width:40px;height:40px;border:1px solid var(--border);border-radius:11px;display:grid;place-items:center}'
      + '.pdf-download svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-status{margin:0;font-size:.95rem;color:#475569}'
      + '.pdf-stage{overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:10px}'
      + '.pdf-stage.is-pannable{cursor:grab}'
      + '.pdf-stage.is-dragging{cursor:grabbing}'
      + '.pdf-pages{display:grid;gap:14px;justify-content:start;align-content:start;min-width:max-content}'
      + '.pdf-pages{display:grid;gap:14px;justify-content:start;align-content:start;min-width:max-content}.pdf-canvas{display:block;background:#fff;box-shadow:0 8px 20px rgba(15,23,42,.08)}'
      + '</style></head><body>'
      + '<div class="pdf-shell"><div class="pdf-toolbar"><button class="pdf-icon-btn" type="button" data-pdf-zoom-out><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M8 11h6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-fit-width><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v16"></path><path d="M20 4v16"></path><path d="M7 12h10"></path><path d="m10-3 3 3-3 3"></path><path d="m-6 0-3-3 3-3"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-zoom-in><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg></button><a class="pdf-download" data-pdf-download hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg></a></div><p class="pdf-status" data-pdf-status></p><div class="pdf-stage" data-pdf-stage><div class="pdf-pages" data-pdf-pages></div></div></div>'
      + '<script src="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js"></script>'
      + '<script>(function(){var href=' + JSON.stringify(selectedDoc.href) + ';var baseTitle=' + JSON.stringify(selectedDoc.title || 'PDF') + ';var loading=' + loadingPdfJs + ';var failed=' + failedPdfJs + ';var missing=' + missingPdfEngineJs + ';var zoomInLabel=' + zoomInJs + ';var zoomOutLabel=' + zoomOutJs + ';var fitWidthLabel=' + fitWidthJs + ';var downloadLabel=' + downloadPdfJs + ';var allowDownload=' + allowDownloadJs + ';var statusNode=document.querySelector("[data-pdf-status]");var stageNode=document.querySelector("[data-pdf-stage]");var pagesNode=document.querySelector("[data-pdf-pages]");var zoomInBtn=document.querySelector("[data-pdf-zoom-in]");var zoomOutBtn=document.querySelector("[data-pdf-zoom-out]");var fitWidthBtn=document.querySelector("[data-pdf-fit-width]");var downloadNode=document.querySelector("[data-pdf-download]");var iconZoomIn="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"></circle><path d=\\"m21 21-4.3-4.3\\"></path><path d=\\"M11 8v6\\"></path><path d=\\"M8 11h6\\"></path></svg>";var iconZoomOut="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"></circle><path d=\\"m21 21-4.3-4.3\\"></path><path d=\\"M8 11h6\\"></path></svg>";var iconFitWidth="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M4 4v16\\"></path><path d=\\"M20 4v16\\"></path><path d=\\"M7 12h10\\"></path><path d=\\"m10-3 3 3-3 3\\"></path><path d=\\"m-6 0-3-3 3-3\\"></path></svg>";var iconDownload="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\"></path><path d=\\"m7 10 5 5 5-5\\"></path><path d=\\"M12 15V3\\"></path></svg>";zoomInBtn.title=zoomInLabel;zoomInBtn.setAttribute("aria-label",zoomInLabel);zoomOutBtn.title=zoomOutLabel;zoomOutBtn.setAttribute("aria-label",zoomOutLabel);fitWidthBtn.title=fitWidthLabel;fitWidthBtn.setAttribute("aria-label",fitWidthLabel);if(downloadNode&&allowDownload){downloadNode.hidden=false;downloadNode.href=href;downloadNode.download="";downloadNode.title=downloadLabel;downloadNode.setAttribute("aria-label",downloadLabel);}var pdfDoc=null;var scale=1.2;var renderToken=0;var dragging=false;var dragStartX=0;var dragStartY=0;var startScrollLeft=0;var startScrollTop=0;function updatePanState(){if(!stageNode)return;var pannable=stageNode.scrollWidth>stageNode.clientWidth||stageNode.scrollHeight>stageNode.clientHeight;stageNode.classList.toggle("is-pannable",pannable);}function syncButtons(){zoomOutBtn.disabled=!pdfDoc;zoomInBtn.disabled=!pdfDoc;fitWidthBtn.disabled=!pdfDoc;updatePanState();}function renderAllPages(){if(!pdfDoc||!pagesNode)return;renderToken+=1;var token=renderToken;statusNode.textContent=loading;pagesNode.innerHTML="";var chain=Promise.resolve();for(var i=1;i<=pdfDoc.numPages;i+=1){(function(pageNumber){chain=chain.then(function(){if(token!==renderToken){return;}return pdfDoc.getPage(pageNumber).then(function(page){if(token!==renderToken){return;}var viewport=page.getViewport({scale:scale});var canvas=document.createElement("canvas");canvas.className="pdf-canvas";canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);pagesNode.appendChild(canvas);var ctx=canvas.getContext("2d",{alpha:false});return page.render({canvasContext:ctx,viewport:viewport}).promise.catch(function(){return null;});});});})(i);}chain.then(function(){if(token!==renderToken){return;}statusNode.textContent="";syncButtons();}).catch(function(){if(token!==renderToken){return;}statusNode.textContent=failed;syncButtons();});}function fitToWidth(){if(!pdfDoc||!stageNode)return;pdfDoc.getPage(1).then(function(page){var viewport=page.getViewport({scale:1});var available=stageNode.clientWidth-24;var nextScale=available>0?available/viewport.width:1;scale=Math.max(0.4,Math.min(5,nextScale));renderAllPages();}).catch(function(){});}function setTitle(custom){var clean=String(custom||"").replace(/\\s+/g," ").trim();document.title=clean||baseTitle||"PDF";}if(stageNode){stageNode.addEventListener("mousedown",function(ev){if(ev.button!==0)return;if(!(stageNode.scrollWidth>stageNode.clientWidth||stageNode.scrollHeight>stageNode.clientHeight))return;dragging=true;dragStartX=ev.clientX;dragStartY=ev.clientY;startScrollLeft=stageNode.scrollLeft;startScrollTop=stageNode.scrollTop;stageNode.classList.add("is-dragging");ev.preventDefault();});window.addEventListener("mousemove",function(ev){if(!dragging)return;stageNode.scrollLeft=startScrollLeft-(ev.clientX-dragStartX);stageNode.scrollTop=startScrollTop-(ev.clientY-dragStartY);});window.addEventListener("mouseup",function(){if(!dragging)return;dragging=false;stageNode.classList.remove("is-dragging");});stageNode.addEventListener("mouseleave",function(){if(!dragging)return;dragging=false;stageNode.classList.remove("is-dragging");});}setTitle(baseTitle);fetch("__vwz_meta.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-meta");return r.json();}).then(function(meta){setTitle(meta&&meta.title?meta.title:"");}).catch(function(){});if(!window.pdfjsLib||!window.pdfjsLib.getDocument){statusNode.textContent=missing;syncButtons();return;}window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";statusNode.textContent=loading;fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){return window.pdfjsLib.getDocument({data:buffer,disableRange:true,disableStream:true,disableAutoFetch:false}).promise;}).then(function(doc){pdfDoc=doc;syncButtons();fitToWidth();}).catch(function(){statusNode.textContent=failed;syncButtons();});zoomInBtn.addEventListener("click",function(){if(!pdfDoc)return;scale=Math.min(5,scale+0.2);renderAllPages();});zoomOutBtn.addEventListener("click",function(){if(!pdfDoc)return;scale=Math.max(0.4,scale-0.2);renderAllPages();});fitWidthBtn.addEventListener("click",function(){fitToWidth();});syncButtons();})();</script>'
      + '</body></html>';
  }

  function buildSingleDocxDocumentHtml(selectedDoc, pageLang, strings, allowDownload) {
    var loadingDocxLabelJs = JSON.stringify(strings.loadingDocx);
    var failedDocxLabelJs = JSON.stringify(strings.failedDocx);
    var downloadDocxLabelJs = JSON.stringify(strings.downloadDocx);
    var missingDocxEngineLabelJs = JSON.stringify(strings.missingDocxEngine);
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
      + '<title>' + escapeHtml(selectedDoc.title || 'DOCX') + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#fff;--ink:#0f172a;--border:#e2e8f0;--accent:#2563eb}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:#f6f8fc;color:var(--ink)}'
      + '.docx-shell{height:100%;padding:12px}'
      + '.docx-toolbar{display:flex;justify-content:flex-end;align-items:center;margin:0 0 10px}'
      + '.docx-viewer{height:100%;overflow:auto;background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:18px}'
      + '.docx-status{margin:0 0 12px;font-size:.95rem;color:#475569}'
      + '.docx-content{line-height:1.5}'
      + '.docx-content img{max-width:100%;height:auto}'
      + '.docx-download{color:var(--accent);text-decoration:none;font-weight:600}'
      + '</style></head><body>'
      + '<div class="docx-shell"><div class="docx-toolbar"><a class="docx-download" data-docx-download hidden></a></div><article class="docx-viewer"><p class="docx-status" data-docx-status></p><div class="docx-content" data-docx-content></div></article></div>'
      + '<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/docx-preview@0.3.3/dist/docx-preview.min.js"></script>'
      + '<script>(function(){var statusNode=document.querySelector("[data-docx-status]");var contentNode=document.querySelector("[data-docx-content]");var downloadNode=document.querySelector("[data-docx-download]");var href=' + JSON.stringify(selectedDoc.href) + ';var title=' + JSON.stringify(selectedDoc.title || 'DOCX') + ';var loading=' + loadingDocxLabelJs + ';var failed=' + failedDocxLabelJs + ';var download=' + downloadDocxLabelJs + ';var missing=' + missingDocxEngineLabelJs + ';var allowDownload=' + allowDownloadJs + ';var viewerTitle=(title||"DOCX");document.title=viewerTitle;var iconDownload="<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path><path d=\"M12 15V3\"></path></svg>";if(downloadNode){downloadNode.hidden=!allowDownload;downloadNode.title=download;downloadNode.setAttribute("aria-label",download);downloadNode.href=href;downloadNode.download="";}fetch("__vwz_meta.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-meta");return r.json();}).then(function(meta){var custom=(meta&&meta.title?String(meta.title):"").replace(/\\s+/g," ").trim();if(custom){viewerTitle=custom;document.title=custom;}}).catch(function(){});statusNode.textContent=loading;function fail(message){statusNode.textContent=message;if(!allowDownload){return;}contentNode.innerHTML="<p><a class=\\"docx-download\\" href=\\"" + href.replace(/"/g,"&quot;") + "\\" download>" + download + "</a></p>";}if(!window.docx||!window.docx.renderAsync){fail(missing);return;}fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){if(contentNode){contentNode.innerHTML="";}return window.docx.renderAsync(buffer,contentNode,contentNode,{inWrapper:true,breakPages:true,renderHeaders:true,renderFooters:true,renderFootnotes:true,renderEndnotes:true,useBase64URL:true});}).then(function(){statusNode.textContent="";}).catch(function(){fail(failed);});})();</script>'
      + '</body></html>';
  }

  function buildDocumentListItems(docs, selectedDoc) {
    return docs.map(function (doc) {
      var selected = doc.path === selectedDoc.path ? ' class="is-active"' : '';
      return '<li><button type="button" data-doc-link' + selected + ' data-doc-type="' + escapeHtml(doc.type) + '" data-doc-href="' + escapeHtml(doc.href) + '" data-doc-title="' + escapeHtml(doc.title) + '">' + escapeHtml(doc.title) + '</button></li>';
    }).join('');
  }

  function buildMultiDocumentIndexHtml(docs, selectedDoc, pageLang, strings, allowDownload) {
    var documentsTitleJs = JSON.stringify(strings.documentsTitle);
    var hideListLabelJs = JSON.stringify(strings.hideList);
    var showListLabelJs = JSON.stringify(strings.showList);
    var loadingPdfLabelJs = JSON.stringify(strings.loadingPdf);
    var failedPdfLabelJs = JSON.stringify(strings.failedPdf);
    var downloadPdfLabelJs = JSON.stringify(strings.downloadPdf);
    var prevPageLabelJs = JSON.stringify(strings.prevPage);
    var nextPageLabelJs = JSON.stringify(strings.nextPage);
    var zoomInLabelJs = JSON.stringify(strings.zoomIn);
    var zoomOutLabelJs = JSON.stringify(strings.zoomOut);
    var fitWidthLabelJs = JSON.stringify(strings.fitWidth);
    var pageLabelJs = JSON.stringify(strings.pageLabel);
    var missingPdfEngineLabelJs = JSON.stringify(strings.missingPdfEngine);
    var loadingDocxLabelJs = JSON.stringify(strings.loadingDocx);
    var failedDocxLabelJs = JSON.stringify(strings.failedDocx);
    var downloadDocxLabelJs = JSON.stringify(strings.downloadDocx);
    var missingDocxEngineLabelJs = JSON.stringify(strings.missingDocxEngine);
    var allowDownloadJs = allowDownload ? 'true' : 'false';
    var listItems = buildDocumentListItems(docs, selectedDoc);
    return '<!doctype html>'
      + '<html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
      + '<title>' + escapeHtml(selectedDoc.title || 'Documento') + '</title>'
      + '<style>'
      + ':root{color-scheme:light;--surface:#fff;--surface-muted:#f3f5f8;--ink:#0f172a;--border:#e2e8f0;--border-strong:#cbd5e1;--accent:#2563eb;--accent-wash:#eff6ff;--shadow:0 10px 26px rgba(15,23,42,.06)}'
      + '*{box-sizing:border-box}html,body{height:100%;margin:0}'
      + 'body{font-family:"Libre Franklin","Segoe UI",sans-serif;background:#f6f8fc;color:var(--ink)}'
      + '.layout{display:grid;grid-template-columns:minmax(230px,330px) 1fr;height:100%;gap:12px;padding:12px}'
      + '.sidebar{display:flex;flex-direction:column;min-height:0;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);overflow:hidden}'
      + '.sidebar-toggle{width:36px;height:36px;margin:10px 10px 8px;appearance:none;border:1px solid var(--border-strong);background:var(--surface-muted);color:#334155;border-radius:10px;padding:0;cursor:pointer;display:inline-grid;place-items:center}'
      + '.sidebar-toggle:hover{background:var(--accent-wash);color:var(--accent)}'
      + '.sidebar-toggle svg{width:18px;height:18px;display:block;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.sidebar-content{padding:0 10px 10px;overflow:auto}'
      + '.sidebar h1{margin:0 0 10px;font-size:1rem;line-height:1.2}'
      + '.sidebar ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}'
      + '.sidebar button{display:block;width:100%;text-align:left;padding:10px 12px;border-radius:12px;text-decoration:none;color:var(--ink);border:1px solid var(--border);background:var(--surface-muted);font-weight:500;cursor:pointer;font:inherit}'
      + '.sidebar button:hover{background:var(--accent-wash);border-color:#bfdbfe}'
      + '.sidebar button.is-active{background:var(--accent-wash);border-color:#93c5fd;color:#1d4ed8;font-weight:700}'
      + 'body.sidebar-collapsed .layout{grid-template-columns:56px 1fr}'
      + 'body.sidebar-collapsed .sidebar{align-items:stretch}'
      + 'body.sidebar-collapsed .sidebar-toggle{margin:10px auto 8px}'
      + 'body.sidebar-collapsed .sidebar-content{display:none}'
      + '.viewer{min-height:0;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);overflow:hidden;display:flex;flex-direction:column}'
      + '.pdf-pane{height:100%;display:flex;flex-direction:column;min-height:0;padding:10px;gap:10px}'
      + '.pdf-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}'
      + '.pdf-icon-btn{width:40px;height:40px;border:1px solid var(--border);background:var(--surface);color:var(--ink);border-radius:11px;padding:0;cursor:pointer;display:inline-grid;place-items:center}'
      + '.pdf-icon-btn svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-icon-btn:disabled{opacity:.45;cursor:not-allowed}'
      + '.pdf-icon-btn:not(:disabled):hover{background:#eef4ff;color:var(--accent);border-color:#bfdbfe}'
      + '.pdf-page{font-size:.9rem;color:#475569;padding:0 4px}'
      + '.pdf-download{margin-left:auto;color:var(--accent);text-decoration:none;font-weight:600;width:40px;height:40px;border:1px solid var(--border);border-radius:11px;display:grid;place-items:center}'
      + '.pdf-download svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
      + '.pdf-status{margin:0;font-size:.95rem;color:#475569}'
      + '.pdf-stage{overflow:auto;background:var(--surface-muted);border:1px solid var(--border);border-radius:12px;padding:10px;display:grid;place-items:start;min-height:0;flex:1}'
      + '.pdf-stage.is-pannable{cursor:grab}'
      + '.pdf-stage.is-dragging{cursor:grabbing}'
      + '.pdf-pages{display:grid;gap:12px;justify-content:start;align-content:start;min-width:max-content}'
      + '.pdf-canvas{display:block;background:#fff;box-shadow:0 8px 20px rgba(15,23,42,.08)}'
      + '.docx-pane{height:100%;display:none;flex-direction:column;min-height:0;padding:10px;gap:10px;overflow:hidden}'
      + '.docx-status{margin:0 0 12px;font-size:.95rem;color:#475569}'
      + '.docx-stage{overflow:auto;background:var(--surface-muted);border:1px solid var(--border);border-radius:12px;padding:18px;min-height:0;flex:1}'
      + '.docx-content{line-height:1.5}'
      + '.docx-content img{max-width:100%;height:auto}'
      + '.docx-download{color:var(--accent);text-decoration:none;font-weight:600}'
      + '@media (max-width:900px){.layout{grid-template-columns:1fr;grid-template-rows:auto 1fr}body.sidebar-collapsed .layout{grid-template-columns:1fr;grid-template-rows:auto 1fr}}'
      + '</style></head><body>'
      + '<div class="layout"><aside class="sidebar"><button type="button" class="sidebar-toggle" data-sidebar-toggle aria-expanded="true" title="' + escapeHtml(strings.hideList) + '" aria-label="' + escapeHtml(strings.hideList) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 3v18"></path><path d="m16 9-3 3 3 3"></path></svg></button><div class="sidebar-content" data-sidebar-content><h1 data-viewer-title>' + escapeHtml(strings.documentsTitle) + '</h1><ul>'
      + listItems
      + '</ul></div></aside><main class="viewer"><section class="pdf-pane" data-pdf-pane><div class="pdf-toolbar"><button class="pdf-icon-btn" type="button" data-pdf-prev><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-next><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-zoom-out><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M8 11h6"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-fit-width><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v16"></path><path d="M20 4v16"></path><path d="m9 8-4 4 4 4"></path><path d="m15 8 4 4-4 4"></path><path d="M5 12h14"></path></svg></button><button class="pdf-icon-btn" type="button" data-pdf-zoom-in><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg></button><span class="pdf-page" data-pdf-page></span><a class="pdf-download" data-pdf-download hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg></a></div><p class="pdf-status" data-pdf-status></p><div class="pdf-stage" data-pdf-stage><div class="pdf-pages" data-pdf-pages></div></div></section><article class="docx-pane" data-docx-pane><div class="pdf-toolbar"><button class="pdf-icon-btn" type="button" data-docx-prev><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-next><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-zoom-out><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M8 11h6"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-fit-width><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v16"></path><path d="M20 4v16"></path><path d="m9 8-4 4 4 4"></path><path d="m15 8 4 4-4 4"></path><path d="M5 12h14"></path></svg></button><button class="pdf-icon-btn" type="button" data-docx-zoom-in><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path><path d="M11 8v6"></path><path d="M8 11h6"></path></svg></button><span class="pdf-page" data-docx-page></span><a class="pdf-download" data-docx-download hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path><path d="M12 15V3"></path></svg></a></div><p class="docx-status" data-docx-status></p><div class="docx-stage" data-docx-stage><div class="docx-content" data-docx-content></div></div></article></main></div>'
      + '<script src="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>'
      + '<script src="https://cdn.jsdelivr.net/npm/docx-preview@0.3.3/dist/docx-preview.min.js"></script>'
      + '<script>(function(){var body=document.body;var btn=document.querySelector("[data-sidebar-toggle]");var pdfPane=document.querySelector("[data-pdf-pane]");var pdfStage=document.querySelector("[data-pdf-stage]");var pdfStatus=document.querySelector("[data-pdf-status]");var pdfPage=document.querySelector("[data-pdf-page]");var pdfPages=document.querySelector("[data-pdf-pages]");var pdfPrev=document.querySelector("[data-pdf-prev]");var pdfNext=document.querySelector("[data-pdf-next]");var pdfZoomOut=document.querySelector("[data-pdf-zoom-out]");var pdfZoomIn=document.querySelector("[data-pdf-zoom-in]");var pdfFitWidth=document.querySelector("[data-pdf-fit-width]");var pdfDownload=document.querySelector("[data-pdf-download]");var docxPane=document.querySelector("[data-docx-pane]");var docxStatus=document.querySelector("[data-docx-status]");var docxContent=document.querySelector("[data-docx-content]");var docxDownload=document.querySelector("[data-docx-download]");var titleNode=document.querySelector("[data-viewer-title]");var links=[].slice.call(document.querySelectorAll("[data-doc-link]"));var iconOpen="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"></rect><path d=\\"M9 3v18\\"></path><path d=\\"m16 9-3 3 3 3\\"></path></svg>";var iconClosed="<svg viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\"></rect><path d=\\"M9 3v18\\"></path><path d=\\"m13 9 3 3-3 3\\"></path></svg>";var labelHide=' + hideListLabelJs + ';var labelShow=' + showListLabelJs + ';var loadingPdf=' + loadingPdfLabelJs + ';var failedPdf=' + failedPdfLabelJs + ';var downloadPdf=' + downloadPdfLabelJs + ';var prevPageLabel=' + prevPageLabelJs + ';var nextPageLabel=' + nextPageLabelJs + ';var zoomInLabel=' + zoomInLabelJs + ';var zoomOutLabel=' + zoomOutLabelJs + ';var fitWidthLabel=' + fitWidthLabelJs + ';var pageTpl=' + pageLabelJs + ';var missingPdf=' + missingPdfEngineLabelJs + ';var loadingDocx=' + loadingDocxLabelJs + ';var failedDocx=' + failedDocxLabelJs + ';var downloadDocx=' + downloadDocxLabelJs + ';var missingDocx=' + missingDocxEngineLabelJs + ';var viewerTitle=' + documentsTitleJs + ';var allowDownload=' + allowDownloadJs + ';var hasCustomTitle=false;var pdfDoc=null;var pdfPageNum=1;var pdfTotal=1;var pdfScale=1.2;var renderToken=0;var syncingScroll=false;function applyViewerTitle(title){var clean=String(title||"").replace(/\\s+/g," ").trim();if(!clean)return;viewerTitle=clean;if(titleNode){titleNode.textContent=clean;}document.title=clean;}function markActive(link){links.forEach(function(node){node.classList.toggle("is-active",node===link);});if(link&&!hasCustomTitle){var title=(link.getAttribute("data-doc-title")||link.textContent||"").replace(/\\s+/g," ").trim();if(title){document.title=title;}}}function syncToggle(){if(!btn)return;var collapsed=body.classList.contains("sidebar-collapsed");var label=collapsed?labelShow:labelHide;btn.title=label;btn.setAttribute("aria-label",label);btn.setAttribute("aria-expanded",collapsed?"false":"true");}function pageText(){return pageTpl.replace(/\\{current\\}/g,String(pdfPageNum)).replace(/\\{total\\}/g,String(pdfTotal));}function syncPdfUi(){if(!pdfPrev||!pdfNext||!pdfZoomIn||!pdfZoomOut||!pdfFitWidth||!pdfPage)return;pdfPrev.title=prevPageLabel;pdfPrev.setAttribute("aria-label",prevPageLabel);pdfNext.title=nextPageLabel;pdfNext.setAttribute("aria-label",nextPageLabel);pdfZoomIn.title=zoomInLabel;pdfZoomIn.setAttribute("aria-label",zoomInLabel);pdfZoomOut.title=zoomOutLabel;pdfZoomOut.setAttribute("aria-label",zoomOutLabel);pdfFitWidth.title=fitWidthLabel;pdfFitWidth.setAttribute("aria-label",fitWidthLabel);pdfPrev.disabled=!pdfDoc||pdfPageNum<=1;pdfNext.disabled=!pdfDoc||pdfPageNum>=pdfTotal;pdfZoomIn.disabled=!pdfDoc;pdfZoomOut.disabled=!pdfDoc;pdfFitWidth.disabled=!pdfDoc;pdfPage.textContent=pdfDoc?pageText():"";}function getCanvases(){return pdfPages?[].slice.call(pdfPages.querySelectorAll("canvas[data-page-num]")):[];}function scrollToPage(num){if(!pdfStage||!pdfPages)return;var canvas=pdfPages.querySelector("canvas[data-page-num=\\""+String(num)+"\\"]");if(!canvas)return;syncingScroll=true;pdfStage.scrollTop=Math.max(0,canvas.offsetTop-8);setTimeout(function(){syncingScroll=false;},80);}function updatePageFromScroll(){if(!pdfDoc||syncingScroll||!pdfStage||!pdfPages)return;var canvases=getCanvases();if(!canvases.length)return;var probe=pdfStage.scrollTop+Math.max(12,pdfStage.clientHeight*0.35);var current=1;for(var i=0;i<canvases.length;i+=1){if(canvases[i].offsetTop<=probe){current=i+1;}else{break;}}if(current!==pdfPageNum){pdfPageNum=current;syncPdfUi();}}function renderAllPages(keepPage){if(!pdfDoc||!pdfPages)return;renderToken+=1;var token=renderToken;pdfStatus.textContent=loadingPdf;pdfPages.innerHTML="";var chain=Promise.resolve();for(var i=1;i<=pdfTotal;i+=1){(function(pageNumber){chain=chain.then(function(){if(token!==renderToken){return;}return pdfDoc.getPage(pageNumber).then(function(page){if(token!==renderToken){return;}var viewport=page.getViewport({scale:pdfScale});var canvas=document.createElement("canvas");canvas.className="pdf-canvas";canvas.setAttribute("data-page-num",String(pageNumber));canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);pdfPages.appendChild(canvas);var ctx=canvas.getContext("2d",{alpha:false});return page.render({canvasContext:ctx,viewport:viewport}).promise.catch(function(){return null;});});});})(i);}chain.then(function(){if(token!==renderToken){return;}pdfStatus.textContent="";syncPdfUi();if(keepPage){scrollToPage(keepPage);}}).catch(function(){if(token!==renderToken){return;}pdfStatus.textContent=failedPdf;syncPdfUi();});}function fitPdfToWidth(){if(!pdfDoc||!pdfStage)return;pdfDoc.getPage(1).then(function(page){var viewport=page.getViewport({scale:1});var available=pdfStage.clientWidth-24;var nextScale=available>0?available/viewport.width:1;pdfScale=Math.max(0.4,Math.min(5,nextScale));renderAllPages(pdfPageNum);}).catch(function(){renderAllPages(pdfPageNum);});}function loadPdf(href){if(docxPane){docxPane.style.display="none";}if(pdfPane){pdfPane.style.display="flex";}if(pdfDownload){pdfDownload.hidden=!allowDownload;pdfDownload.title=downloadPdf;pdfDownload.setAttribute("aria-label",downloadPdf);pdfDownload.href=href||"";pdfDownload.download="";}pdfDoc=null;pdfPageNum=1;pdfTotal=1;syncPdfUi();if(!window.pdfjsLib||!window.pdfjsLib.getDocument){pdfStatus.textContent=missingPdf;return;}window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";pdfStatus.textContent=loadingPdf;fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){return window.pdfjsLib.getDocument({data:buffer,disableRange:true,disableStream:true,disableAutoFetch:false}).promise;}).then(function(doc){pdfDoc=doc;pdfTotal=doc.numPages||1;pdfPageNum=1;syncPdfUi();fitPdfToWidth();}).catch(function(){pdfStatus.textContent=failedPdf;syncPdfUi();});}function failDocx(href,message){if(!docxStatus||!docxContent)return;docxStatus.textContent=message;if(allowDownload){docxContent.innerHTML="<p><a class=\\"docx-download\\" href=\\"" + String(href||"").replace(/"/g,"&quot;") + "\\" download>" + downloadDocx + "</a></p>";}else{docxContent.innerHTML="";}}function showDocx(href){if(pdfPane){pdfPane.style.display="none";}if(docxPane){docxPane.style.display="flex";}if(docxDownload){docxDownload.hidden=!allowDownload;docxDownload.title=downloadDocx;docxDownload.setAttribute("aria-label",downloadDocx);docxDownload.href=href||"";docxDownload.download="";}if(docxStatus){docxStatus.textContent=loadingDocx;}if(docxContent){docxContent.innerHTML="";}if(!window.docx||!window.docx.renderAsync){failDocx(href,missingDocx);return;}fetch(href).then(function(r){if(!r.ok)throw new Error("fetch");return r.arrayBuffer();}).then(function(buffer){if(docxContent){docxContent.innerHTML="";}return window.docx.renderAsync(buffer,docxContent,docxContent,{inWrapper:true,breakPages:true,renderHeaders:true,renderFooters:true,renderFootnotes:true,renderEndnotes:true,useBase64URL:true});}).then(function(){if(docxStatus){docxStatus.textContent="";}}).catch(function(){failDocx(href,failedDocx);});}if(pdfPrev){pdfPrev.addEventListener("click",function(){if(!pdfDoc||pdfPageNum<=1)return;pdfPageNum-=1;syncPdfUi();scrollToPage(pdfPageNum);});}if(pdfNext){pdfNext.addEventListener("click",function(){if(!pdfDoc||pdfPageNum>=pdfTotal)return;pdfPageNum+=1;syncPdfUi();scrollToPage(pdfPageNum);});}if(pdfZoomIn){pdfZoomIn.addEventListener("click",function(){if(!pdfDoc)return;pdfScale=Math.min(5,pdfScale+0.2);renderAllPages(pdfPageNum);});}if(pdfZoomOut){pdfZoomOut.addEventListener("click",function(){if(!pdfDoc)return;pdfScale=Math.max(0.4,pdfScale-0.2);renderAllPages(pdfPageNum);});}if(pdfFitWidth){pdfFitWidth.addEventListener("click",function(){if(!pdfDoc)return;fitPdfToWidth();});}if(pdfStage){pdfStage.addEventListener("scroll",function(){updatePageFromScroll();});}if(btn){btn.addEventListener("click",function(){body.classList.toggle("sidebar-collapsed");syncToggle();});syncToggle();}links.forEach(function(link){link.addEventListener("click",function(){var href=link.getAttribute("data-doc-href")||"";var type=(link.getAttribute("data-doc-type")||"pdf").toLowerCase();if(type==="docx"){showDocx(href);}else{loadPdf(href);}markActive(link);});});var initial=links.find(function(link){return link.classList.contains("is-active");})||links[0]||null;if(initial){var initialHref=initial.getAttribute("data-doc-href")||"";var initialType=(initial.getAttribute("data-doc-type")||"pdf").toLowerCase();if(initialType==="docx"){showDocx(initialHref);}else{loadPdf(initialHref);}markActive(initial);}fetch("__vwz_meta.json",{cache:"no-store"}).then(function(r){if(!r.ok)throw new Error("no-meta");return r.json();}).then(function(meta){var custom=(meta&&meta.title?String(meta.title):"").replace(/\\s+/g," ").trim();if(custom){hasCustomTitle=true;applyViewerTitle(custom);}}).catch(function(){});syncPdfUi();})();</script>'
      + '<script>(function(){var docxPane=document.querySelector("[data-docx-pane]");var docxStage=document.querySelector("[data-docx-stage]");var docxContent=document.querySelector("[data-docx-content]");var prevBtn=document.querySelector("[data-docx-prev]");var nextBtn=document.querySelector("[data-docx-next]");var zoomOutBtn=document.querySelector("[data-docx-zoom-out]");var zoomInBtn=document.querySelector("[data-docx-zoom-in]");var fitBtn=document.querySelector("[data-docx-fit-width]");var pageNode=document.querySelector("[data-docx-page]");if(!docxPane||!docxStage||!docxContent||!prevBtn||!nextBtn||!zoomOutBtn||!zoomInBtn||!fitBtn||!pageNode){return;}var prevLabel=' + prevPageLabelJs + ';var nextLabel=' + nextPageLabelJs + ';var zoomInLabel=' + zoomInLabelJs + ';var zoomOutLabel=' + zoomOutLabelJs + ';var fitWidthLabel=' + fitWidthLabelJs + ';var pageTpl=' + pageLabelJs + ';var pageNum=1;var totalPages=1;var zoom=1;var syncing=false;function getPages(){var pages=[].slice.call(docxContent.querySelectorAll(".docx-wrapper .docx, .docx-wrapper section.docx, .docx-wrapper > section, section.docx"));if(!pages.length&&docxContent.children.length){pages=[docxContent];}return pages;}function pageText(){return pageTpl.replace(/\\{current\\}/g,String(pageNum)).replace(/\\{total\\}/g,String(totalPages));}function applyZoom(){var wrappers=[].slice.call(docxContent.querySelectorAll(".docx-wrapper"));if(!wrappers.length&&docxContent){wrappers=[docxContent];}wrappers.forEach(function(wrapper){wrapper.style.zoom=String(zoom);});}function refreshPagination(){var pages=getPages();totalPages=pages.length||1;if(pageNum<1){pageNum=1;}if(pageNum>totalPages){pageNum=totalPages;}prevBtn.disabled=pageNum<=1;nextBtn.disabled=pageNum>=totalPages;zoomInBtn.disabled=!totalPages;zoomOutBtn.disabled=!totalPages;fitBtn.disabled=!totalPages;pageNode.textContent=pageText();}function scrollToPage(target){var pages=getPages();if(!pages.length)return;var next=Math.max(1,Math.min(totalPages,target));var node=pages[next-1];if(!node)return;syncing=true;docxStage.scrollTop=Math.max(0,node.offsetTop-8);setTimeout(function(){syncing=false;},80);pageNum=next;refreshPagination();}function updateFromScroll(){if(syncing)return;var pages=getPages();if(!pages.length)return;var probe=docxStage.scrollTop+Math.max(12,docxStage.clientHeight*0.35);var current=1;for(var i=0;i<pages.length;i+=1){if(pages[i].offsetTop<=probe){current=i+1;}else{break;}}if(current!==pageNum){pageNum=current;refreshPagination();}}function fitToWidth(){var pages=getPages();if(!pages.length)return;var baseWidth=pages[0].offsetWidth||0;if(!baseWidth){return;}var available=docxStage.clientWidth-24;var nextZoom=available>0?available/baseWidth:1;zoom=Math.max(0.4,Math.min(5,nextZoom));applyZoom();refreshPagination();}prevBtn.title=prevLabel;prevBtn.setAttribute("aria-label",prevLabel);nextBtn.title=nextLabel;nextBtn.setAttribute("aria-label",nextLabel);zoomInBtn.title=zoomInLabel;zoomInBtn.setAttribute("aria-label",zoomInLabel);zoomOutBtn.title=zoomOutLabel;zoomOutBtn.setAttribute("aria-label",zoomOutLabel);fitBtn.title=fitWidthLabel;fitBtn.setAttribute("aria-label",fitWidthLabel);prevBtn.addEventListener("click",function(){if(pageNum<=1)return;scrollToPage(pageNum-1);});nextBtn.addEventListener("click",function(){if(pageNum>=totalPages)return;scrollToPage(pageNum+1);});zoomInBtn.addEventListener("click",function(){zoom=Math.min(5,zoom+0.1);applyZoom();refreshPagination();});zoomOutBtn.addEventListener("click",function(){zoom=Math.max(0.4,zoom-0.1);applyZoom();refreshPagination();});fitBtn.addEventListener("click",function(){fitToWidth();});docxStage.addEventListener("scroll",function(){updateFromScroll();});var observerTimer=0;var observer=new MutationObserver(function(){if(observerTimer){clearTimeout(observerTimer);}observerTimer=setTimeout(function(){pageNum=1;applyZoom();refreshPagination();scrollToPage(1);},40);});observer.observe(docxContent,{childList:true,subtree:true});refreshPagination();})();</script>'
      + '</body></html>';
  }

  function buildDocumentIndexHtml(documentPaths, selectedPath, allowDownload) {
    var pageLang = normalizeLang(currentLang);
    var strings = getDocumentViewerStrings();
    var docs = mapDocumentEntries(documentPaths);
    if (!docs.length) {
      return '<!doctype html><html lang="' + escapeHtml(pageLang) + '"><head><meta charset="utf-8"></head><body></body></html>';
    }
    var selectedDoc = docs.find(function (doc) { return doc.path === selectedPath; }) || docs[0];
    if (docs.length <= 1) {
      if (selectedDoc.type === 'pdf') {
        return buildSinglePdfDocumentHtml(selectedDoc, pageLang, strings, allowDownload);
      }
      // Reuse the multi-document viewer for a single DOCX to avoid
      // the blank-render edge case seen in the single-DOCX template.
      return buildMultiDocumentIndexHtml(docs, selectedDoc, pageLang, strings, allowDownload);
    }
    return buildMultiDocumentIndexHtml(docs, selectedDoc, pageLang, strings, allowDownload);
  }

  function prepareDocumentOnlyZip(files, siteId, preferredIndexPath, allowDownload) {
    function comparePdfPaths(a, b) {
      var left = String(a || '');
      var right = String(b || '');
      function numericPrefixSequence(path) {
        return path.split('/').filter(function (part) { return !!part; }).map(function (part) {
          var match = /^(\d+)(?:[\s._-]+|$)/.exec(part);
          return match ? parseInt(match[1], 10) : null;
        });
      }

      var leftSeq = numericPrefixSequence(left);
      var rightSeq = numericPrefixSequence(right);
      var maxLen = Math.max(leftSeq.length, rightSeq.length);

      for (var i = 0; i < maxLen; i += 1) {
        var leftNum = i < leftSeq.length ? leftSeq[i] : null;
        var rightNum = i < rightSeq.length ? rightSeq[i] : null;

        if (leftNum !== null && rightNum !== null) {
          if (leftNum !== rightNum) {
            return leftNum - rightNum;
          }
          continue;
        }
        if (leftNum !== null && rightNum === null) {
          return -1;
        }
        if (leftNum === null && rightNum !== null) {
          return 1;
        }
      }

      return left.localeCompare(right, undefined, {
        numeric: true,
        sensitivity: 'base'
      });
    }

    var htmlExists = files.some(function (file) {
      var lower = (file.path || '').toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (htmlExists) {
      return { files: files, preferredIndexPath: preferredIndexPath || '' };
    }
    var documentPaths = files.map(function (file) { return file.path; }).filter(function (path) {
      return isPdfPath(path) || isDocxPath(path);
    });
    documentPaths.sort(comparePdfPaths);
    if (!documentPaths.length) {
      return { files: files, preferredIndexPath: preferredIndexPath || '' };
    }
    var preferred = preferredIndexPath ? normalizePath(preferredIndexPath) : '';
    var selectedDoc = documentPaths.find(function (path) { return path === preferred; }) || documentPaths[0];
    var lowerPaths = files.map(function (file) { return (file.path || '').toLowerCase(); });
    var indexPath = '__vwz_docs_index.html';
    var suffix = 2;
    while (lowerPaths.indexOf(indexPath.toLowerCase()) !== -1) {
      indexPath = '__vwz_docs_index_' + suffix + '.html';
      suffix += 1;
    }
    var blob = new Blob([buildDocumentIndexHtml(documentPaths, selectedDoc, allowDownload)], { type: 'text/html' });
    var nextFiles = files.slice();
    nextFiles.push({
      key: siteId + '::' + indexPath,
      siteId: siteId,
      path: indexPath,
      blob: blob,
      size: blob.size,
      type: 'text/html'
    });
    return { files: nextFiles, preferredIndexPath: indexPath };
  }

  function pickIndexPath(paths, preferredIndexPath) {
    var htmlPaths = paths.filter(function (path) {
      var lower = path.toLowerCase();
      return lower.endsWith('.html') || lower.endsWith('.htm');
    });
    if (!htmlPaths.length) {
      return Promise.reject(new Error(t('error.needHtmlFile')));
    }
    var preferredFromUrl = preferredIndexPath ? normalizePath(preferredIndexPath) : '';
    if (preferredFromUrl) {
      var match = htmlPaths.find(function (p) { return p === preferredFromUrl; });
      if (match) {
        return Promise.resolve(match);
      }
    }
    var preferred = findIndexPath(paths);
    if (preferred && /index\.html?$/.test(preferred.toLowerCase())) {
      return Promise.resolve(preferred);
    }
    if (htmlPaths.length === 1) {
      return Promise.resolve(htmlPaths[0]);
    }
    return HtmlPicker.open(htmlPaths, preferredFromUrl || preferred || htmlPaths[0]);
  }

  function loadZip(zipUrl, options) {
    var opts = options || {};
    var fromManager = !!opts.fromManager;
    var autoOpen = !!opts.autoOpen && !fromManager;
    var showProgress = opts.showProgress !== false;
    var normalizedZipUrl = normalizeZipUrl(zipUrl);
    var shouldUseNormalized = false;
    if (normalizedZipUrl.indexOf('/s/') !== -1 || normalizedZipUrl.indexOf('nextcloud') !== -1) {
      shouldUseNormalized = true;
    }
    if (zipUrl.indexOf('dropbox.com') !== -1) {
      shouldUseNormalized = true;
    }
    // GitHub "blob" pages are HTML. Use the raw URL when normalizeZipUrl() converted it.
    if (!shouldUseNormalized && normalizedZipUrl !== zipUrl) {
      try {
        var parsedZip = new URL(zipUrl);
        var hostZip = (parsedZip.hostname || '').toLowerCase();
        if ((hostZip === 'github.com' || hostZip === 'www.github.com') && parsedZip.pathname.indexOf('/blob/') !== -1) {
          shouldUseNormalized = true;
        }
      } catch (e) {
        // ignore
      }
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

    var remoteMetaPromise = null;
    function getRemoteMetaPromise() {
      if (!remoteMetaPromise) {
        remoteMetaPromise = fetchRemoteMetaSignature(effectiveZipUrl);
      }
      return remoteMetaPromise;
    }

    return computeSiteId(effectiveZipUrl)
      .then(function (siteId) {
        return Storage.getSite(siteId).then(function (site) {
          return { siteId: siteId, cached: !!site, site: site };
        });
      })
      .then(function (result) {
        currentZipUrl = effectiveZipUrl;
        // If the share URL contains an explicit entry HTML path, keep it in the generated links.
        refreshShareLink(effectiveZipUrl, opts.preferredIndexPath || '');

        if (result.cached && !opts.force) {
          var cachedIndexPath = result.site ? (result.site.indexPath || '') : '';
          var effectiveIndexPath = opts.preferredIndexPath ? normalizePath(opts.preferredIndexPath) : cachedIndexPath;
          currentIndexPath = effectiveIndexPath || cachedIndexPath || '';
          refreshShareLink(effectiveZipUrl, currentIndexPath);
          var remoteUpdateCheck = checkForRemoteUpdate(result.site, {
            showBanner: !opts.embed,
            zipUrl: effectiveZipUrl,
            indexPath: currentIndexPath
          });
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
          var siteUrl = buildSiteUrl(result.siteId, currentIndexPath || (result.site ? result.site.indexPath : ''));
          return controlPromise.then(function () {
            if (opts.embed) {
              openEmbedSite(siteUrl);
              return { siteId: result.siteId, siteUrl: siteUrl };
            }
            if (autoOpen) {
              return Promise.resolve(remoteUpdateCheck).then(function (changed) {
                if (changed) {
                  // In full-view mode, refresh cached resources automatically
                  // so the user sees the updated content without reloading.
                  return loadZip(effectiveZipUrl, {
                    force: true,
                    autoOpen: true,
                    preferredIndexPath: currentIndexPath || ''
                  }).then(function () {
                    return { siteId: result.siteId, siteUrl: siteUrl, updateAvailable: true };
                  });
                }
                UI.setProgress(100);
                window.location.assign(siteUrl);
                return { siteId: result.siteId, siteUrl: siteUrl };
              });
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

          var allowDownload = isDownloadAllowedByRestrictions(restrictions);
          var preparedDocs = prepareDocumentOnlyZip(files, result.siteId, opts.preferredIndexPath || '', allowDownload);
          files = preparedDocs.files;

          if (!files.length) {
            throw new Error(t('error.zipNoWebFiles'));
          }
          if (autoOpen || showProgress) {
            UI.stopProgress();
            UI.setProgress(100);
          }

          var paths = files.map(function (file) { return file.path; });
          return pickIndexPath(paths, preparedDocs.preferredIndexPath || opts.preferredIndexPath || '').then(function (indexPath) {
            currentIndexPath = indexPath || '';
            refreshShareLink(effectiveZipUrl, currentIndexPath);
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
                return getRemoteMetaPromise().then(function (remoteSignature) {
                  var storedSignature = (result.site && result.site.remoteMeta) ? result.site.remoteMeta : null;
                  var mergedSignature = mergeMetaSignature(storedSignature, remoteSignature);
                  var changed = storedSignature ? isMetaChanged(storedSignature, remoteSignature) : false;
                  var forcedUpdate = !!(opts.force && result.cached);
                  // Only mark as "updated" when there was an actual update (or we already knew an update
                  // was available). Otherwise manual refreshes would incorrectly show a green update date.
                  var shouldMarkUpdated = forcedUpdate && !!((result.site && result.site.updateAvailable) || changed);
                  var updatedFromRemoteAt = shouldMarkUpdated
                    ? Date.now()
                    : (result.site && result.site.updatedFromRemoteAt ? result.site.updatedFromRemoteAt : null);
                  // Preserve the original "saved" date in the Manager. The update date is already shown
                  // separately via `updatedFromRemoteAt` (green badge).
                  var firstSavedAt = (result.site && result.site.updatedAt) ? result.site.updatedAt : Date.now();
                  var site = {
                    id: result.siteId,
                    url: effectiveZipUrl,
                    indexPath: indexPath,
                    updatedAt: firstSavedAt,
                    fileCount: files.length,
                    totalBytes: totalBytes,
                    title: siteTitle,
                    restrictions: restrictions || null,
                    remoteMeta: mergedSignature,
                    updateAvailable: false,
                    updatedFromRemoteAt: updatedFromRemoteAt
                  };
                  return Storage.saveSite(site).then(function () {
                    return Storage.saveFiles(files).then(function () {
                      var siteUrl = buildSiteUrl(result.siteId, indexPath);
                      return controlPromise.then(function () {
                        currentRestrictions = restrictions || null;
                        RestrictionUI.applyRestrictionsToActions(currentRestrictions);
                        hideUpdateBanner();
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
        });
      })
      .then(function () {
        UI.setStatus(currentShareLink);
      })
      .catch(function (err) {
        var message = formatUserError(err, effectiveZipUrl);
        if (opts.embed) {
          Share.setShareLink('');
          currentIndexPath = '';
          showEmbedFallback(effectiveZipUrl, message);
          return;
        }
        Share.setShareLink('');
        currentIndexPath = '';
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


  if (copyButton) {
    copyButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      Share.copyText(currentShareLink);
    });
  }
  if (updateActionButton) {
    updateActionButton.addEventListener('click', function () {
      var zipUrl = updateActionButton.getAttribute('data-zip-url') || currentZipUrl || '';
      var indexPath = updateActionButton.getAttribute('data-index-path') || '';
      if (!zipUrl) return;
      hideUpdateBanner();
      loadZip(zipUrl, { force: true, autoOpen: false, preferredIndexPath: indexPath });
    });
  }
  if (updateDismissButton) {
    updateDismissButton.addEventListener('click', function () {
      hideUpdateBanner();
    });
  }

  function openQrWindow(shareLink) {
    if (!shareLink) return;
    var target = 'qr.html#' + encodeURIComponent(shareLink);
    var w = null;
    try {
      // Best-effort "new window" (popup). Browsers/user settings may still open a new tab,
      // especially on mobile.
      var width = 560;
      var height = 720;
      var left = 0;
      var top = 0;
      try {
        left = Math.max(0, Math.round((window.screenX || 0) + ((window.outerWidth || width) - width) / 2));
        top = Math.max(0, Math.round((window.screenY || 0) + ((window.outerHeight || height) - height) / 2));
      } catch (e) {}
      var features = [
        'popup=yes',
        'width=' + width,
        'height=' + height,
        'left=' + left,
        'top=' + top,
        'resizable=yes',
        'scrollbars=yes',
        'toolbar=no',
        'menubar=no',
        'location=no',
        'status=no'
      ].join(',');
      w = window.open(target, 'vwz-qr', features);
      if (!w) {
        // Fallback (popup blocked): open a new tab.
        w = window.open(target, '_blank');
      }
    } catch (e) {
      w = null;
    }
    try {
      if (w) w.opener = null;
    } catch (e) {}
  }

  if (qrButton) {
    qrButton.addEventListener('click', function () {
      if (!currentShareLink) {
        return;
      }
      openQrWindow(currentShareLink);
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
  if (updateCheckModal) {
    if (updateCheckCloseButtons && updateCheckCloseButtons.length) {
      updateCheckCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          closeUpdateCheckModal();
        });
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !updateCheckModal.hasAttribute('hidden')) {
        closeUpdateCheckModal();
      }
    });
  }

  if (embedCopyButton) {
    embedCopyButton.addEventListener('click', function () {
      if (!embedCode || !embedCode.value) {
        return;
      }
      Share.copyText(embedCode.value, embedCopyButton);
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

  if (resourceTitleInput) {
    resourceTitleInput.addEventListener('input', function () {
      resourceTitleDirty = true;
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
      if (!restrictionToggle.checked) {
        restrictionZipFile = null;
        if (restrictionZipInput) {
          restrictionZipInput.value = '';
        }
      }
      updateRestrictZipAccordionState();
    });
  }
  if (restrictionNoEnd) {
    restrictionNoEnd.addEventListener('change', function () {
      RestrictionUI.applyRestrictionUiState();
    });
  }
  if (restrictionLiveEnd) {
    restrictionLiveEnd.addEventListener('change', function () {
      RestrictionUI.applyRestrictionUiState();
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionWarningMinutes) {
    restrictionWarningMinutes.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionWarningMessage) {
    restrictionWarningMessage.addEventListener('input', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionStartInput) {
    restrictionStartInput.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
    restrictionStartInput.addEventListener('input', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionEndInput) {
    var isFirefoxBrowser = typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent || '');
    var ensureFirefoxEndHasTime = function () {
      if (!isFirefoxBrowser) return;
      if (restrictionNoEnd && restrictionNoEnd.checked) return;
      var currentValue = restrictionEndInput.value ? String(restrictionEndInput.value).trim() : '';
      var normalizedCurrent = Restrictions.normalizeDateTimeValue(currentValue, { endOfDay: true });
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(normalizedCurrent)) {
        if (!currentValue || /--\s*:\s*--/.test(currentValue) || /^\d{4}-\d{2}-\d{2}$/.test(currentValue) || /^\d{4}-\d{2}-\d{2}T$/.test(currentValue)) {
          restrictionEndInput.value = normalizedCurrent;
        }
        return;
      }
      var startValue = restrictionStartInput && restrictionStartInput.value ? restrictionStartInput.value : '';
      var normalizedStart = Restrictions.normalizeDateTimeValue(startValue);
      var dayMatch = normalizedStart.match(/^(\d{4}-\d{2}-\d{2})/);
      var baseDay = dayMatch ? dayMatch[1] : formatLocalDateTime(new Date()).slice(0, 10);
      restrictionEndInput.value = baseDay + 'T23:59';
    };
    var maybeAutofillRestrictionEndTime = function () {
      var raw = restrictionEndInput.value ? String(restrictionEndInput.value).trim() : '';
      if (!raw) return;
      var missingTime = /^\d{4}-\d{2}-\d{2}$/.test(raw)
        || /^\d{4}-\d{2}-\d{2}T$/.test(raw)
        || /--\s*:\s*--/.test(raw);
      if (!missingTime) return;
      var normalized = Restrictions.normalizeDateTimeValue(raw, { endOfDay: true });
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(normalized)) {
        restrictionEndInput.value = normalized;
      }
    };
    var refreshRestrictionEndSummary = function () {
      maybeAutofillRestrictionEndTime();
      RestrictionUI.updateRestrictionSummary();
    };
    restrictionEndInput.addEventListener('change', refreshRestrictionEndSummary);
    restrictionEndInput.addEventListener('input', refreshRestrictionEndSummary);
    restrictionEndInput.addEventListener('blur', refreshRestrictionEndSummary);
    restrictionEndInput.addEventListener('focus', function () {
      ensureFirefoxEndHasTime();
      RestrictionUI.updateRestrictionSummary();
    });
    restrictionEndInput.addEventListener('mousedown', function () {
      ensureFirefoxEndHasTime();
    });
    restrictionEndInput.addEventListener('click', function () {
      setTimeout(refreshRestrictionEndSummary, 0);
    });
  }
  if (restrictionAllowShare) {
    restrictionAllowShare.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionAllowEmbed) {
    restrictionAllowEmbed.addEventListener('change', function () {
      RestrictionUI.updateRestrictionSummary();
    });
  }
  if (restrictionAllowDownload) {
    restrictionAllowDownload.addEventListener('change', function () {
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
      updateRestrictZipAccordionState();
    });
  }
  if (restrictionZipApply) {
    restrictionZipApply.addEventListener('click', function () {
      applyRestrictionsToZipFile(restrictionZipFile);
    });
  }
  if (restrictionZipEnable) {
    restrictionZipEnable.addEventListener('click', function () {
      openMainSettingsModal();
      // After opening, move focus to the toggle to make the next action obvious.
      setTimeout(function () {
        try {
          if (restrictionToggle && restrictionToggle.focus) restrictionToggle.focus();
        } catch (e) {}
      }, 0);
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
  var shortParam = params.get('key') || params.get('short') || params.get('s');
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
  updateRestrictZipAccordionState();
  var goTabButtons = document.querySelectorAll('[data-go-tab]');
  if (goTabButtons.length) {
    goTabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-go-tab');
        if (target) {
          if (target === 'main' || target === 'zipper') {
            Nav.setActiveTab('publish');
            Nav.setPublishModule(target);
          } else {
            Nav.setActiveTab(target);
          }
        }
      });
    });
  }
  if (publishStartButtons.length) {
    publishStartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-publish-start');
        Nav.setActiveTab('publish');
        Nav.setPublishModule(target);
      });
    });
  }
  var goPublishButtons = document.querySelectorAll('[data-go-publish]');
  if (goPublishButtons.length) {
    goPublishButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = button.getAttribute('data-go-publish');
        Nav.setActiveTab('publish');
        Nav.setPublishModule(target);
      });
    });
  }
  if (tabButtons.length && tabPanels.length) {
    var tabButtonList = Array.prototype.slice.call(tabButtons);
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var tab = button.getAttribute('data-tab');
        Nav.setActiveTab(tab);
        if (tab === 'publish') {
          Nav.setPublishModule('');
        }
      });
      button.addEventListener('keydown', function (event) {
        var key = event.key;
        if (key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Home' && key !== 'End') return;
        event.preventDefault();
        if (!tabButtonList.length) return;
        var currentIndex = tabButtonList.indexOf(button);
        if (currentIndex < 0) currentIndex = 0;
        var nextIndex = currentIndex;
        if (key === 'Home') nextIndex = 0;
        if (key === 'End') nextIndex = tabButtonList.length - 1;
        if (key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabButtonList.length) % tabButtonList.length;
        if (key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabButtonList.length;
        var nextButton = tabButtonList[nextIndex];
        if (!nextButton) return;
        var tab = nextButton.getAttribute('data-tab');
        Nav.setActiveTab(tab);
        if (tab === 'publish') {
          Nav.setPublishModule('');
        }
        nextButton.focus();
      });
    });
    Nav.setActiveTab('publish');
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
        buildShareLinkAsync(zipUrl, true, indexPath || '').then(function (shareLink) {
          Share.copyText(shareLink, button);
        }).catch(function () {
          Share.copyText(buildShareLink(zipUrl, true, indexPath || ''), button);
        });
        return;
      }
      if (action === 'qr' && zipUrl) {
        buildShareLinkAsync(zipUrl, true, indexPath || '').then(function (shareLink) {
          openQrWindow(shareLink);
        }).catch(function () {
          openQrWindow(buildShareLink(zipUrl, true, indexPath || ''));
        });
        return;
      }
      if (action === 'embed' && zipUrl) {
        Share.copyText(buildEmbedSnippet(zipUrl, indexPath || ''), button);
        return;
      }
      if (action === 'download' && zipUrl) {
        var downloadUrl = normalizeZipUrl(zipUrl);
        window.open(downloadUrl, '_blank');
        return;
      }
      if (action === 'update' && zipUrl) {
        button.classList.add('is-updating');
        button.disabled = true;
        UI.showInlineToast(button, t('manager.actions.updating'));
        Promise.resolve(loadZip(zipUrl, {
          force: true,
          autoOpen: false,
          showProgress: false,
          fromManager: true,
          preferredIndexPath: indexPath || ''
        })).then(function () {
          UI.showInlineToast(button, t('manager.actions.updated'));
        }).catch(function (err) {
          UI.showInlineToast(button, (err && err.userMessage) || t('errors.loadZip'));
        }).finally(function () {
          if (document.body.contains(button)) {
            button.classList.remove('is-updating');
            button.disabled = false;
          }
        });
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
  if (managerCheckUpdatesButton) {
    managerCheckUpdatesButton.addEventListener('click', function () {
      checkUpdatesForAllSites();
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
  if (aboutOpen && aboutModal) {
    var aboutDialog = aboutModal.querySelector('[role="dialog"]') || aboutModal;
    var aboutLastFocus = null;

    function getFocusableElements(container) {
      if (!container) return [];
      return Array.prototype.slice.call(container.querySelectorAll(
        'a[href],button:not([disabled]),textarea:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'
      )).filter(function (el) {
        return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
      });
    }

    function closeAboutModal() {
      if (aboutModal.hasAttribute('hidden')) return;
      aboutModal.setAttribute('hidden', '');
      if (aboutLastFocus && aboutLastFocus.focus) {
        try { aboutLastFocus.focus(); } catch (e) { /* ignore */ }
      }
      aboutLastFocus = null;
    }

    function openAboutModal() {
      aboutLastFocus = document.activeElement;
      aboutModal.removeAttribute('hidden');
      var title = aboutModal.querySelector('#about-title');
      if (title && title.focus) {
        try { title.focus(); } catch (e) { /* ignore */ }
      }
    }

    aboutOpen.addEventListener('click', function () {
      openAboutModal();
    });

    aboutCloseButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        closeAboutModal();
      });
    });

    aboutModal.addEventListener('keydown', function (event) {
      if (aboutModal.hasAttribute('hidden')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeAboutModal();
        return;
      }
      if (event.key !== 'Tab') return;

      var focusables = getFocusableElements(aboutDialog);
      if (!focusables.length) return;

      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      var active = document.activeElement;

      if (!aboutDialog.contains(active)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (event.shiftKey) {
        if (active === first) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last) {
        event.preventDefault();
        first.focus();
      }
    });

    // Internal navigation inside the help dialog, without changing the URL hash.
    aboutModal.addEventListener('click', function (event) {
      var link = event.target && event.target.closest ? event.target.closest('[data-help-nav] a[href^="#"]') : null;
      if (!link) return;
      var href = link.getAttribute('href') || '';
      var id = href.slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      try { target.scrollIntoView({ block: 'start', behavior: 'smooth' }); } catch (e) { target.scrollIntoView(true); }
      if (target.focus) {
        try { target.focus(); } catch (e) { /* ignore */ }
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
        Share.copyText(reactPrompt.value, reactCopyButton);
      });
    }
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeReactPromptModal();
      }
    });
  }
  function startFromUrl(resolvedUrl) {
    if (input) {
      input.value = resolvedUrl;
    }
    var entryParam = params.get('entry') || params.get('index') || params.get('path') || '';
    var viewParam = (params.get('view') || '').toLowerCase();
    var embedParam = (params.get('embed') || '').toLowerCase();
    var forceParam = (params.get('force') || params.get('update') || params.get('refresh') || '').toLowerCase();
    var embedActive = embedParam === '1' || embedParam === 'true' || embedParam === 'yes';
    var autoOpen = viewParam === 'full' || viewParam === '1';
    var force = forceParam === '1' || forceParam === 'true' || forceParam === 'yes';
    if (embedActive) {
      var embedIdParam = params.get('embedId') || '';
      setEmbedMode(true, embedIdParam);
      loadZip(resolvedUrl, { force: force, autoOpen: false, embed: true, embedId: embedIdParam, preferredIndexPath: entryParam });
    } else {
      setEmbedMode(false, '');
      Nav.setActiveTab('publish');
      Nav.setPublishModule('main');
      loadZip(resolvedUrl, { force: force, autoOpen: autoOpen, preferredIndexPath: entryParam });
    }
  }

  Manager.cleanupOldSites();
  Manager.refreshManager();
  refreshFooterVersion();
  if (!urlParam && shortParam) {
    UI.setLoading(true);
    resolveShortToken(shortParam).then(function (resolvedUrl) {
      startFromUrl(resolvedUrl);
    }).catch(function (err) {
      UI.setLoading(false);
      UI.setStatus(formatUserError(err));
    });
  } else if (urlParam) {
    startFromUrl(urlParam);
  } else {
    setEmbedMode(false, '');
    Nav.setPublishModule('');
    UI.setLoading(false);
  }

  window.addEventListener('pageshow', function (event) {
    if (event.persisted && Manager && Manager.refreshManager) {
      Manager.refreshManager();
    }
  });
})();
