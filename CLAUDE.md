# Terre Sereine — Maison de bien-être & de beauté

## Description
Site vitrine multi-pages pour un institut de beauté **en création** à Woippy (57140, Moselle). Fondatrices : Claudia & Chloé. Domaine prévu : `terre-sereine.fr`.

Issu d'une maquette one-page validée par le client (commit `4a1fb92`), désormais éclaté en site classique avec pages Services, À propos, Galerie, Contact.

## Services proposés (10 rituels)
- **Headspa** (rituel capillaire japonais) → `/services/headspa.html`
- **Hydra Face** (soin visage technologie hydrofacial Dermalogica) → `/services/hydra-face.html`
- **Nanoneedling** (soin visage éclat, micro-pointes) → `/services/nanoneedling.html`
- **Dermalogica** (soins visage manuels : Signature 30 min/1 h, Pro Bright/Calm/Clear/Firm) → `/services/dermalogica.html`
- **House of Peau** (soins visage holistiques : Lift Elixir, Hydra Boost, Acné Solution, Sébum Control, Sensitive Skin) → `/services/house-of-peau.html`
- **Maderothérapie** (soin corps Bioslimming) → `/services/maderotherapie.html`
- **BioSlimming** (enveloppement minceur thermo-actif) → `/services/bioslimming.html`
- **Drainage lymphatique** → `/services/drainage-lymphatique.html`
- **Sauna dôme infrarouge** → `/services/sauna-dome.html`
- **Massage pierres chaudes** → `/services/pierres-chaudes.html`

## Marques partenaires (3 maisons)
- **Dermalogica** (visage) — wordmark typographique caps letterspacé
- **Bioslimming** (corps) — wordmark Playfair Display italic
- **House of Peau** (visage & corps, soin holistique) — logo image (`assets/images/house-of-peau-logo.webp`) + photo soin (`assets/images/house-of-peau-soin.webp`) — confirmé par le client le 2026-04-30

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
    ├── favicon/                    # Kit favicon complet (realfavicongenerator)
    │   ├── favicon.ico
    │   ├── favicon-16x16.png · favicon-32x32.png
    │   ├── apple-touch-icon.png    # 180x180
    │   ├── android-chrome-192x192.png · 512x512.png
    │   └── site.webmanifest        # PWA (theme #F0E3CD, bg #FBF6ED)
    └── images/                     # WebP optimisés (compression ffmpeg+libwebp q80)
        ├── headspa-rituel-capillaire.webp
        ├── hydra-face.webp                        # soin Hydra Face (card + page service)
        ├── nanoneedling.webp
        ├── dermalogica.webp                       # soin Dermalogica (card + page service)
        ├── dermalogica-soin-visage.webp           # produit Dermalogica (galerie + RDV home)
        ├── house-of-peau-soin.webp                # soin House of Peau en cabine (card + page service)
        ├── house-of-peau-logo.webp                # logo 3e marque partenaire
        ├── maderotherapie-outils-bois.webp
        ├── bioslimming.webp                       # enveloppement minceur (card + page service)
        ├── massage-pierres-chaudes.webp
        ├── sauna-dome-infrarouge.webp
        ├── flowers-maison.webp                    # composition florale section "La Maison" (home)
        └── a-propos.webp                          # photo unique section "La Maison" (page À propos)
```

## Conventions

- **Navbar identique sur toutes les pages.** Lien actif marqué via classe `.is-active` + `aria-current="page"`.
- **Footer identique sur toutes les pages.**
- **Toutes les pages ont :** SEO complet (title, description, canonical, OG, Twitter), favicon, JSON-LD adapté (BeautySalon / Service / AboutPage / ContactPage / ImageGallery), breadcrumb, agate de retour-en-haut, menu burger mobile.
- **Photos locales en WebP uniquement** (pas de fallback JPEG, le format est supporté à 97%+ et les Unsplash gardent leur format d'origine).
- **Pas de tracking par défaut** : pas de Google Analytics, pas de Meta Pixel. À ajouter avec consentement RGPD si besoin.
- **Formulaire de contact** : branché sur **Web3Forms** (`https://api.web3forms.com/submit`) via `fetch()`. Clé d'accès dans `assets/js/web3forms-config.js` (gitignored). Template `web3forms-config.example.js` committé. Submit AJAX → affiche `#form-success` ou `#form-error` (lien mailto fallback). Honeypot `botcheck` anti-spam. **À faire avant prod : restreindre la clé au domaine `terre-sereine.fr` dans le dashboard Web3Forms** — la clé est publique côté client, c'est le domain-binding qui sécurise.

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
21. **Section maison home — visuels remplacés** (2026-05-06) : suppression de l'image bokeh (étincelles) et remplacement de la photo Unsplash maquillage par `plume-maison.webp` (photo client, plume). WebP q78 / 1200px max → 44 KB (depuis 763 KB). Layout passe en mono-photo via override CSS `.maison-photos:has(.maison-photo-1:only-child)` (photo passe en `position: relative` + width 100% + aspect 4/5). Le binôme original reste intact sur `a-propos.html`.
22. **Grille rituels home — 2 × 5 + cards renforcées** (2026-05-06) : passage de `repeat(4, 1fr)` à `repeat(5, 1fr)` pour aligner les 10 rituels en 2 rangées de 5. `max-width: 1380px`, gap 18px, padding card 26/22/30. Les cards `.rituel` "ressortent" mieux : fond en gradient `--ivory` → `--cream`, bordure dorée plus visible (`rgba(184,135,78,0.18)`), ombre de repos douce, hover qui passe à `translateY(-8px)` + ombre profonde + bordure or à 0.42, et un trait or dégradé révélé en `::before` sur le top de la card au hover. Breakpoints décalés : ≤1240 → 4 cols (au lieu de 3), ≤1100 → 3 cols (au lieu de 2). Carousel mobile (`≤900px`) inchangé.
23. **Photos pages services — anti-pixelisation** (2026-05-06) : plusieurs sources client sont en basse résolution (hydra-face 430×362, bioslimming 447×448, pierres-chaudes 576×280) et étaient affichées à ~607px sur desktop, ce qui pixelisait. Fix : grille `.service-detail-inner` passe de `1.1fr 1fr` à `minmax(0, 460px) 1fr` — la photo plafonne à 460px sur desktop, le contenu récupère l'espace. Bonus : re-encodage `hydra-face.webp` (8 → 16 KB) et `bioslimming.webp` (16 → 32 KB) à q92 depuis les PNG sources pour grappiller de la netteté.
24. **Galeries home + page galerie en masonry classique** (2026-05-06) : `.lieu-grid` (home, 4 figures) et `.gallery-grid` (page galerie, 12+ figures) passent de `display: grid` avec rangées fixes (qui forçait des tailles bizarres `.f1`–`.f4` / `.g-tall`/`.g-wide`/etc.) à du `column-count` masonry style Pinterest. Les images gardent leur ratio naturel (`width: 100%; height: auto`), `break-inside: avoid` sur les figures, `column-gap: 18px` (lieu) / 16px (galerie). Responsive : 3 cols desktop → 2 cols ≤1100px → 2 cols (lieu) ou 1 col (galerie) ≤720px. Les classes `.f1`–`.f4` et `.g-tall`/etc. restent dans le HTML mais sans CSS associé (cleanup léger).
25. **House of Peau — passage du logo image au wordmark** (2026-05-06) : `<img class="marque-logo-img">` remplacé par `<span class="wordmark wordmark-italic">House of Peau</span>` sur `index.html` et `a-propos.html`. Cohérent avec Dermalogica (caps) et Bioslimming (italic) — alignement typographique des 3 marques. Le fichier `house-of-peau-logo.webp` reste dans `assets/images/` (utilisé nulle part désormais, à supprimer si tu veux nettoyer).
26. **Audit perfs + SEO complet** (2026-05-06) :
    - **Loader PNG → WebP** : `logo-round-feathered.png` (130 KB) → `logo-round.webp` (10 KB, 440×440). `logo-text-feathered.png` (258 KB) → `logo-text.webp` (13 KB, 1200×472). Économie totale : 365 KB sur le first paint, alpha préservé. Anciens PNG supprimés. `width`/`height` + `fetchpriority="high"` ajoutés (anti-CLS). Mask-image déjà en place pour cacher le résidu en haut du PNG d'origine — toujours valide sur le WebP.
    - **Cleanup orphelins** : `assets/logo.jpeg` (86 KB) supprimé (jamais référencé), `assets/tarifs/` (9 MB de screenshots client) supprimé après intégration des tarifs.
    - **Hiérarchie h1 corrigée** : 10 pages services avaient 2 `<h1>` (un dans `.page-header`, un dupliqué dans `.service-detail`). Le second a été converti en `<h2>` + sélecteur CSS `.service-detail h1` → `.service-detail h2` mis à jour. JS reveal-on-scroll également mis à jour (`'.service-detail h1'` → `'.service-detail h2'`).
    - **Meta SEO resserrées** : 13 descriptions (>160c) et 6 titles (>70c) raccourcis pour respecter les limites Google. OG title/description alignés. Toutes les pages désormais T ≤ 70c et D ≤ 160c.
    - **Sitemap** : `lastmod` rafraîchi à 2026-05-06 sur les 17 URLs.
    - **Cleanup JS** : sélecteur `circle:not(.center-dot)` simplifié en `circle` (le center-dot a été supprimé du SVG agate).

## Animations CSS partagées
- `heroGlide` (46s linear infinite) : utilisé par `.hero::before` ET `.page-header::before`
- `liveBlink`, `navPulse`, `spinBadge` : pulsations diverses (hero badge, nav CTA, RDV badge)
- **Reveal on scroll** : système global d'apparition en cascade. Classe `.reveal` (`opacity: 0 + translateY(22px)`) → `.is-visible` (`opacity: 1 + translateY(0)`) avec transition 0.9s/1s. JS dans `main.js` : sélecteurs "feuilles" (sans nesting parent/enfant) → IntersectionObserver `threshold: 0.1, rootMargin: -6%` → ajout `is-visible`. Stagger calculé par JS : index de l'élément parmi ses voisins `.reveal` du même parent × 80ms (cap à 500ms) via `--reveal-delay`.
- Toutes les animations respectent `prefers-reduced-motion`

## Placeholders à compléter avant mise en ligne

- ~~Adresse exacte de l'institut~~ ✅ confirmée le 2026-05-06 : **5 Imp. du Saule, 57140 Woippy** (lat 49.1470881 / lon 6.1550850, source Nominatim OSM). Propagée sur footer (17 pages), contact, mentions légales, JSON-LD home, bloc RDV home, iframe OSM.
- Forme juridique, SIRET, RCS, capital, TVA intracommunautaire
- Hébergeur (nom + adresse)
- Email réel (actuel : `contact@terresereine.fr` placeholder). Téléphone confirmé : `+33 6 69 17 47 14` (mobile Claudia).
- ~~Instagram~~ ✅ branché (`https://www.instagram.com/terresereine.institut`). Facebook retiré du site (pas de présence Meta).
- ~~Tarifs des rituels~~ ✅ intégrés (2026-05-06). BioSlimming reste sans tarif explicite (à clarifier avec le client si différent du remodelage corps). Le dossier `assets/tarifs/` (screenshots client, 9 MB) a été supprimé une fois les tarifs intégrés.
- ~~Backend du formulaire de contact~~ ✅ branché sur Web3Forms (clé dans `web3forms-config.js`, gitignored).

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
