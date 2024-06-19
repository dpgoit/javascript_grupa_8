"use strict";
// Exemplu 4 - Ramificări imbricate
// Scrieți un script care să compare numerele din variabilele a și b. Dacă ambele valori sunt mai mari de 100, atunci să imprime maximul lor în consolă. Altfel, consola ar trebui să arate suma valorii b și numărul 512.

const a = 120; // > 100
const b = 0; // > 100

if (a >= 100 && b >= 100) {
  console.log(Math.max(a, b));
} else {
  console.log(b + 512);
}
