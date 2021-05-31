const DrawerInitiator = {
  init({ button, drawer, iconMenu, iconClose, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._changeIcon({ button, drawer, iconMenu, iconClose });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      this._changeIcon({ button, drawer, iconMenu, iconClose });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _changeIcon({ button, drawer, iconMenu, iconClose }) {
    if (drawer.classList.contains('open')) {
      iconMenu.style.display = 'none';
      iconClose.style.display = 'inline';
      button.setAttribute('aria-label', 'Close hamburger menu');
    } else {
      iconMenu.style.display = 'inline';
      iconClose.style.display = 'none';
      button.setAttribute('aria-label', 'Open hamburger menu');
    }
  },
};

export default DrawerInitiator;
