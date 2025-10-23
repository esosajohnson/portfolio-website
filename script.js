function toggleMenu() {
    const menu = document.querySelector(".dropdown-menu");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function preventHomeReload(e) {
  const currentPath = window.location.pathname;
  if (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath.endsWith('/')) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

const homeLink = document.getElementById('home-link');
const logoLink = document.getElementById('logo-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
const mobileHomeLink = document.getElementById('mobile-home-link');
const mobileLogoLink = document.getElementById('mobile-logo-link');
const mobileAboutLink = document.getElementById('mobile-about-link');
const mobileContactLink = document.getElementById('mobile-contact-link');

if (homeLink) homeLink.addEventListener('click', preventHomeReload);
if (logoLink) logoLink.addEventListener('click', preventHomeReload);
if (aboutLink) aboutLink.addEventListener('click', preventHomeReload);
if (contactLink) contactLink.addEventListener('click', preventHomeReload);
if (mobileHomeLink) mobileHomeLink.addEventListener('click', preventHomeReload);
if (mobileLogoLink) mobileLogoLink.addEventListener('click', preventHomeReload);
if (mobileAboutLink) mobileAboutLink.addEventListener('click', preventHomeReload);
if (mobileContactLink) mobileContactLink.addEventListener('click', preventHomeReload);

// =============================
// CONTACT FORM HANDLER
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = new FormData(form);

      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("✅ Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        alert("❌ Oops! Something went wrong. Please try again later.");
      }
    });
  }
});
