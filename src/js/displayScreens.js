const allArticles = document.querySelectorAll('.article');
const leftBar = document.getElementById('bar-left');
const rightBar = document.getElementById('bar-right');
const htmlCssGallery = document.getElementById('html-css-gallery');
const jsAccordion = document.getElementById('javascript-accordion');
const bar = document.querySelectorAll('.bar');

const openBars = () => {
  bar.forEach(barElement => {
    barElement.classList.add('bar--show');
  });
  leftBar.addEventListener('transitionend', () => {
    const timeoutId = setTimeout(() => {
      leftBar.classList.add('bar--left--show');
      clearTimeout(timeoutId);
    }, 200);
  });
  rightBar.addEventListener('transitionend', () => {
    const timeoutId = setTimeout(() => {
      rightBar.classList.add('bar--right--show');
      clearTimeout(timeoutId);
    }, 200);
  });
};

const displayScreens = data => {
  console.log(data);
  bar.forEach(barElement => {
    console.log('hola');
    barElement.classList.remove('bar--show');
  });
  leftBar.classList.remove('bar--left--show');
  rightBar.classList.remove('bar--right--show');

  allArticles.forEach(article => {
    if (article.id === data) {
      console.log(article.id);
      article.classList.add('article--show');
    } else {
      article.classList.remove('article--show');
    }
  });

  openBars();
};

const displayWebButtons = dataset => {
  if (dataset === 'html') {
    jsAccordion.classList.remove('accordion__container--show');
    htmlCssGallery.classList.add('gallery__container--show');
  } else {
    htmlCssGallery.classList.remove('gallery__container--show');
    jsAccordion.classList.add('accordion__container--show');
  }
};

export { displayScreens, displayWebButtons };
