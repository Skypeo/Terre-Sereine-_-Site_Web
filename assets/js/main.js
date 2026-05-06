// Terre Sereine — interactions globales
// Toutes les manipulations sont null-safe pour fonctionner sur n'importe quelle page.

(function () {
  'use strict';

  // === LOADER : fade out au chargement (s'affiche sur chaque page) ===
  const loader = document.getElementById('siteLoader');
  if (loader) {
    const minDuration = 300;
    const start = performance.now();
    const hide = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDuration - elapsed);
      setTimeout(() => {
        loader.classList.add('is-hidden');
        document.body.classList.remove('is-loading');
        loader.addEventListener('transitionend', () => loader.remove(), { once: true });
      }, wait);
    };
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide, { once: true });
    }
  }

  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const agate = document.getElementById('agate');
  const agateRings = agate ? agate.querySelectorAll('circle') : [];

  // Scroll : scrolled state header + visibilité agate + remplissage anneaux
  if (header || agate) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;

      if (header) header.classList.toggle('scrolled', y > 40);

      if (agate) {
        agate.classList.toggle('visible', y > 320);

        if (agateRings.length) {
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          const pct = maxScroll > 0 ? Math.min(1, y / maxScroll) : 0;
          agateRings.forEach((c, i) => {
            const step = i / agateRings.length;
            c.style.opacity = pct > step ? '.9' : '0';
          });
        }
      }
    }, { passive: true });
  }

  // Click agate : retour en haut
  if (agate) {
    agate.addEventListener('click', () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  // Burger mobile
  if (burger && mobileMenu) {
    const mobileSublist = document.getElementById('mobile-services-sublist');
    const mobileToggle = document.querySelector('.mobile-section-toggle');

    const collapseSublist = () => {
      if (mobileSublist) mobileSublist.classList.remove('is-open');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    };

    const closeMenu = () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      collapseSublist();
    };

    burger.addEventListener('click', () => {
      const opening = !mobileMenu.classList.contains('open');
      burger.classList.toggle('active', opening);
      mobileMenu.classList.toggle('open', opening);
      document.body.style.overflow = opening ? 'hidden' : '';
      if (!opening) collapseSublist();
    });

    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    if (mobileToggle && mobileSublist) {
      mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = mobileSublist.classList.toggle('is-open');
        mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  }

  // Galerie : filtres
  const gallery = document.querySelector('.gallery-grid');
  const filters = document.querySelectorAll('.gallery-filter');
  if (gallery && filters.length) {
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const cat = btn.dataset.filter;
        gallery.querySelectorAll('figure').forEach(fig => {
          const cats = (fig.dataset.cat || '').split(' ');
          fig.style.display = (cat === 'all' || cats.includes(cat)) ? '' : 'none';
        });
      });
    });
  }

  // Formulaire de contact : envoi via Web3Forms (clé dans web3forms-config.js, gitignored)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const successBox = document.getElementById('form-success');
    const errorBox = document.getElementById('form-error');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const accessKeyInput = contactForm.querySelector('input[name="access_key"]');

    // Injection de la clé Web3Forms (depuis window.WEB3FORMS_KEY)
    if (accessKeyInput && typeof window.WEB3FORMS_KEY === 'string') {
      accessKeyInput.value = window.WEB3FORMS_KEY;
    }

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (errorBox) errorBox.hidden = true;
      if (successBox) successBox.classList.remove('show');

      // Garde-fou : si la clé n'est pas chargée, on bloque
      if (!accessKeyInput || !accessKeyInput.value) {
        if (errorBox) {
          errorBox.hidden = false;
          errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      const originalLabel = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Envoi en cours…';
      }

      try {
        const formData = new FormData(contactForm);
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        const data = await res.json().catch(() => ({}));

        if (res.ok && data.success) {
          if (successBox) {
            successBox.classList.add('show');
            successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          contactForm.reset();
          // Re-injection de la clé après reset (les hidden inputs perdent leur valeur)
          if (accessKeyInput) accessKeyInput.value = window.WEB3FORMS_KEY;
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        if (errorBox) {
          errorBox.hidden = false;
          errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        }
      }
    });
  }

  // === REVEAL ON SCROLL : apparition en cascade des éléments de section ===
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    // Sélecteurs ciblant des "feuilles" (pas de nesting parent/enfant entre eux)
    // pour éviter qu'un parent caché bloque l'apparition de ses enfants.
    const revealSelectors = [
      '.hero-text > *', '.hero-photo',
      '.maison-text > *', '.maison-photos',
      '.rituels-head > *', '.rituels-grid > .rituel',
      '.marques-eyebrow', '.marques h2', '.marques-intro',
      '.marques-grid > .marque',
      '.rdv-text > *', '.rdv-photo',
      '.service-detail-photo',
      '.service-detail-meta', '.service-detail h2', '.service-detail-lede',
      '.service-bullets', '.service-cta',
      '.service-info > *',
      '.page-section > *',
      '.related-services h2', '.related-grid > .related-card',
      '.gallery-head > *', '.gallery-grid > figure',
      '.contact-inner > *',
      '.page-header > *',
      '.final-cta-inner > *',
      '.legal-content > *',
      '.about-values-grid > *',
    ].join(',');

    const items = Array.from(document.querySelectorAll(revealSelectors));
    items.forEach(el => el.classList.add('reveal'));

    // Stagger : index de l'élément parmi ses voisins .reveal du même parent
    items.forEach(el => {
      const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
      const idx = siblings.indexOf(el);
      if (idx > 0) {
        const delay = Math.min(idx * 0.08, 0.5);
        el.style.setProperty('--reveal-delay', delay + 's');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

    items.forEach(el => observer.observe(el));
  }
})();
