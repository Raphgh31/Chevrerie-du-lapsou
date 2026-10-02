# Chèvrerie du Lapsou — site web (ébauche)

Site vitrine de la Chèvrerie du Lapsou (Marlène Pons, Le Lapsou, 15300 Murat, Cantal).
Première version de travail, à faire évoluer avec Marlène avant la mise en ligne.

## Pages

| Fichier | Page |
|---|---|
| `index.html` | Accueil : grande photo, la ferme en bref, accès aux autres pages, Fermiers d'Or |
| `la-ferme.html` | Histoire de Marlène, grandes étapes, valeurs, une année au Lapsou, les chiens |
| `fromages.html` | Le cabécou (fiche produit), les stades d'affinage, la gamme, conseils |
| `visites.html` | Déroulé d'une visite, comment réserver |
| `nous-trouver.html` | Horaires, adresse, itinéraire, revendeurs, autour de la ferme |
| `mentions-legales.html` | Mentions légales (hébergeur à compléter) |

Site 100 % statique (HTML, CSS, quelques lignes de JS). Pour le voir en local :

```bash
python3 -m http.server 8000   # puis http://localhost:8000
```

Styles : `assets/css/style.css` (couleurs et polices réglées en tête de fichier).
Photos : `assets/photos/`.

## Sources des informations

- Fiches Hautes Terres Tourisme et Auvergne-Rhône-Alpes Tourisme : installation en 2021, chèvres alpines, 1100 m, foin de la ferme, vente tous les jours, visites sur réservation, Fermiers d'Or (octobre 2021).
- Campagne MiiMOSA « Une chèvrerie au cœur des monts du Cantal » : parcours de Marlène (5 ans en ferme laitière, Cantal / Salers / Bleu d'Auvergne), 26 chèvres au départ, objectif 40 à 45, atelier construit à côté de la ferme faute de collecte de lait de chèvre.
- Ferme du Puy de Coujoule et PA Cantal : cabécou au lait cru entier, 85 g, lait / sel / présure, lactique, 30 jours.
- Le Grand Café (Murat) : fromage du Lapsou sur le plateau de fromages.
- Horaires 8 h 30 – 10 h 30 et 17 h 30 – 19 h : repris d'un annuaire (lesfromageries.fr).
- SIREN 894 840 354 : registre public (INPI / Pappers).

## À valider avec Marlène

- [ ] Horaires de vente exacts.
- [ ] Photos : légendes (« Marlène, le patou et le troupeau… »), crédit photo.
- [ ] Les deux citations sur photo (accueil et la ferme) sont des propositions de texte, pas des paroles de Marlène.
- [ ] Gamme et prix : stades d'affinage proposés, yaourts (parfums ?), autres produits.
- [ ] Calendrier des saisons (période des naissances, de la traite, du repos).
- [ ] Visites : durée, tarif, jours, saison, capacité.
- [ ] Revendeurs et marchés à jour.
- [ ] Taille actuelle du troupeau.
- [ ] Altitudes des lieux voisins (page Nous trouver).
- [ ] Mentions légales : hébergeur, crédit photo.
- [ ] Nom de domaine et hébergement pour la mise en ligne.

## Mise en ligne (plus tard)

Hébergeable tel quel sur GitHub Pages, Netlify, OVH… : publier le contenu du dépôt à la racine du site.
