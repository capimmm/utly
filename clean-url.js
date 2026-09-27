// Restaura a URL limpa que foi salva pelo 404.html
(function restoreCleanUrl() {
  var cleanUrl = sessionStorage.getItem('clean_url');
  if (cleanUrl) {
    sessionStorage.removeItem('clean_url');
    window.history.replaceState(null, '', cleanUrl);
  }
})();
