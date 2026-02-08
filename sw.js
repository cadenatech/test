var DB_NAME = 'visor-web-sites';
var DB_VERSION = 1;
var STORE_SITES = 'sites';
var STORE_FILES = 'files';
var dbPromise = null;

function openDb() {
  if (dbPromise) {
    return dbPromise;
  }
  dbPromise = new Promise(function (resolve, reject) {
    var request = indexedDB.open(DB_NAME, DB_VERSION);
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
  return dbPromise;
}

function getSite(siteId) {
  return openDb().then(function (db) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(STORE_SITES, 'readonly');
      var store = tx.objectStore(STORE_SITES);
      var request = store.get(siteId);
      request.onsuccess = function () {
        resolve(request.result || null);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });
  });
}

function getFile(siteId, path) {
  var key = siteId + '::' + path;
  return openDb().then(function (db) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(STORE_FILES, 'readonly');
      var store = tx.objectStore(STORE_FILES);
      var request = store.get(key);
      request.onsuccess = function () {
        resolve(request.result || null);
      };
      request.onerror = function () {
        reject(request.error);
      };
    });
  });
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

self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') {
    return;
  }
  var url = new URL(event.request.url);
  var scopePath = new URL(self.registration.scope).pathname;
  var prefix = scopePath + 'site/';
  if (!url.pathname.startsWith(prefix)) {
    return;
  }
  event.respondWith(handleSiteRequest(url, scopePath));
});

function handleSiteRequest(url, scopePath) {
  var relative = url.pathname.slice(scopePath.length);
  var parts = relative.split('/');
  if (parts[0] !== 'site' || !parts[1]) {
    return fetch(url);
  }
  var siteId = parts[1];
  var path = parts.slice(2).join('/');
  if (!path || path.endsWith('/')) {
    path = '';
  }
  return getSite(siteId).then(function (site) {
    var resolvedPath = path;
    if (!resolvedPath) {
      resolvedPath = site && site.indexPath ? site.indexPath : 'index.html';
    }
    return getFile(siteId, decodeURIComponent(resolvedPath)).then(function (record) {
      if (!record || !record.blob) {
        return new Response('Not cached', { status: 404 });
      }
      var type = record.type || guessMimeType(resolvedPath);
      if (type && type.indexOf('text/html') === 0) {
        return injectOverlayResponse(record.blob, {
          siteId: siteId,
          updateAvailable: !!(site && site.updateAvailable)
        });
      }
      return new Response(record.blob, {
        status: 200,
        headers: { 'Content-Type': type }
      });
    });
  });
}

function injectOverlayResponse(blob, payload) {
  return blob.text().then(function (html) {
    var siteId = payload && payload.siteId ? String(payload.siteId) : '';
    var updateFlag = payload && payload.updateAvailable ? '1' : '0';
    var overlay = [
      '<div id="vwz-update-overlay" data-site-id="', siteId, '" data-update-available="', updateFlag, '" class="vwz-update-overlay">',
      '<div class="vwz-update-card" role="dialog" aria-live="polite" aria-label="Actualización disponible">',
      '<div class="vwz-update-title">Nueva versión disponible</div>',
      '<div class="vwz-update-body">Este recurso ha cambiado en la nube. ¿Quieres actualizarlo?</div>',
      '<div class="vwz-update-actions">',
      '<button type="button" class="vwz-update-btn" data-vwz-update>Actualizar</button>',
      '<button type="button" class="vwz-update-btn vwz-update-btn--ghost" data-vwz-dismiss>Ahora no</button>',
      '</div>',
      '</div>',
      '</div>',
      '<style>',
      '.vwz-update-overlay{position:fixed;right:16px;bottom:16px;z-index:2147483647;display:none;max-width:320px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}',
      '.vwz-update-overlay.vwz-show{display:block;}',
      '.vwz-update-card{background:rgba(17,24,39,0.72);color:#fff;border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:12px 14px;backdrop-filter:blur(8px);box-shadow:0 10px 24px rgba(0,0,0,0.28);}',
      '.vwz-update-title{font-weight:600;font-size:0.95rem;margin-bottom:4px;}',
      '.vwz-update-body{font-size:0.86rem;line-height:1.35;margin-bottom:10px;color:rgba(255,255,255,0.9);}',
      '.vwz-update-actions{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;}',
      '.vwz-update-btn{appearance:none;border:0;border-radius:999px;padding:6px 12px;font-size:0.82rem;font-weight:600;cursor:pointer;background:#f59e0b;color:#1f2937;}',
      '.vwz-update-btn--ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.35);}',
      '@media (max-width:640px){.vwz-update-overlay{left:16px;right:16px;bottom:12px;max-width:none;}}',
      '</style>',
      '<script>(function(){',
      'var overlay=document.getElementById("vwz-update-overlay");if(!overlay)return;',
      'var btnUpdate=overlay.querySelector("[data-vwz-update]");',
      'var btnDismiss=overlay.querySelector("[data-vwz-dismiss]");',
      'function normalizeLang(l){if(!l)return "es";l=(String(l).toLowerCase()).split(/[-_]/)[0];return ["es","ca","gl","eu","en","de"].indexOf(l)!==-1?l:"es";}',
      'var strings={',
      'es:{t:"Nueva version disponible",b:"Este recurso ha cambiado en la nube. Quieres actualizarlo?",u:"Actualizar",d:"Ahora no"},',
      'ca:{t:"Nova versio disponible",b:"Aquest recurs ha canviat al nuvol. Vols actualitzar-lo?",u:"Actualitzar",d:"Ara no"},',
      'gl:{t:"Nova version dispoñible",b:"Este recurso cambiou na nube. Queres actualizalo?",u:"Actualizar",d:"Agora non"},',
      'eu:{t:"Bertsio berria eskuragarri",b:"Baliabidea hodeian aldatu da. Eguneratu nahi duzu?",u:"Eguneratu",d:"Orain ez"},',
      'en:{t:"New version available",b:"This resource changed in the cloud. Update now?",u:"Update",d:"Not now"},',
      'de:{t:"Neue Version verfugbar",b:"Diese Ressource hat sich in der Cloud geandert. Jetzt aktualisieren?",u:"Aktualisieren",d:"Jetzt nicht"}',
      '};',
      'var lang=normalizeLang((function(){try{return localStorage.getItem("visor-lang");}catch(e){return null;}})()||navigator.language||"es");',
      'var s=strings[lang]||strings.es;',
      'var titleEl=overlay.querySelector(".vwz-update-title");var bodyEl=overlay.querySelector(".vwz-update-body");',
      'if(titleEl)titleEl.textContent=s.t;if(bodyEl)bodyEl.textContent=s.b;',
      'if(btnUpdate)btnUpdate.textContent=s.u;if(btnDismiss)btnDismiss.textContent=s.d;',
      'function show(){overlay.classList.add("vwz-show");}',
      'function hide(){overlay.classList.remove("vwz-show");}',
      'if(overlay.getAttribute("data-update-available")==="1"){show();}',
      'function getBasePath(){var p=location.pathname;var idx=p.indexOf("/site/");if(idx!==-1){return p.slice(0,idx+1);}return "/";}',
      'function fetchConfig(){var url=getBasePath()+"config.js";return fetch(url,{cache:"no-store"}).then(function(r){return r.ok?r.text():"";}).then(function(text){var m=text.match(/GAS_WEBAPP_URL\\s*=\\s*[\"\\\']([^\"\\\']+)[\"\\\']/);return m?m[1]:"";}).catch(function(){return "";});}',
      'function openDb(){return new Promise(function(resolve,reject){var req=indexedDB.open("visor-web-sites",1);req.onupgradeneeded=function(){var db=req.result;if(!db.objectStoreNames.contains("sites")){db.createObjectStore("sites",{keyPath:"id"});}if(!db.objectStoreNames.contains("files")){var store=db.createObjectStore("files",{keyPath:"key"});store.createIndex("siteId","siteId",{unique:false});}};req.onsuccess=function(){resolve(req.result);};req.onerror=function(){reject(req.error);};});}',
      'function getSite(id){return openDb().then(function(db){return new Promise(function(resolve,reject){var tx=db.transaction("sites","readonly");var store=tx.objectStore("sites");var req=store.get(id);req.onsuccess=function(){resolve(req.result||null);};req.onerror=function(){reject(req.error);};});});}',
      'function saveSite(site){return openDb().then(function(db){return new Promise(function(resolve,reject){var tx=db.transaction("sites","readwrite");var store=tx.objectStore("sites");var req=store.put(site);req.onsuccess=function(){resolve();};req.onerror=function(){reject(req.error);};});});}',
      'function normalizeMeta(meta){if(!meta)return null;var s={};if(meta.size)s.size=meta.size;if(meta.etag)s.etag=meta.etag;if(meta.lastModified)s.lastModified=meta.lastModified;return Object.keys(s).length?s:null;}',
      'function mergeMeta(a,b){var s={};if(a){if(a.size)s.size=a.size;if(a.etag)s.etag=a.etag;if(a.lastModified)s.lastModified=a.lastModified;}if(b){if(b.size)s.size=b.size;if(b.etag)s.etag=b.etag;if(b.lastModified)s.lastModified=b.lastModified;}return Object.keys(s).length?s:null;}',
      'function isChanged(a,b){if(!a||!b)return false;var comparable=false;if(a.etag&&b.etag){comparable=true;if(a.etag!==b.etag)return true;}if(a.lastModified&&b.lastModified){comparable=true;if(a.lastModified!==b.lastModified)return true;}if(a.size&&b.size){comparable=true;if(a.size!==b.size)return true;}return comparable?false:false;}',
      'var checking=false;',
      'function check(){if(checking)return;checking=true;Promise.all([fetchConfig(),getSite(overlay.getAttribute("data-site-id"))]).then(function(res){var gasUrl=res[0];var site=res[1];if(!gasUrl||!site||!site.url){return;}var endpoint=gasUrl+"?url="+encodeURIComponent(site.url)+"&bundle=1&meta=1";return fetch(endpoint).then(function(r){return r.ok?r.json():null;}).then(function(data){if(!data||data.error){return;}var remote=normalizeMeta(data);if(!remote){return;}var stored=site.remoteMeta||null;var merged=mergeMeta(stored,remote);var changed=stored?isChanged(stored,remote):false;site.remoteMeta=merged;site.updateAvailable=changed;return saveSite(site).then(function(){if(changed){show();}});});}).catch(function(){}).finally(function(){checking=false;});}',
      'setTimeout(check,1200);',
      'if("requestIdleCallback" in window){try{requestIdleCallback(check,{timeout:4000});}catch(e){}}',
      'if(btnDismiss){btnDismiss.addEventListener("click",function(){hide();});}',
      'if(btnUpdate){btnUpdate.addEventListener("click",function(){hide();getSite(overlay.getAttribute("data-site-id")).then(function(site){if(!site||!site.url)return;var base=getBasePath();var target=base+"?url="+encodeURIComponent(site.url)+"&view=full&force=1";if(site.indexPath){target+="&entry="+encodeURIComponent(site.indexPath);}location.assign(target);});});}',
      '})();</script>'
    ].join('');
    if (html.indexOf('</body>') !== -1) {
      html = html.replace('</body>', overlay + '</body>');
    } else {
      html += overlay;
    }
    return new Response(new Blob([html], { type: 'text/html' }), {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  });
}
