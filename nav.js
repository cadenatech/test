(function () {
  var navCtx = {};
  var Manager = window.Manager || {};

  function init(options) {
    options = options || {};
    navCtx = options.context || {};
    if (options.manager) Manager = options.manager;
  }

  function get(key) {
    return navCtx && key in navCtx ? navCtx[key] : null;
  }

  function setActiveTab(name) {
    document.body.setAttribute('data-active-tab', name);
    if (get('tabButtons')) {
      get('tabButtons').forEach(function (button) {
        var isActive = button.getAttribute('data-tab') === name;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }
    if (get('tabPanels')) {
      get('tabPanels').forEach(function (panel) {
        var isActive = panel.getAttribute('data-tab-panel') === name;
        panel.classList.toggle('is-active', isActive);
      });
    }
    if (name === 'manager' && Manager.refreshManager) {
      Manager.refreshManager();
    }
  }

  function setPublishModule(name) {
    if (!get('publishChoice') || !get('publishModules') || !get('publishModules').length) return;
    var activeName = name || '';
    if (get('setActivePublishModule')) {
      get('setActivePublishModule')(activeName);
    }
    if (activeName) {
      get('publishChoice').setAttribute('hidden', '');
    } else {
      get('publishChoice').removeAttribute('hidden');
    }
    get('publishModules').forEach(function (moduleEl) {
      var isActive = moduleEl.getAttribute('data-publish-module') === activeName;
      if (isActive) {
        moduleEl.removeAttribute('hidden');
      } else {
        moduleEl.setAttribute('hidden', '');
      }
    });
  }

  window.Nav = {
    init: init,
    setActiveTab: setActiveTab,
    setPublishModule: setPublishModule
  };
})();
