

// nav = document.querySelector("nav.menu");

// nav.setAttribute('aria-hidden', 'false');

const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('nav.menu');

toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  nav.setAttribute('aria-hidden', nav.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
  toggle.setAttribute('aria-expanded', toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });

const isOpen = toggle.ariaExpanded === "true";
const isClosed = !isOpen;
console.log("isOpen : ", isOpen, "isClosed : ", isClosed);

body.classList.toggle('noscroll', willOpen);