// Theme toggle & mobile menu controller
(function () {
  const html = document.documentElement;
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const sunIcons = document.querySelectorAll('.sun-icon');
  const moonIcons = document.querySelectorAll('.moon-icon');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-link');
  const backToTopBtn = document.querySelector('.back-to-top');

  function updateIcons(isDark) {
    sunIcons.forEach(el => el.style.display = isDark ? 'block' : 'none');
    moonIcons.forEach(el => el.style.display = isDark ? 'none' : 'block');
  }

  function applyTheme(isDark) {
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    updateIcons(isDark);
  }

  // Initial theme check
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : systemDark;
  applyTheme(isDark);

  // Toggle handlers
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const willBeDark = !html.classList.contains('dark');
      applyTheme(willBeDark);
      localStorage.setItem('theme', willBeDark ? 'dark' : 'light');
    });
  });

  // Mobile menu toggle
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
