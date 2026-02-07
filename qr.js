(function () {
  var root = document.querySelector('[data-qr-root]');
  if (!root) return;

  function getTextFromHash() {
    var raw = (window.location.hash || '').replace(/^#/, '');
    if (!raw) return '';
    try {
      return decodeURIComponent(raw);
    } catch (e) {
      return raw;
    }
  }

  function makeQr(text) {
    // Try "auto" first (supported by this library via typeNumber 0).
    var attempts = [0];
    for (var i = 1; i <= 40; i += 1) attempts.push(i);
    for (var j = 0; j < attempts.length; j += 1) {
      try {
        var qr = window.qrcode(attempts[j], 'M');
        qr.addData(text);
        qr.make();
        return qr;
      } catch (e) {
        // Keep trying with a larger typeNumber.
      }
    }
    throw new Error('QR generation failed');
  }

  var text = getTextFromHash();
  if (!text) {
    root.innerHTML = '<div class="msg">Falta el enlace para generar el QR.</div>';
    return;
  }

  try {
    var qr = makeQr(text);
    var svg = qr.createSvgTag({
      scalable: true,
      cellSize: 8,
      margin: 16,
      alt: 'QR del enlace',
      title: 'QR'
    });
    root.innerHTML = svg;
  } catch (e) {
    root.innerHTML = '<div class="msg">No se pudo generar el QR.</div>';
  }
})();

