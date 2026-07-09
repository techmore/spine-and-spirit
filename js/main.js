/* ========================================
   Spine & Spirit — Main Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

  // ----- Header scroll shadow -----
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ----- Mobile menu toggle -----
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- Active nav link -----
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath ||
        (href !== '/' && currentPath.startsWith(href)) ||
        (href === '/' && (currentPath === '/' || currentPath === ''))) {
      link.classList.add('active');
    }
  });

});
