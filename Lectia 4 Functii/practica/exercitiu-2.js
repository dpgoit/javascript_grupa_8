"use strict";
// Exemplu 2 - Cel mai mic număr
// Scrie o funcție `min(a,b)` care returnează cel mai mic dintre numerele `a` și `b`.

function min(a, b) {
  //! Varianta 1
  //   if (a < b) {
  //     return a;
  //   } else {
  //     return b;
  //   }
  //! Varianta 2
  //   return a < b ? a : b;
  // ! Varianta 3

  if (a < b) return a;

  return b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
