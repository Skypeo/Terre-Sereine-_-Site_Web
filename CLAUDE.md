# Terre Sereine — Maison de bien-être & de beauté

## Description
Site vitrine multi-pages pour un institut de beauté **en création** à Woippy (57140, Moselle). Fondatrices : Claudia & Chloé. Domaine prévu : `terre-sereine.fr`.

Issu d'une maquette one-page validée par le client (commit `4a1fb92`), désormais éclaté en site classique avec pages Services, À propos, Galerie, Contact.

## Services proposés (10 rituels)
- **Headspa** (rituel capillaire japonais) → `/services/headspa.html`
- **Hydra Face** (soin visage technologie hydrofacial Dermalogica) → `/services/hydra-face.html`
- **Nanoneedling** (soin visage éclat, micro-pointes) → `/services/nanoneedling.html`
- **Dermalogica** (soins visage manuels : Signature 30 min/1 h, Pro Bright/Calm/Clear/Firm) → `/services/dermalogica.html` _(photos en attente, placeholders CSS en place)_
- **House of Peau** (soins visage holistiques : Lift Elixir, Hydra Boost, Acné Solution, Sébum Control, Sensitive Skin) → `/services/house-of-peau.html` _(photos en attente, placeholders CSS en place)_
- **Maderothérapie** (soin corps Bioslimming) → `/services/maderotherapie.html`
- **BioSlimming** (enveloppement minceur thermo-actif) → `/services/bioslimming.html` _(photo en attente, placeholder CSS en place)_
- **Drainage lymphatique** → `/services/drainage-lymphatique.html`
- **Sauna dôme infrarouge** → `/services/sauna-dome.html`
- **Massage pierres chaudes** → `/services/pierres-chaudes.html`

## Marques partenaires (3 maisons)
- **Dermalogica** (visage) — wordmark typographique caps letterspacé
- **Bioslimming** (corps) — wordmark Playfair Display italic
- **House of Peau** (visage & corps, soin holistique) — logo image (`assets/images/house-of-peau-logo.webp`) — confirmé par le client le 2026-04-30

## Stack
HTML5 statique multipages + CSS externe + JS vanilla. Google Fonts (Playfair Display + Montserrat, 2 polices uniquement). Photos WebP locales + Unsplash.

**Pas de framework, pas de build step.** Le site est servable tel quel par n'importe quel hébergeur statique.

## Style retenu
**Onsen Éditorial** — spa haut de gamme sensoriel et tactile.

Palette extraite du logo client :
- Crème `#F0E3CD` · Ivoire `#FBF6ED` · Beige `#EADBC0`
- Or `#B8874E` · Or profond `#9A6E38` · Brun `#6E4A2F`
- Terracotta `#C47B5A` · Encre `#2B1F16`

Typos : Playfair Display (titres + accents italiques), Montserrat (corps). Deux polices, point.

## Élément signature
**Agate scroll-liée** : bouton de retour-en-haut en bas-droite avec anneaux concentriques qui s'allument progressivement au fur et à mesure du scroll.

## Arborescence

```
Terre-Sereine/
├── index.html                      # Accueil (design intact depuis la maquette)
├── a-propos.html                   # Maison + valeurs + marques partenaires
├── services.html                   # Liste des 8 rituels
├── services/
│   ├── headspa.html
│   ├── hydra-face.html
│   ├── nanoneedling.html
│   ├── dermalogica.html
│   ├── house-of-peau.html
│   ├── maderotherapie.html
│   ├── bioslimming.html
│   ├── drainage-lymphatique.html
│   ├── sauna-dome.html
│   └── pierres-chaudes.html
├── galerie.html                    # Grille filtrable (Soins / Lieu / Produits)
├── contact.html                    # Formulaire stylé + infos + carte OSM
├── mentions-legales.html           # Avec placeholders [À COMPLÉTER]
├── politique-confidentialite.html  # RGPD avec placeholders
├── sitemap.xml
├── robots.txt
└── assets/
    ├── css/styles.css              # Tout le CSS (extrait + composants pages internes)
    ├── js/main.js                  # JS vanilla (header scroll, agate, burger, galerie, form)
    ├── logo.jpeg
    ├── logoTerreSereine-sansFond.png
    └── images/                     # WebP optimisés (compression ffmpeg+libwebp q80)
        ├── headspa-rituel-capillaire.webp
        ├── hydra-face-soin-visage.webp
        ├── maderotherapie-outils-bois.webp
        ├── dermalogica-soin-visage.webp
        ├── massage-pierres-chaudes.webp
        ├── sauna-dome-infrarouge.webp
        └── house-of-peau-logo.webp  # logo 3e marque partenaire
```

## Conventions

- **Navbar identique sur toutes les pages.** Lien actif marqué via classe `.is-active` + `aria-current="page"`.
- **Footer identique sur toutes les pages.**
- **Toutes les pages ont :** SEO complet (title, description, canonical, OG, Twitter), favicon, JSON-LD adapté (BeautySalon / Service / AboutPage / ContactPage / ImageGallery), breadcrumb, agate de retour-en-haut, menu burger mobile.
- **Photos locales en WebP uniquement** (pas de fallback JPEG, le format est supporté à 97%+ et les Unsplash gardent leur format d'origine).
- **Pas de tracking par défaut** : pas de Google Analytics, pas de Meta Pixel. À ajouter avec consentement RGPD si besoin.
- **Formulaire de contact** : HTML pur, démo JS (affiche un message succès au submit). Backend à brancher plus tard (Formspree, FormSubmit, ou backend custom).

## Décisions importantes prises depuis la maquette

1. **Style de la home intact** — la page d'accueil n'a été modifiée que pour : extraction CSS/JS externes, mise à jour des liens navbar (ancres → pages), CTAs reliés aux nouvelles pages, ajout d'attributs SEO (loading, fetchpriority, alt enrichis).
2. **Wordmarks typographiques** pour Dermalogica/Bioslimming (les logos sources étaient trop fins ou de taille incompatible sur fond foncé).
3. **Photos avec masques organiques** (blob border-radius) sur les cards rituels.
4. **Section Marques en fond brun foncé** pour marquer une respiration visuelle.
5. **Badge circulaire rotatif SVG** sur l'image RDV ("Terre Sereine · Woippy · 2026").
6. **Conversion images JFIF → WebP** via ffmpeg + libwebp, qualité 80, compression level 6, max 1600px de large. Réduction ~44 % de la taille (334 KB → 186 KB).
7. **Renommage SEO-friendly** des images (UUID → noms descriptifs).
8. **Liens navbar** : `Maison/Rituels/Marques/Lieu` (ancres internes) → `À propos/Services/Galerie/Contact` (pages dédiées).
9. **Une page par service** plutôt qu'une seule page services, pour le SEO local.
10. **Carte OpenStreetMap** plutôt que Google Maps sur la page contact (zéro tracking, zéro clé API requise).
11. **Fondatrices** : Claudia & Chloé (confirmé par le client le 2026-04-28).
12. **Hover navbar** : underline doré animé au lieu d'un fond brun arrondi — esprit éditorial discret. Couleur du lien passe en `gold-deep` au hover/active.
13. **Sous-menu Services** :
    - **Desktop / tablette** : dropdown ivoire blur au hover/focus de "Services", caret SVG qui pivote, pont invisible (`::before`) pour stabiliser le hover.
    - **Mobile** : sous-liste **fermée par défaut**, dépliée par un bouton rond avec caret à droite de "Services". Lien "Services" lui-même reste cliquable vers la page liste.
14. **Menu overlay mobile éditorial** : background gradient 165°, watermark géant "SEREINE" en Playfair Display, brand en haut (logo + nom), navigation numérotée 01-05 avec trait doré au hover, bloc coordonnées (tel/email/horaires), CTA "Prendre rendez-vous" pleine largeur, socials en bas. Apparition en cascade des 5 sections (delay 80ms).
15. **Watermark animé sur les page-header** : reprend l'animation `heroGlide` du hero (translation horizontale infinie, 46s linear). Mot répété 4× avec `·` dans `data-watermark` pour garantir une boucle invisible.
16. **Ajout 7e service Nanoneedling** (2026-04-30) : technique innovante non invasive de micro-pointes, soin visage éclat. Texte fourni par Claudia. Pas de photo client → placeholder CSS (`.photo-placeholder` + variante `.photo-placeholder-sm`) en attendant. Page complète sur le modèle de Hydra Face.
17. **Passage à 3 marques partenaires** (2026-04-30) : House of Peau (initialement en attente) confirmée par Claudia. Layout `marques-grid` passe de 2 à 3 colonnes via classe additive `.marques-grid-3` (responsive 3 → 2 → 1 col à 1100px et 720px). Logo image (vs wordmark texte) intégré via classe `.marque-logo-img`.
18. **Texte Dermalogica & Hydra Face mis au ton Claudia** (2026-04-30) : approche plus orientée "expérience cabine + routine maison" plutôt que "histoire de la marque".
19. **Section maison a-propos réécrite** (2026-04-30) : nouveau texte "Histoire de passion, de peau et d'équilibre" fourni par Claudia. Eyebrow passe de "— Philosophie" à "— Notre histoire". Tagline italique en bas du bloc maison via classe `.maison-tagline`.
20. **Ajout 2 services visage Dermalogica & House of Peau** (2026-05-05) : services distincts d'Hydra Face. Dermalogica = soins manuels (Signature 30 min/1 h + 4 ciblés Pro Bright/Calm/Clear/Firm) avec diagnostic Face Mapping®. House of Peau = soins holistiques (Lift Elixir, Hydra Boost, Acné Solution, Sébum Control, Sensitive Skin). Pages structurées en variante multi-protocoles : `service-detail` intro marque + suite de `page-section narrow` (un protocole par section, eyebrow + h2 + lede + `service-bullets` + ligne « Idéal pour »). Total : 10 rituels. Photos client en attente → placeholders CSS (`.photo-placeholder` et variante `.photo-placeholder-sm` dans la grille services). Position dans le menu : après Nanoneedling pour grouper les soins visage.

## Animations CSS partagées
- `heroGlide` (46s linear infinite) : utilisé par `.hero::before` ET `.page-header::before`
- `liveBlink`, `navPulse`, `spinBadge` : pulsations diverses (hero badge, nav CTA, RDV badge)
- Toutes les animations respectent `prefers-reduced-motion`

## Placeholders à compléter avant mise en ligne

- Adresse exacte de l'institut (mentionnée `[À COMPLÉTER]` dans contact + mentions légales)
- Forme juridique, SIRET, RCS, capital, TVA intracommunautaire
- Hébergeur (nom + adresse)
- Téléphone et email réels (actuels : `03 87 00 00 00` et `contact@terresereine.fr` placeholder)
- URLs Instagram et Facebook réels (actuellement `#`)
- Tarifs des rituels (mentionnés "Sur devis")
- Backend du formulaire de contact

## Commandes utiles

Démarrer un serveur local :
```bash
python -m http.server 8000      # ou
npx serve .
```

Convertir une nouvelle image en WebP :
```bash
ffmpeg -y -i input.jpg -c:v libwebp -quality 80 -compression_level 6 -preset photo -vf "scale='min(1600,iw)':-2" output.webp
```
