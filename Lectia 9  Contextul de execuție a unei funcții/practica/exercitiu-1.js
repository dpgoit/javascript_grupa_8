"use strict";

// Exemplul 1 - Atelier de bijuterii

// Scrie o metodă `calcTotalPrice(stoneName)` care ia numele unei pietre,
// calculează și returnează costul total al pietrelor cu acel nume, preț și
// cantitate din proprietatea `stones`.

const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],

  calcTotalPrice(stoneName) {
    // ! Metoda 1
    // const stone = this.stones.find((value) => value.name === stoneName);
    // return stone ? stone.price * stone.quantity : 0;

    // ! Metoda 2
    // return this.stones
    //   .filter((value) => value.name === stoneName)
    //   .reduce((total, stone) => total + stone.price * stone.quantity, 0);

    // ! Metoda 3
    return this.stones.reduce((total, stone) => {
      if (stone.name === stoneName) {
        return stone.price * stone.quantity;
      }

      return total;
    }, 0);
  },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600
