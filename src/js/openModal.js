import { data } from "../js/const.js";

const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modal-container");
const crossIcon = document.getElementById("cross-icon");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const allDesignElements = document.querySelectorAll(".design__item");

const openModal = (clcikedElement) => {
  const arrayDesign = [...allDesignElements];
  const index = arrayDesign.indexOf(clcikedElement);

  modal.classList.add("modal--show");
  modalContainer.classList.add("modal__container--show");
  modalImg.src = data[index].src;
  modalTitle.textContent = data[index].title;
  modalText.textContent = data[index].text;
  crossIcon.addEventListener("click", (e) => {
    modalContainer.classList.remove("modal__container--show");
    modal.classList.remove("modal--show");
  });
};

export { openModal };
