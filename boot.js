(function () {
  function status(message) {
    var el = document.getElementById('startupStatus');
    if (el) { el.firstChild.nodeValue = 'LocalPulse 16 · ' + message + ' '; }
  }
  window.localPulseStartup = status;
  window.addEventListener('error', function (event) {
    if (event.message) status('Startup error: ' + event.message);
    else if (event.target && event.target.tagName === 'SCRIPT') status('Script failed to load. Use Reload or open in Chrome.');
  }, true);
  document.getElementById('resetTouchControls').addEventListener('click', function () {
    document.querySelectorAll('dialog[open]').forEach(function (dialog) { dialog.close(); });
    ['messageModalOverlay', 'drawerOverlay'].forEach(function (id) {
      var el=document.getElementById(id); if(el){el.classList.add('hidden','opacity-0');}
    });
    document.querySelectorAll('[inert]').forEach(function (el) { el.removeAttribute('inert'); });
    status('Controls reset. Tap List or any filter.');
  });
  document.addEventListener('pointerdown', function (event) {
    var el=event.target.closest('button,a,input,select')||event.target;
    if(el.closest('#startupStatus'))return;
    status('Touch received: '+(el.id||el.getAttribute('aria-label')||el.tagName));
  }, true);
  document.addEventListener('click', function (event) {
    var el=event.target.closest('button,a,input,select')||event.target;
    if(el.closest('#startupStatus'))return;
    setTimeout(function () {status('Tap received: '+(el.id||el.tagName));},0);
  }, true);
  status('JavaScript running · Loading controls…');
  setTimeout(function () {
    if (document.documentElement.dataset.appReady !== 'true') status('Controls did not finish starting. Open this link in Chrome.');
  }, 12000);
}());
