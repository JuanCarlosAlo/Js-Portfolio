// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { displayScreens } from '../js/displayScreens.js';

const menu = document.getElementById('menu');

menu.addEventListener('click', e => {
  if (e.target.dataset.menu) {
    displayScreens(e.target.dataset.menu);
  }
});
