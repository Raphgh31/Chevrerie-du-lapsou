/* La Chèvrerie du Lapsou : petits scripts, le site fonctionne sans. */
(function () {
  // Année du pied de page
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Bouton « Copier le numéro »
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var msg = btn.parentElement.querySelector(".copy-msg");
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      function done(ok) {
        if (msg) msg.textContent = ok ? "Numéro copié." : "Sélectionnez le numéro pour le copier.";
      }
      try {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } catch (e) { done(false); }
    });
  });

  // Garder l'onglet actif visible dans le menu horizontal sur mobile
  var current = document.querySelector('.nav a[aria-current="page"]');
  if (current && current.scrollIntoView && window.matchMedia("(max-width: 820px)").matches) {
    var nav = current.closest(".nav");
    if (nav) nav.scrollLeft = current.offsetLeft - 24;
  }
})();
