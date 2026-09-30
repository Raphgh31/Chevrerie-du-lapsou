# La Chèvrerie du Lapsou — maquette de site web

Site vitrine one-page pour **La Chèvrerie du Lapsou** (Marlène Pons, Le Lapsou, 15300 Murat, Cantal), réalisé comme support de prospection.

## Aperçu

Site 100 % statique (HTML + CSS + un peu de JS, sans framework ni dépendance) : ouvrir `index.html` ou lancer un serveur local :

```bash
python3 -m http.server 8000   # puis http://localhost:8000
```

## Contenu du site

| Section | Contenu |
|---|---|
| Accueil | Accroche, appel à l'action, badges (Fermiers d'Or, 7j/7, note 4,8/5) |
| Chiffres | 1100 m, foin 100 % de la ferme, vente 7j/7, circuit court |
| Notre histoire | Parcours de Marlène, installation en 2021, valeurs |
| Du pré à votre table | Pâturage → foin → moulage à la main → affinage |
| Nos fromages | Sélecteur interactif d'affinage + cabécou, fromages affinés, yaourts |
| Récompense | Fermiers d'Or Auvergne-Rhône-Alpes, octobre 2021 |
| Visites | Présentation + formulaire de demande qui prépare un SMS (aucun serveur requis) |
| Nous trouver | Adresse, téléphone, Facebook, itinéraire, carte Google Maps chargée au clic (RGPD) |
| Autour de la ferme | Murat, Le Lioran, Plomb du Cantal, Planèze |
| FAQ | 5 questions (balisage `FAQPage` pour Google) |

## Optimisations incluses

- **SEO local** : balises title/description, données structurées `LocalBusiness` + `TouristAttraction` + `FAQPage`, Open Graph (image de partage `assets/img/og-image.png`), `sitemap.xml`, `robots.txt`, URL canonique.
- **Performance** : aucune image lourde (illustrations SVG vectorielles), polices auto-hébergées et préchargées (~130 Ko au total), JS < 7 Ko.
- **RGPD** : aucun cookie, polices hébergées localement (pas d'appel à Google Fonts), carte chargée uniquement sur action de l'utilisateur.
- **Mobile** : menu burger, bouton « Appeler la ferme » flottant, mise en page adaptée dès 320 px.
- **Accessibilité** : lien d'évitement, contrastes, focus visibles, `prefers-reduced-motion` respecté, formulaires étiquetés.

## Sources des informations

Toutes les informations viennent de fiches publiques (aucune n'a été inventée sur la ferme) :

- Fiche Hautes Terres Tourisme / Auvergne-Rhône-Alpes Tourisme : troupeau de chèvres alpines, 1100 m, foin produit sur l'exploitation, vente tous les jours, visites sur réservation, Fermiers d'Or oct. 2021, tél. 06 79 16 86 98.
- Campagne MiiMOSA « Une chèvrerie au cœur des monts du Cantal » : parcours de Marlène (5 ans en ferme laitière, Cantal / Salers / Bleu d'Auvergne), installation sur la ferme familiale.
- PA Cantal et Ferme du Puy de Coujoule : revendeurs du cabécou.
- lesfromageries.fr : note 4,8/5 (39 avis), ouvert 7j/7.
- Page Facebook : facebook.com/chevreriedulapsou

## À valider ou compléter avec Marlène

- [ ] **Photos** : le site utilise des illustrations. Les remplacer par de vraies photos (troupeau, Marlène, fromages, ferme) donnera un rendu bien plus fort. Emplacements prévus : portrait (`.portrait-card`), cartes produits, étapes.
- [ ] **Horaires précis** de vente à la ferme (aujourd'hui : « tous les jours », sans créneau horaire).
- [ ] **Gamme et tarifs** : produits exacts (tomme ? faisselle ? aromatisés ?), prix, formats.
- [ ] **Visites** : durée, tarif, jours, capacité, saisonnalité (chevreaux au printemps ?).
- [ ] **Marchés** : lesquels et quels jours.
- [ ] **Moyens de paiement** acceptés (CB, espèces, chèques).
- [ ] **Label / certifications** éventuels.
- [ ] **Note 4,8/5** : vérifier la source (probablement Google) avant publication, ou la remplacer par un lien vers les avis Google.
- [ ] **Localisation** : la phrase « entre la vallée de l'Alagnon et le plateau de la Planèze » et les coordonnées GPS exactes sont à confirmer.
- [ ] **Citation** dans « Notre histoire » : reformulation du texte de leur fiche touristique, à valider par Marlène.
- [ ] **Mentions légales** : SIRET, forme juridique, hébergeur (champs `[à compléter]`).
- [ ] **Nom de domaine** : `chevreriedulapsou.fr` est utilisé comme exemple (canonical, sitemap, OG) — vérifier sa disponibilité puis remplacer partout si besoin.
- [ ] Éventuellement : version anglaise pour la clientèle touristique étrangère, fiche Google Business Profile à relier au site.

## Mise en ligne

Hébergeable gratuitement tel quel sur GitHub Pages, Netlify, Cloudflare Pages ou OVH (hébergement mutualisé) : il suffit de publier le contenu du dépôt à la racine du domaine. Le fichier `404.html` est pris en charge automatiquement par ces hébergeurs.

## Structure

```
index.html              page principale
mentions-legales.html   mentions légales (à compléter)
404.html                page d'erreur
assets/css/style.css    styles
assets/js/main.js       interactions (menu, affinage, carte, formulaire)
assets/fonts/           Fraunces + Figtree (auto-hébergées)
assets/img/             logo, favicon, icônes, image de partage
site.webmanifest, robots.txt, sitemap.xml
```
