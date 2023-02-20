const allArticles = document.querySelectorAll(".article");
const leftBar = document.getElementById("bar-left");
const rightBar = document.getElementById("bar-right");
const htmlCssGallery = document.getElementById("html-css-gallery");

const displayScreens = (data) => {
  console.log(data);
  allArticles.forEach((article) => {
    leftBar.classList.remove("bar--right--show");
    rightBar.classList.remove("bar--left--show");

    if (article.id === data) {
      console.log(article.id);
      article.classList.add("article--show");
    } else {
      article.classList.remove("article--show");
    }
  });
  leftBar.classList.add("bar--right--show");
  rightBar.classList.add("bar--left--show");
};

const displayWebButtons = (dataset) => {
  if (dataset === "html") {
    htmlCssGallery.classList.add("gallery__container--show");
  } else {
    htmlCssGallery.classList.remove("gallery__container--show");
  }
};

export { displayScreens, displayWebButtons };
