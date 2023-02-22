// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { displayScreens, displayWebButtons } from '../js/displayScreens.js';
import moon from '../assets/images/moon.svg';

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
  console.log(moon);
  if (window.matchMedia('(min-width: 455px)').matches) {
    darkMode.children[0].classList.add('dark-mode__text--show');
    darkMode.children[1].classList.remove('dark-mode__img--show');
  } else {
    darkMode.children[0].classList.remove('dark-mode__text--show');
    darkMode.children[1].classList.add('dark-mode__img--show');
  }
});
