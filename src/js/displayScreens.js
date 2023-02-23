const allArticles = document.querySelectorAll(".article");
const leftBar = document.getElementById("bar-left");
const rightBar = document.getElementById("bar-right");
const htmlCssGallery = document.getElementById("html-css-gallery");
const jsAccordion = document.getElementById("javascript-accordion");
const bar = document.querySelectorAll(".bar");
const webProjectTitle = document.getElementById("web-project-title");
const allAccrodionItems = document.querySelectorAll(".accordion__item");

const openBars = () => {
  bar.forEach((barElement) => {
    barElement.addEventListener("transitionend", () => {
      const timeoutId = setTimeout(() => {
        barElement.classList.remove("bar--close");
        clearTimeout(timeoutId);
      }, 200);
    });
  });
  leftBar.addEventListener("transitionend", () => {
    const timeoutId = setTimeout(() => {
      leftBar.classList.remove("bar--left--close");
      clearTimeout(timeoutId);
    }, 200);
  });
  rightBar.addEventListener("transitionend", () => {
    const timeoutId = setTimeout(() => {
      rightBar.classList.remove("bar--right--close");
      clearTimeout(timeoutId);
    }, 200);
  });
};

const displayScreens = (data) => {
  jsAccordion.classList.remove("accordion--show");
  htmlCssGallery.classList.remove("gallery__container--show");
  bar.forEach((barElement) => {
    barElement.classList.add("bar--close");
  });
  leftBar.classList.add("bar--left--close");
  rightBar.classList.add("bar--right--close");
  openBars();
  allArticles.forEach((article) => {
    if (article.id === data) {
      console.log(article.id);
      article.classList.add("article--show");
    } else {
      article.classList.remove("article--show");
    }
  });
};

const displayJsItems = (data) => {
  allAccrodionItems.forEach((item) => {
    console.log(data, item.id);
    if (data === item.id) {
      item.classList.add("accordion__item--show");
    } else {
      item.classList.remove("accordion__item--show");
    }
  });
};

const displayWebButtons = (dataset) => {
  console.log(jsAccordion.children[0]);
  if (dataset === "html") {
    jsAccordion.classList.remove("accordion--show");
    htmlCssGallery.classList.add("gallery__container--show");
    webProjectTitle.classList.add("web-project-title--show");
  } else {
    htmlCssGallery.classList.remove("gallery__container--show");
    jsAccordion.classList.add("accordion--show");
    webProjectTitle.classList.remove("web-project-title--show");
  }
};

export { displayScreens, displayWebButtons, displayJsItems };
