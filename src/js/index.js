// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import {
  displayScreens,
  displayWebButtons,
  displayJsItems,
  nextSlider,
  prevSlider,
} from "../js/displayScreens.js";
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";
import { darkModeToggle } from "../js/darkMode.js";
import { openModal } from "../js/openModal.js";

const menu = document.getElementById("menu");
const webButtons = document.getElementById("web-buttons");
const darkMode = document.getElementById("dark-mode");
const accordion = document.getElementById("accordion");
const galleryButtonNext = document.getElementById("arrow-right");
const galleryButtonPrev = document.getElementById("arrow-left");
const darkModeButton = document.getElementById("dark-mode");
const designProjects = document.getElementById("design-projects");

displayScreens("intro", galleryButtonNext, galleryButtonPrev);

menu.addEventListener("click", (e) => {
  if (e.target.dataset.menu) {
    displayScreens(e.target.dataset.menu, galleryButtonNext, galleryButtonPrev);
  }
});

webButtons.addEventListener("click", (e) => {
  displayWebButtons(
    e.target.dataset.button,
    galleryButtonNext,
    galleryButtonPrev
  );
});

accordion.addEventListener("click", (e) => {
  console.log(e.target.dataset.name);
  displayJsItems(e.target.dataset.name);
});

galleryButtonNext.addEventListener("click", (e) => {
  nextSlider();
});
galleryButtonPrev.addEventListener("click", (e) => {
  prevSlider();
});

darkModeButton.addEventListener("click", (e) => {
  darkModeToggle(darkMode, sun, moon);
});

designProjects.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.dataset.design) {
    openModal(e.target);
  }
});

if (window.matchMedia("(min-width: 455px)").matches) {
  darkMode.children[0].classList.add("dark-mode__text--show");
  darkMode.children[1].classList.remove("dark-mode__img--show");
} else {
  darkMode.children[0].classList.remove("dark-mode__text--show");
  darkMode.children[1].classList.add("dark-mode__img--show");
}

window.addEventListener("resize", (e) => {
  if (window.matchMedia("(min-width: 455px)").matches) {
    darkMode.children[0].classList.add("dark-mode__text--show");
    darkMode.children[1].classList.remove("dark-mode__img--show");
  } else {
    darkMode.children[0].classList.remove("dark-mode__text--show");
    darkMode.children[1].classList.add("dark-mode__img--show");
  }
});
