import { getNews } from './api.js';

const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formular = event.currentTarget;
  const inputValue = form.elements.news.value;

  const articles = getNews(inputValue);

  articles
    .then(data => {
      if (data.length === 0) {
        throw new Error('Nu este nici un articol disponibil');
      }

      const markup = data.map(article => createMarkup(article)).join('');

      updateNewsList(markup);
    })
    .catch(error => {
      document.getElementById('articlesWrapper').innerHTML = `<p>${error}</p>`;
    })
    .finally(() => {
      formular.reset();
    });
}

function createMarkup(article) {
  return `<div class="article-card">
  <h2 class="article-title>${article.title}</h2>
  <h3 class="article-author">${article.author || 'Anonym'}</h3>
  <img src=${article.urlToImage} class="article-img"  />
  <p class="article-description">${article.description}</p>
  <a href=${article.url} class="article-link" target="_blank">Read more</a>
  </div>`;
}

function updateNewsList(markup) {
  document.getElementById('articlesWrapper').innerHTML = markup;
}
