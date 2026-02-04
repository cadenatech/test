(function () {
  function normalizeDateTimeValue(value) {
    if (!value) return '';
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return value + 'T00:00';
    }
    if (/^\d{4}-\d{2}-\d{2}T$/.test(value)) {
      return value + '00:00';
    }
    return value;
  }

  function formatRestrictionDate(value, lang) {
    if (!value) return '';
    var date = new Date(value);
    if (isNaN(date.getTime())) return '';
    try {
      return date.toLocaleString(lang || 'es');
    } catch (e) {
      return date.toISOString();
    }
  }

  function formatCountdown(ms) {
    var totalSeconds = Math.max(0, Math.ceil(ms / 1000));
    var days = Math.floor(totalSeconds / 86400);
    var remainder = totalSeconds % 86400;
    var hours = Math.floor(remainder / 3600);
    var minutes = Math.floor((remainder % 3600) / 60);
    var seconds = remainder % 60;
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var time = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    return days > 0 ? (days + 'd ' + time) : time;
  }

  function isRestrictionActive(restrictions) {
    return restrictions && restrictions.enabled;
  }

  function isRestrictionAllowedNow(restrictions) {
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
  }

  function isRestrictionExpired(restrictions) {
    if (!restrictions || !restrictions.enabled) return false;
    if (restrictions.neverExpires) return false;
    if (!restrictions.endAt) return false;
    var end = Date.parse(restrictions.endAt);
    if (isNaN(end)) return false;
    return Date.now() > end;
  }

  function isRestrictionBeforeStart(restrictions) {
    if (!restrictions || !restrictions.enabled) return false;
    if (!restrictions.startAt) return false;
    var start = Date.parse(restrictions.startAt);
    if (isNaN(start)) return false;
    return Date.now() < start;
  }

  function allowShare(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowShare;
  }

  function allowEmbed(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowEmbed;
  }

  function allowDownload(restrictions) {
    if (!restrictions || !restrictions.enabled) return true;
    return !!restrictions.allowDownload;
  }

  function extractRestrictions(entries, decodeUtf8) {
    if (!entries || !entries['restrictions.json']) return null;
    try {
      var raw = decodeUtf8(entries['restrictions.json']);
      var data = JSON.parse(raw || '{}');
      if (!data || !data.enabled) return null;
      return data;
    } catch (e) {
      return null;
    }
  }

  window.Restrictions = {
    normalizeDateTimeValue: normalizeDateTimeValue,
    formatRestrictionDate: formatRestrictionDate,
    formatCountdown: formatCountdown,
    isRestrictionActive: isRestrictionActive,
    isRestrictionAllowedNow: isRestrictionAllowedNow,
    isRestrictionExpired: isRestrictionExpired,
    isRestrictionBeforeStart: isRestrictionBeforeStart,
    allowShare: allowShare,
    allowEmbed: allowEmbed,
    allowDownload: allowDownload,
    extractRestrictions: extractRestrictions
  };
})();
