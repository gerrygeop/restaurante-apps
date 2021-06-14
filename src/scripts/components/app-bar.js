class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1 class="nav-brand">Restaurante</h1>
      <button class="hamburger" id="hamburgerButton" aria-label="Open Hamburger menu">
          <span class="material-icons" id="iconMenu">menu</span>
          <span class="material-icons icon-close" id="iconClose">close</span>
      </button>

      <div class="nav-list" id="navigationDrawer">
          <a class="nav-item" href="#/home">Home</a>
          <a class="nav-item" href="#/favorite">Favorite</a>
          <a class="nav-item" href="https://github.com/gerrygeop" target="_blank" rel="noreferrer noopener">About</a>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
