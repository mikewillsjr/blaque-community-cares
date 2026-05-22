/* ============================================
   BlaQue Community Cares — Shared JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Sticky Header: transparent → solid on scroll ---
  const header = document.querySelector('.site-header');
  if (header) {
    const scrollThreshold = 80;
    const updateHeader = () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.remove('site-header--transparent');
        header.classList.add('site-header--solid');
      } else {
        header.classList.remove('site-header--solid');
        header.classList.add('site-header--transparent');
      }
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  // --- Mobile Nav Toggle ---
  const hamburger = document.querySelector('.site-header__hamburger');
  const nav = document.querySelector('.site-header__nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      hamburger.classList.toggle('is-active');
    });
    // Close nav when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        hamburger.classList.remove('is-active');
      });
    });
  }

  // --- Scroll-reveal for sections ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('will-animate');
    observer.observe(el);
  });
});
