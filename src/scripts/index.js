import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.min.css';
import './components/app-bar';
import './components/loading-spinner';
import './components/restaurant-list';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.getElementById('hamburgerButton'),
  drawer: document.getElementById('navigationDrawer'),
  iconMenu: document.getElementById('iconMenu'),
  iconClose: document.getElementById('iconClose'),
  content: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

console.log('Hello Coders! :)');
