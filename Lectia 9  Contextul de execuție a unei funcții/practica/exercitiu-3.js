"use strict";

// Exemplul 3 - Calculator

// Creează un obiect `calculator` cu trei metode:

// - `read(a, b)`- ia două valori și le stochează ca proprietăți ale obiectului.
// - `add()` - returnează suma valorilor stocate.
// - `mult()` - înmulțește valorile stocate și returnează rezultatul.

const calculator = {
  a: 0,
  b: 0,

  read(primaValoare, aDouaValoare) {
    this.a = primaValoare;
    this.b = aDouaValoare;
  },

  add() {
    return this.a + this.b;
  },

  mult() {
    return this.a * this.b;
  },
};

calculator.read(10, 5);
console.log(calculator);
console.log(calculator.add());
console.log(calculator.mult());
