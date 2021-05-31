const hamBtn = document.getElementById('hamburger');
const drawerEl = document.getElementById('drawer');
const mainEl = document.querySelector('main');

const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

hamBtn.addEventListener('click', (event) => {
  const menuOpen = drawerEl.classList.toggle('open');

  if (menuOpen) {
    iconMenu.style.display = 'none';
    iconClose.style.display = 'inline';
    hamBtn.setAttribute('aria-label', 'Close Hamburger Menu');
  } else {
    iconMenu.style.display = 'inline';
    iconClose.style.display = 'none';
    hamBtn.setAttribute('aria-label', 'Open Hamburger Menu');
  }
  event.stopPropagation();
});

mainEl.addEventListener('click', (event) => {
  drawerEl.classList.remove('open');
  event.stopPropagation();
});
