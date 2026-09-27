/**
 * Remove a extensão .html da URL na barra de endereço sem recarregar a página.
 */
(function cleanUrl() {
  const path = window.location.pathname;

  if (path.endsWith('.html')) {
    // Tratamento para página inicial (ex: /index.html vira /)
    if (path.endsWith('/index.html')) {
      const newPath = path.replace(/\/index\.html$/, '/') + window.location.search + window.location.hash;
      window.history.replaceState(null, '', newPath);
      return;
    }

    // Tratamento para demais páginas (ex: /sobre.html vira /sobre)
    const cleanPath = path.slice(0, -5) + window.location.search + window.location.hash;
    window.history.replaceState(null, '', cleanPath);
  }
})();
