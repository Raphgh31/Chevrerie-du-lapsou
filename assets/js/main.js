/* La Chèvrerie du Lapsou — interactions */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.add("js");

  var PHONE = "+33679168698";

  /* ----- En-tête : fond au défilement + bouton d'appel mobile ----- */
  var header = document.querySelector("[data-header]");
  var mobileCall = document.querySelector(".mobile-call");
  function onScroll() {
    var y = window.scrollY;
    if (header && !header.hasAttribute("data-static")) header.classList.toggle("is-scrolled", y > 24);
    if (mobileCall) mobileCall.classList.toggle("is-visible", y > window.innerHeight * 0.6);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Menu mobile ----- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".sr-only").textContent = open ? "Fermer le menu" : "Ouvrir le menu";
      nav.classList.toggle("is-open", open);
      if (open && header) header.classList.add("is-scrolled");
      else onScroll();
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
  }

  /* ----- Apparition au défilement ----- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----- Sélecteur d'affinage ----- */
  var affinage = document.querySelector("[data-affinage]");
  if (affinage) {
    var stages = [
      {
        title: "Frais",
        desc: "Tout juste démoulé : une pâte blanche, fondante et lactique, d'une grande douceur. Parfait à la cuillère, avec des herbes ou un filet de miel.",
        texture: "Crémeuse, fondante", taste: "Doux, lactique", pairing: "Tartines, salades, desserts",
        top: "#fbf8f0", side: "#f4eee1", rind: 0, wrinkle: 0, scale: 1
      },
      {
        title: "Crémeux",
        desc: "Quelques jours de cave : une fine croûte apparaît, le cœur reste coulant et le goût de la chèvre s'affirme tout en restant tendre.",
        texture: "Cœur coulant, croûte fine", taste: "Équilibré, noisette", pairing: "Plateau, pain de campagne",
        top: "#f5ebd3", side: "#efe2c2", rind: 0.45, wrinkle: 0.25, scale: 0.98
      },
      {
        title: "Demi-sec",
        desc: "La pâte se raffermit, la croûte se ride légèrement. Un fromage de caractère, parfait pour l'apéritif ou chaud sur une salade.",
        texture: "Ferme et fondante", taste: "Plus prononcé", pairing: "Apéritif, salade chaude",
        top: "#e9d8ad", side: "#dcc79a", rind: 0.8, wrinkle: 0.7, scale: 0.94
      },
      {
        title: "Sec",
        desc: "Longuement affiné : une pâte cassante, un goût puissant et persistant. Pour les amateurs, à râper sur des pâtes ou à croquer.",
        texture: "Dure, cassante", taste: "Puissant, persistant", pairing: "À croquer, à râper",
        top: "#d3bd8c", side: "#c3aa78", rind: 1, wrinkle: 1, scale: 0.88
      }
    ];
    var range = affinage.querySelector("[data-affinage-range]");
    var q = function (sel) { return affinage.querySelector(sel); };
    var els = {
      kicker: q("[data-stage-kicker]"), title: q("[data-stage-title]"), desc: q("[data-stage-desc]"),
      texture: q("[data-stage-texture]"), taste: q("[data-stage-taste]"), pairing: q("[data-stage-pairing]"),
      top: q("[data-cheese-top]"), side: q("[data-cheese-side]"), rind: q("[data-cheese-rind]"),
      wrinkle: q("[data-cheese-wrinkle]"), cheese: q("[data-cheese]")
    };
    var render = function (i) {
      var s = stages[i];
      els.kicker.textContent = "Stade " + (i + 1) + " sur " + stages.length;
      els.title.textContent = s.title;
      els.desc.textContent = s.desc;
      els.texture.textContent = s.texture;
      els.taste.textContent = s.taste;
      els.pairing.textContent = s.pairing;
      els.top.setAttribute("fill", s.top);
      els.side.setAttribute("fill", s.side);
      els.rind.style.opacity = s.rind;
      els.wrinkle.style.opacity = s.wrinkle;
      els.cheese.style.transform = "scale(" + s.scale + ")";
      range.setAttribute("aria-valuetext", s.title);
    };
    range.addEventListener("input", function () { render(Number(range.value)); });
    render(Number(range.value));
  }

  /* ----- Carte : chargement sur consentement ----- */
  var map = document.querySelector("[data-map]");
  if (map) {
    map.querySelector("[data-map-load]").addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://maps.google.com/maps?q=" + encodeURIComponent("La Chèvrerie du Lapsou, Le Lapsou, 15300 Murat") + "&z=12&output=embed";
      iframe.title = "Carte : accès à la Chèvrerie du Lapsou";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      map.innerHTML = "";
      map.appendChild(iframe);
    });
  }

  /* ----- Demande de visite par SMS ----- */
  var form = document.querySelector("[data-booking]");
  if (form) {
    var feedback = form.querySelector("[data-booking-feedback]");
    var dateInput = form.querySelector("#b-date");
    var today = new Date();
    dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      ["name", "date", "people"].forEach(function (n) {
        var f = form.elements[n];
        var valid = f.checkValidity() && String(f.value).trim() !== "";
        f.setAttribute("aria-invalid", String(!valid));
        if (!valid && ok) { f.focus(); ok = false; }
      });
      if (!ok) { feedback.textContent = "Merci de compléter votre nom, la date et le nombre de personnes."; return; }

      var d = new Date(form.elements.date.value + "T12:00:00");
      var dateTxt = d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
      var body = "Bonjour Marlène, je souhaiterais visiter la chèvrerie le " + dateTxt +
        " pour " + form.elements.people.value + " personne(s). " +
        (form.elements.message.value.trim() ? form.elements.message.value.trim() + " " : "") +
        "— " + form.elements.name.value.trim();

      var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        var sep = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "&" : "?";
        window.location.href = "sms:" + PHONE + sep + "body=" + encodeURIComponent(body);
        feedback.textContent = "Votre application SMS s'ouvre avec le message prêt à envoyer.";
      } else {
        feedback.innerHTML = "";
        var p = document.createElement("span");
        p.textContent = "Envoyez ce message par SMS au 06 79 16 86 98 (ou appelez directement) : « " + body + " »";
        feedback.appendChild(p);
        if (navigator.clipboard) {
          navigator.clipboard.writeText(body).then(function () {
            p.textContent += " — Message copié dans le presse-papiers.";
          }).catch(function () {});
        }
      }
    });
  }

  /* ----- Année du pied de page ----- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
