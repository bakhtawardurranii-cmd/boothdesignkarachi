document.addEventListener('DOMContentLoaded', function () {
  fetch('/assets/data/business.json')
    .then(function (r) { return r.json(); })
    .then(function (biz) {
      document.querySelectorAll('[data-biz]').forEach(function (el) {
        var path = el.getAttribute('data-biz').split('.');
        var val = biz;
        for (var i = 0; i < path.length; i++) {
          if (val == null) break;
          val = val[path[i]];
        }
        if (val == null) return;
        if (el.tagName === 'A') {
          if (el.hasAttribute('data-biz-href')) {
            el.setAttribute('href', val);
          }
          if (!el.hasAttribute('data-biz-href-only')) {
            el.textContent = val;
          }
        } else {
          el.textContent = val;
        }
      });
      document.querySelectorAll('[data-biz-href]').forEach(function (el) {
        var key = el.getAttribute('data-biz-href').split('.');
        var val = biz;
        for (var i = 0; i < key.length; i++) {
          if (val == null) break;
          val = val[key[i]];
        }
        if (val != null) el.setAttribute('href', val);
      });
    })
    .catch(function () { /* fails silently, placeholders in HTML remain */ });
});
