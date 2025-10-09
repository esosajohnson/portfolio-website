function toggleMenu() {
    const menu = document.querySelector(".dropdown-menu");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function preventHomeReload(e) {
  const currentPath = window.location.pathname;
  if (currentPath === '/' || currentPath.endsWith('/index.html')) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

const homeLink = document.getElementById('home-link');
const logoLink = document.getElementById('logo-link');
const mobileHomeLink = document.getElementById('mobile-home-link');
const mobileLogoLink = document.getElementById('mobile-logo-link');

if (homeLink) homeLink.addEventListener('click', preventHomeReload);
if (logoLink) logoLink.addEventListener('click', preventHomeReload);
if (mobileHomeLink) mobileHomeLink.addEventListener('click', preventHomeReload);
if (mobileLogoLink) mobileLogoLink.addEventListener('click', preventHomeReload);




