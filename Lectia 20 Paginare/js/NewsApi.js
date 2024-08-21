const ENDPOINT = 'https://newsapi.org/v2/everything'; // URL-ul de bază al API-ului de știri.
const API_KEY = 'af0e766a1ccf475588965f28a4346fe4'; // Cheia API pentru autentificare.

export default class NewsApi {
  constructor() {
    this.queryPage = 1; // Inițializează numărul paginii la 1.
    this.searchQuery = ''; // Inițializează interogarea de căutare cu un string gol.
  }

  getNews() {
    // Construcția URL-ului pentru cererea API, incluzând interogarea de căutare, numărul de articole pe pagină și pagina curentă.
    const url = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.queryPage}`;
    const options = {
      headers: {
        'X-Api-Key': API_KEY, // Cheia API este trecută în antetul cererii pentru autentificare.
      },
    };

    // Efectuează o cerere GET la API-ul de știri folosind axios.
    return axios
      .get(url, options)
      .then(response => {
        this.incrementPage(); // Incrementează numărul paginii pentru următoarea cerere.
        return response.data; // Returnează datele (articolele) din răspunsul API.
      })
      .catch(error => {
        console.error('Error fetching news:', error); // Afișează eroarea în consolă în caz de eșec.
        throw error; // Aruncă eroarea mai departe pentru a fi gestionată ulterior.
      });
  }

  resetPage() {
    this.queryPage = 1; // Resetează numărul paginii la 1, de obicei atunci când se inițiază o nouă căutare.
  }

  incrementPage() {
    this.queryPage += 1; // Incrementează numărul paginii cu 1, pregătind pentru următoarea cerere.
  }
}
