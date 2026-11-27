(function () {
  var d = document.getElementById('drawer'), bg = document.getElementById('drawerBg'), b = document.getElementById('burger');
  function open() { d.hidden = false; requestAnimationFrame(function () { d.classList.add('open'); }); b.setAttribute('aria-expanded', 'true'); document.getElementById('drawerClose').focus(); }
  function close() { d.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); setTimeout(function () { if (!d.classList.contains('open')) d.hidden = true; }, 300); }
  b.addEventListener('click', open);
  document.getElementById('drawerClose').addEventListener('click', close);
  bg.addEventListener('click', close);
  d.addEventListener('click', function (e) { if (e.target.closest('nav a')) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && d.classList.contains('open')) { close(); b.focus(); } });
  var links = [].slice.call(document.querySelectorAll('.anchors a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + e.target.id;
          a.classList.toggle('on', on);
          if (on) { a.setAttribute('aria-current', 'true'); a.scrollIntoView({ block: 'nearest', inline: 'nearest' }); } else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) { var t = document.querySelector(a.getAttribute('href')); if (t) io.observe(t); });
  }
  var lf = document.getElementById('leadForm');
  if (lf) lf.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('ok').hidden = false; });
})();
