"use strict";
// Exemplul 3 - Iterarea unui tablou
// Scrie un script pentru a itera peste tabloul `fruits` cu un `for` loop. Pentru fiecare element din tablou afișează o linie în formatul `element_number: element_value` în consolă. Numerotarea elementelor trebuie să înceapă de la `1`.

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// console.log(`Element number 1 :  element value ${fruits[0]}`);
// console.log(`Element number 2 :  element value ${fruits[1]}`);
// console.log(`Element number 3 :  element value ${fruits[2]}`);
// console.log(`Element number 4 :  element value ${fruits[3]}`);
// console.log(`Element number 5 :  element value ${fruits[4]}`);

for (let i = 0; i < fruits.length; i++) {
  console.log(`Element number ${i + 1} :  element value ${fruits[i]}`);
}
