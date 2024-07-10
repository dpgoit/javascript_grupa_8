"use strict";

// Exemplul 7 - metoda forEach
// Fă refactorizarea codului folosind metoda `forEach` și funcții săgeată.

function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
