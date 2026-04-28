# Terre Sereine — Maison de bien-être & de beauté

## Description
Site vitrine multi-pages pour un institut de beauté **en création** à Woippy (57140, Moselle). Fondatrices : Claudia & Chloé. Domaine prévu : `terre-sereine.fr`.

Issu d'une maquette one-page validée par le client (commit `4a1fb92`), désormais éclaté en site classique avec pages Services, À propos, Galerie, Contact.

## Services proposés (6 rituels)
- **Headspa** (rituel capillaire japonais) → `/services/headspa.html`
- **Hydra Face** (soin visage Dermalogica) → `/services/hydra-face.html`
- **Maderothérapie** (soin corps Bioslimming) → `/services/maderotherapie.html`
- **Drainage lymphatique** → `/services/drainage-lymphatique.html`
- **Sauna dôme infrarouge** → `/services/sauna-dome.html`
- **Massage pierres chaudes** → `/services/pierres-chaudes.html`

## Marques partenaires
- **Dermalogica** (visage) — wordmark typographique caps letterspacé
- **Bioslimming** (corps) — wordmark Fraunces italic
- _(Note : photos clientes mentionnent aussi "House of Peau" — non intégrée comme marque officielle, à confirmer avec le client)_

## Stack
HTML5 statique multipages + CSS externe + JS vanilla. Google Fonts (Italiana, Fraunces, Manrope). Photos WebP locales + Unsplash.

**Pas de framework, pas de build step.** Le site est servable tel quel par n'importe quel hébergeur statique.

## Style retenu
**Onsen Éditorial** — spa haut de gamme sensoriel et tactile.

Palette extraite du logo client :
- Crème `#F0E3CD` · Ivoire `#FBF6ED` · Beige `#EADBC0`
- Or `#B8874E` · Or profond `#9A6E38` · Brun `#6E4A2F`
- Terracotta `#C47B5A` · Encre `#2B1F16`

Typos : Italiana (titres), Fraunces italic (accents), Manrope (corps).

## Élément signature
**Agate scroll-liée** : bouton de retour-en-haut en bas-droite avec anneaux concentriques qui s'allument progressivement au fur et à mesure du scroll.

## Arborescence

```
Terre-Sereine/
├── index.html                      # Accueil (design intact depuis la maquette)
├── a-propos.html                   # Maison + valeurs + marques partenaires
├── services.html                   # Liste des 6 rituels
├── services/
│   ├── headspa.html
│   ├── hydra-face.html
│   ├── maderotherapie.html
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
        └── _house-of-peau-logo.webp  # préfixée _ car non utilisée
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
14. **Menu overlay mobile éditorial** : background gradient 165°, watermark géant "SEREINE" en Italiana, brand en haut (logo + nom), navigation numérotée 01-05 avec trait doré au hover, bloc coordonnées (tel/email/horaires), CTA "Prendre rendez-vous" pleine largeur, socials en bas. Apparition en cascade des 5 sections (delay 80ms).
15. **Watermark animé sur les page-header** : reprend l'animation `heroGlide` du hero (translation horizontale infinie, 46s linear). Mot répété 4× avec `·` dans `data-watermark` pour garantir une boucle invisible.

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
