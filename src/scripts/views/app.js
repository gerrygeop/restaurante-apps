import routes from '../routes/routes';
import UrlParser from '../routes/url-parse';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, iconMenu, iconClose, content }) {
    this._button = button;
    this._drawer = drawer;
    this._iconMenu = iconMenu;
    this._iconClose = iconClose;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      iconMenu: this._iconMenu,
      iconClose: this._iconClose,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseAciveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;