// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { displayScreens, displayWebButtons } from '../js/displayScreens.js';

const menu = document.getElementById('menu');
const webButtons = document.getElementById('web-buttons');
const darkMode = document.getElementById('dark-mode');

menu.addEventListener('click', e => {
  if (e.target.dataset.menu) {
    displayScreens(e.target.dataset.menu);
  }
});

webButtons.addEventListener('click', e => {
  displayWebButtons(e.target.dataset.button);
});

window.addEventListener('resize', e => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    darkMode.textContent = 'DARK MODE';
  } else {
    darkMode.textContent = '';
  }
});
