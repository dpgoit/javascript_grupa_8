"use strict";
// Exemplul 2 - Metoda Object.values()
// Avem un obiect care stochează salariile echipei noastre. Scrie codul pentru a suma toate salariile și a stoca rezultatul în variabila sum. Trebuie să obții 390. Dacă obiectul `salaries` este gol, atunci rezultatul ar trebui să fie 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

const salarii = Object.values(salaries);

for (let salariu of salarii) {
  sum += salariu;
}

console.log(sum);
