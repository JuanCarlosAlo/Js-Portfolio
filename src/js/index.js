// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { displayScreens, displayWebButtons } from "../js/displayScreens.js";

const menu = document.getElementById("menu");
const webButtons = document.getElementById("web-buttons");

menu.addEventListener("click", (e) => {
  if (e.target.dataset.menu) {
    displayScreens(e.target.dataset.menu);
  }
});

webButtons.addEventListener("click", (e) => {
  displayWebButtons(e.target.dataset.button);
});
