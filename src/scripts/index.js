import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './card-item.js';
import App from './views/app';

const app = new App({
  button: document.getElementById('hamburgerButton'),
  drawer: document.getElementById('navigationDrawer'),
  content: document.getElementById('mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

console.log('Hello Coders! :)');
