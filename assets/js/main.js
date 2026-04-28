// Terre Sereine — interactions globales
// Toutes les manipulations sont null-safe pour fonctionner sur n'importe quelle page.

(function () {
  'use strict';

  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const agate = document.getElementById('agate');
  const agateRings = agate ? agate.querySelectorAll('circle:not(.center-dot)') : [];

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

  // Formulaire de contact : démo (pas de backend pour l'instant)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      contactForm.reset();
    });
  }
})();
