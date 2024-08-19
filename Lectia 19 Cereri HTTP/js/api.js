const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'dd82ff3604224bf1b224da3ef75c9135';

const headers = new Headers({
  'X-Api-Key': API_KEY,
});

function getNews(query) {
  return fetch(`${ENDPOINT}?q=${query}&pageSize=10`, {
    headers: headers,
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      return data.articles;
    });
}

export { getNews };
