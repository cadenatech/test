(function () {
  var UI = window.UI || {};
  var t = function (key) { return key; };
  var modal = null;
  var list = null;
  var confirmButton = null;
  var closeButtons = [];
  var resolveFn = null;
  var rejectFn = null;
  var wasLoading = false;

  function init(options) {
    options = options || {};
    modal = options.modal || null;
    list = options.list || null;
    confirmButton = options.confirmButton || null;
    closeButtons = options.closeButtons || [];
    if (options.t) t = options.t;
    if (options.ui) UI = options.ui;
    if (confirmButton) {
      confirmButton.addEventListener('click', confirm);
    }
    if (closeButtons && closeButtons.length) {
      closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          close();
        });
      });
    }
  }

  function close(message) {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    if (list) {
      list.innerHTML = '';
    }
    if (rejectFn) {
      var reject = rejectFn;
      resolveFn = null;
      rejectFn = null;
      reject(new Error(message || t('error.noHtmlSelected')));
    }
  }

  function confirm() {
    if (!list || !resolveFn) return;
    var choice = list.querySelector('input[name="html-choice"]:checked');
    if (!choice) {
      return;
    }
    var resolve = resolveFn;
    resolveFn = null;
    rejectFn = null;
    if (modal) {
      modal.setAttribute('hidden', '');
    }
    list.innerHTML = '';
    resolve(choice.value);
  }

  function open(htmlPaths, preferred) {
    if (!modal || !list || !confirmButton) {
      return Promise.reject(new Error(t('error.htmlPickerOpen')));
    }
    return new Promise(function (resolve, reject) {
      resolveFn = resolve;
      rejectFn = reject;
      if (UI.isLoading && UI.isLoading()) {
        wasLoading = true;
        UI.setLoading(false);
      }
      list.innerHTML = '';
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
        list.appendChild(label);
      });
      modal.removeAttribute('hidden');
    });
  }

  function consumeWasLoading() {
    var value = wasLoading;
    wasLoading = false;
    return value;
  }

  window.HtmlPicker = {
    init: init,
    open: open,
    close: close,
    confirm: confirm,
    consumeWasLoading: consumeWasLoading
  };
})();
