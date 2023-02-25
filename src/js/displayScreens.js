const allArticles = document.querySelectorAll(".article");
const leftBar = document.getElementById("bar-left");
const rightBar = document.getElementById("bar-right");
const htmlCssGallery = document.getElementById("html-css-gallery");
const jsAccordion = document.getElementById("javascript-accordion");
const bar = document.querySelectorAll(".bar");
const webProjectTitle = document.getElementById("web-project-title");
const allAccrodionItems = document.querySelectorAll(".accordion__item");
const rootStyles = document.documentElement.style;
const allGalleryItems = document.querySelectorAll(".gallery__item");

const allGalleryItemsArray = [...allGalleryItems];

let counter = 0;

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
  webProjectTitle.classList.remove("web-project-title--show");
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

const displayWebButtons = (dataset, arrowRight, arrowLeft) => {
  if (dataset === "html") {
    arrowRight.classList.add("gallery__arrow--right--show");
    arrowLeft.classList.add("gallery__arrow--left--show");
    jsAccordion.classList.remove("accordion--show");
    htmlCssGallery.classList.add("gallery__container--show");
    webProjectTitle.classList.add("web-project-title--show");
    allAccrodionItems.forEach((item) => {
      item.classList.remove("accordion__item--show");
    });
  } else {
    arrowRight.classList.remove("gallery__arrow--right--show");
    arrowLeft.classList.remove("gallery__arrow--left--show");
    htmlCssGallery.classList.remove("gallery__container--show");
    jsAccordion.classList.add("accordion--show");
    webProjectTitle.classList.remove("web-project-title--show");
  }
};

const titleChange = () => {
  const titleArray = [
    "SunnySide",
    "Clipboard",
    "Blogger",
    "Huddle",
    "Insure",
    "Loopstudios",
  ];

  webProjectTitle.textContent = titleArray[counter];
};

const prevSlider = () => {
  if (counter !== 0) {
    counter--;
    rootStyles.setProperty("--slider-translate", counter * -100 + "%");
  } else {
    counter = allGalleryItemsArray.length - 1;
    rootStyles.setProperty("--slider-translate", counter * -100 + "%");
  }
  titleChange();
};

const nextSlider = () => {
  if (allGalleryItemsArray.length - 2 >= counter) {
    counter++;
    rootStyles.setProperty("--slider-translate", counter * -100 + "%");
  } else {
    counter = 0;
    rootStyles.setProperty("--slider-translate", counter);
  }
  titleChange();
};

export {
  displayScreens,
  displayWebButtons,
  displayJsItems,
  nextSlider,
  prevSlider,
};
