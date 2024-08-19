const ENDPOINT = 'https://newsapi.org/v2/everything';
const API_KEY = 'dd82ff3604224bf1b224da3ef75c9135';

const ENDPOINT2 = 'https://66bb8fe96a4ab5edd638c5b9.mockapi.io/faculties';

function getTutors() {
  fetch(ENDPOINT2, { method: 'GET' })
    .then(res => {
      return res.json();
    })
    .then(data => console.log(data));
}

getTutors();

const newFaculty = {
  name: 'Faculty of Computer Science',
  description:
    'The Faculty of Computer Science offers a wide range of computer science programs and research opportunities.',
  history:
    'Founded in 1985, the Faculty of Computer Science has a rich history of academic excellence.',
};

function postFaculty(faculty) {
  fetch('https://66bb8fe96a4ab5edd638c5b9.mockapi.io/faculties', {
    method: 'POST',
    body: JSON.stringify(faculty),
  });
}

postFaculty(newFaculty);
