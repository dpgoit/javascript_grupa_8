'use strict';
// const parentDiv = document.getElementById('parentDiv');
// const childA = document.getElementById('childA');

// document.body.addEventListener('click', event => {
//   alert('body');
// });

// parentDiv.addEventListener('click', () => {
//   alert('Parent Div');
// });

// childA.addEventListener('click', event => {
//   event.stopImmediatePropagation();
//   event.preventDefault();
//   alert('Child A first');
// });

// childA.addEventListener('click', event => {
//   alert('Child A second');
// });

// const elem = document.querySelector('section');
// elem.addEventListener('click', event => {
//   console.log(event.currentTarget);
//   console.log(event.target, 'target');
// });

// for (let elem of document.querySelectorAll('*')) {
//   elem.addEventListener('click', event => alert(`Sunt la elementul ${elem.tagName}`));
//   //   elem.addEventListener('click', event => alert(`Sunt la elementul ${elem.tagName}`), true);
// }

// Creează un calculator de costuri pentru produse în funcție de preț. Când lucrezi cu evenimente, folosește delegarea. Renderizează tot marcajul prin JS
// Când variabila data este introdusă în input #1 sau #2, costul total ar trebui să fie recalculat automat
// Moneda - USD ar trebui să fie întotdeauna afișată
// Suma totală este afișată cu zecimale (2 zecimale)
// În semnătura celui de-al doilea input, ar trebui să existe un indiciu de culoare despre câte livre a selectat utilizatorul pe al doilea input.
// Indiciul de culoare ar trebui să-și schimbe valoarea când slider-ul este tras.
// În input-ul nr. 2, setează pragurile min și max după cum dorești.
// La încărcarea paginii, scriptul ar trebui să calculeze automat costul pe baza datelor implicite pe care le setezi în marcaj.

// ! Rezolvare
// 1. am nevoie de ceva care sa stocheze informatii
// 2. selectarea elementelor

const data = {
  quantity: 0,
  price: 0,

  calcTotalPrice() {
    return (this.price * this.quantity).toFixed(2);
  },
};

const mainForm = document.getElementById('form');
const priceInput = document.getElementById('price');
const quantityAmount = document.getElementById('amount');
const quantityInput = document.getElementById('quantity');
const total = document.getElementById('total');

dataFill();
displayTotal();

mainForm.addEventListener('change', handleFormChange);

function handleFormChange(event) {
  console.log('change form');

  if (event.target === priceInput) {
    if (!Number(event.target.value)) {
      console.log('Not a number!');
      return;
    }
  } else if (event.target === quantityInput) {
    quantityAmount.textContent = event.target.value;
  }

  event.target.setAttribute('value', event.target.value);

  dataFill();
  displayTotal();
  console.log(data);
}

function dataFill() {
  data.price = priceInput.getAttribute('value');
  data.quantity = quantityInput.getAttribute('value');
}

function displayTotal() {
  total.textContent = data.calcTotalPrice() + ' USD';
}

console.log(data, 'prima data');
