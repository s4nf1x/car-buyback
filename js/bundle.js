document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const yOffset = -200;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-mobile');
  const headerNav = document.querySelector('.header-nav');
  const body = document.body;

  function openMenu() {
    headerNav.classList.add('show');
  }

  function closeMenu() {
    headerNav.classList.remove('show');
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }

  document.addEventListener('click', function(event) {
    if (headerNav.classList.contains('show') &&
        !headerNav.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)) {
      closeMenu();
    }
  });


  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024 && headerNav.classList.contains('show')) {
      closeMenu();
    }
  });
});
