"use strict";
// Exemplul 2 - Tablouri și Șiruri de caractere
// Scrie un script pentru a calcula aria unui dreptunghi cu laturi, ale căror valori sunt stocate în variabila `values` ca un șir de caractere. Valorile sunt garantate a fi separate printr-un spațiu.

const values = "8,11";
const slides = values.split(",");
const area = slides[0] * slides[1];
console.log(slides);
console.log(area);
