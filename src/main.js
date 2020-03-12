import { changeViews } from './router/index.js';

const init = () => {
  changeViews(window.location.hash);
  window.addEventListener('hashchange', () => changeViews(window.location.hash));
};

window.addEventListener('load', init);

