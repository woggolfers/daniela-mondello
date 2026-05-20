/* ============================================================
   DANIELA MONDELLO APD — MAIN JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── ACTIVE NAV LINK ────────────────────────────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── MOBILE MENU ────────────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  /* ── CONTACT FORM ───────────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = document.getElementById('cf-name').value.trim();
      const email   = document.getElementById('cf-email').value.trim();
      const message = document.getElementById('cf-msg').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      document.getElementById('form-fields').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    });
  }

  /* ── RECIPE FILTER ──────────────────────────────────────── */
  const recipeFilters = document.querySelectorAll('.recipe-filter');
  const recipeCards   = document.querySelectorAll('.recipe-card-wrap');

  recipeFilters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      recipeFilters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      recipeCards.forEach(function (card) {
        if (cat === 'All' || card.dataset.cat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── BLOG FILTER ────────────────────────────────────────── */
  const blogFilters = document.querySelectorAll('.blog-filter');
  const blogCards   = document.querySelectorAll('.blog-card-wrap');

  blogFilters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      blogFilters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      blogCards.forEach(function (card) {
        if (cat === 'All' || card.dataset.cat === cat) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── SCROLL FADE-IN ─────────────────────────────────────── */
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-fade').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

});
