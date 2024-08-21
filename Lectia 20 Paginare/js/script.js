import LoadMoreBtn from './components/LoadMoreBtn.js';
import NewsApi from './NewsApi.js';

const form = document.getElementById('form');
const loadMoreBtn = new LoadMoreBtn({
  selector: '#loadMoreBtn',
  isHidden: true, // Inițial, butonul "Load More" este ascuns.
});

const newsApi = new NewsApi(); // Instanță a clasei NewsApi pentru a gestiona cererile de știri.

form.addEventListener('submit', onSubmit); // Adaugă un event listener pentru submit-ul formularului.
loadMoreBtn.button.addEventListener('click', fetchNews); // Adaugă un event listener pentru click-ul pe butonul "Load More".

function onSubmit(e) {
  e.preventDefault(); // Previne comportamentul default al formularului.

  const form = e.currentTarget;
  newsApi.searchQuery = form.elements.news.value.trim(); // Preia valoarea introdusă de utilizator și o setează ca query pentru API.
  clearNewsList(); // Golește lista de articole anterioare.
  newsApi.resetPage(); // Resetează pagina de căutare la prima pagină.
  loadMoreBtn.show(); // Afișează butonul "Load More".

  fetchNews().finally(() => form.reset()); // Apelează funcția fetchNews pentru a prelua articolele și resetează formularul.
}

function fetchNews() {
  loadMoreBtn.disable(); // Dezactivează temporar butonul "Load More" pentru a preveni click-urile multiple.
  return newsApi
    .getNews() // Apelează metoda getNews din NewsApi pentru a prelua articolele.
    .then(({ articles }) => {
      if (articles.length === 0) throw new Error('No data'); // Verifică dacă există articole disponibile; dacă nu, aruncă o eroare.

      return articles.reduce((markup, article) => createMarkup(article) + markup, '');
      // Creează markup-ul HTML pentru fiecare articol folosind funcția createMarkup și le combină într-un singur string.
    })
    .then(markup => {
      updateNewsList(markup); // Adaugă markup-ul generat în DOM.
      loadMoreBtn.enable(); // Re-activează butonul "Load More".
    })
    .catch(onError); // În caz de eroare, apelează funcția onError.
}

function createMarkup({ author, title, description, url, urlToImage }) {
  // Creează și returnează markup-ul HTML pentru un singur articol.
  return `
        <div class="article-card">
            <img src=${urlToImage} class="article-img">
            <h2 class="article-title">${title}</h2>
            <h3 class="article-author">${author || 'Anonym'}</h3>
            <p class="article-description">${description}</p>
            <a href=${url} class="article-link" target="_blank">Read more</a>
        </div>
        
        `;
}

function clearNewsList() {
  document.getElementById('articlesWrapper').innerHTML = ''; // Golește conținutul containerului de articole.
}

function updateNewsList(markup) {
  document.getElementById('articlesWrapper').insertAdjacentHTML('beforeend', markup);
  // Adaugă markup-ul nou creat la sfârșitul conținutului existent.
}

function onError(err) {
  console.error(err); // Afișează eroarea în consolă.
  updateNewsList('<p>Articles not found</p>'); // Afișează un mesaj de eroare în interfață.
}
