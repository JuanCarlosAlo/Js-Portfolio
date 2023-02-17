const allArticles = document.querySelectorAll('.article');
const leftBar = document.getElementById('bar-left');
const rightBar = document.getElementById('bar-right');

const displayScreens = data => {
  console.log(data);
  allArticles.forEach(article => {
    if (article.id === data) {
      console.log(article.id);
      article.classList.add('article--show');
      leftBar.classList.add('bar--right--show');
      rightBar.classList.add('bar--left--show');
    } else article.classList.remove('article--show');
  });
};

export { displayScreens };
