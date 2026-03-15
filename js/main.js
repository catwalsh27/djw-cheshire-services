/* ============================================================
   Daniel J Walsh Electrical Services — main.js
   ============================================================
   Handles:
   - Hamburger nav toggle
   - Close nav on link click
   - Active nav link highlighting
   - Gallery lightbox (used on gallery.html)
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. Hamburger nav toggle
  ---------------------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var mainNav   = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close nav when any nav link is clicked (useful on mobile) */
    var navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     2. Active nav link
     Highlights the link whose href matches the current page.
  ---------------------------------------------------------- */
  (function setActiveNav() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.main-nav a');
    links.forEach(function (link) {
      var linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  })();

  /* ----------------------------------------------------------
     3. Gallery lightbox
     Only initialises if the gallery grid is present on the page.
  ---------------------------------------------------------- */
  (function initLightbox() {
    var galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    var lightbox        = document.getElementById('lightbox');
    var lightboxMedia   = document.getElementById('lightbox-media');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var lightboxClose   = document.getElementById('lightbox-close');

    if (!lightbox) return;

    /* Open lightbox when a gallery item is clicked */
    galleryGrid.addEventListener('click', function (e) {
      var item = e.target.closest('.gallery-item');
      if (!item) return;

      /* Get caption */
      var captionEl = item.querySelector('.gallery-item__caption');
      var caption   = captionEl ? captionEl.textContent : '';

      /* Check if there's a real img or just the placeholder */
      var img = item.querySelector('img');

      lightboxMedia.innerHTML = '';

      if (img) {
        var newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt || caption;
        lightboxMedia.appendChild(newImg);
      } else {
        /* Show placeholder in lightbox */
        var placeholder = document.createElement('div');
        placeholder.style.cssText = [
          'display:flex',
          'align-items:center',
          'justify-content:center',
          'width:100%',
          'height:100%',
          'color:#888',
          'font-size:0.95rem',
          'flex-direction:column',
          'gap:10px'
        ].join(';');
        placeholder.innerHTML = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Photo coming soon</span>';
        lightboxMedia.appendChild(placeholder);
      }

      lightboxCaption.textContent = caption;
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });

    /* Close lightbox */
    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  })();

})();
