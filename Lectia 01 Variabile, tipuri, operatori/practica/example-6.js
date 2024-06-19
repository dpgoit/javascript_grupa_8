"use strict";
/* Exemplul 6 - Metodele șirurilor și concatenarea */
/* Scrieți un script care calculează indicele de masă corporală (BMI) al unei persoane.
Pentru aceasta, trebuie să împărțiți greutatea în kilograme la pătratul înălțimii persoanei în metri.*/

let greutate = "88,5";
let inaltime = "1.75";

greutate = Number.parseFloat(greutate.replace(",", "."));
console.log(greutate);
inaltime = Number.parseFloat(inaltime);
console.log(inaltime);

const bmi = greutate / Math.pow(inaltime, 2);
console.log(bmi.toFixed(1));
