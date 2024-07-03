"use strict";
// Exemplul 3 - Array de obiecte
// Scrie o funcție `calcTotalPrice(stones, stoneName)` care primește un array de obiecte și un șir de caractere cu numele pietrei. Funcția calculează și returnează costul total al pietrelor cu același nume, preț și cantitate din obiect.

const stones = [
  { name: "Emerald", price: 1300, quantity: 4 },
  { name: "Diamond", price: 2700, quantity: 3 },
  { name: "Sapphire", price: 400, quantity: 7 },
  { name: "Rubble", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (let piatra of stones) {
    console.log(piatra);
    if (piatra.name === stoneName) {
      return piatra.price * piatra.quantity;
    }
  }
  return 0;
}

console.log(calcTotalPrice(stones, "Diamond"));
console.log(calcTotalPrice(stones, "Rubble"));
