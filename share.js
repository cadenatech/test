(function () {
  var UI = window.UI || {};
  var Restrictions = window.Restrictions || {};
  var t = function (key) { return key; };
  var shareCtx = {};

  function init(options) {
    options = options || {};
    shareCtx = options.context || {};
    if (options.t) t = options.t;
    if (options.ui) UI = options.ui;
    if (options.restrictions) Restrictions = options.restrictions;
  }

  function get(key) {
    return shareCtx && key in shareCtx ? shareCtx[key] : null;
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
      shareCtx[key] = value;
    }
  }

  function setShareLink(link) {
    setValue('currentShareLink', link || '');
    var hasLink = !!getValue('currentShareLink');
    if (get('shareResultPanel')) {
      if (hasLink) {
        var panel = get('shareResultPanel');
        panel.removeAttribute('hidden');
        // Ensure the generated link section is always visible after creation.
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            try {
              panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } catch (e) {}
          });
        });
      } else {
        get('shareResultPanel').setAttribute('hidden', '');
      }
    }
    if (get('output')) {
      get('output').textContent = getValue('currentShareLink') || t('main.output.placeholder');
    }
    if (get('copyButton')) {
      // In the "share" step, the author must always be able to copy the generated link.
      // Restrictions are enforced when opening the link, not when distributing it.
      get('copyButton').disabled = !hasLink;
    }
    if (get('embedButton')) {
      // Same rationale as copy: embedding can be restricted at runtime, but the snippet should be obtainable.
      get('embedButton').disabled = !hasLink;
    }
    if (get('qrButton')) {
      get('qrButton').disabled = !hasLink;
    }
    if (get('openLink')) {
      get('openLink').href = getValue('currentShareLink') || '#';
      get('openLink').setAttribute('aria-disabled', hasLink ? 'false' : 'true');
      if (hasLink) {
        get('openLink').removeAttribute('tabindex');
      } else {
        get('openLink').setAttribute('tabindex', '-1');
      }
    }
    if (hasLink && get('stepThree') && !getValue('isEmbedMode')) {
      get('stepThree').setAttribute('tabindex', '-1');
      get('stepThree').focus();
    }
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

  window.Share = {
    init: init,
    setShareLink: setShareLink,
    copyText: copyText
  };
})();
