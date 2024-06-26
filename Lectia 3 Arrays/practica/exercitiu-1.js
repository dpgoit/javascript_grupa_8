"use strict";
// Exemplul 1 - Operațiuni de bază cu un tablou
// 1. Creează un tablou `genres` cu elementele "Jazz" și "Blues".
// 2. Adaugă "Rock and Roll" la sfârșit.
// 3. Afișează primul element al tabloului în consolă.
// 4. Afișează ultimul element al tabloului în consolă. Codul ar trebui să funcționeze pentru un tablou de lungime aleatorie.
// 5. Elimină primul element și afișează-l în consolă.
// 6. Inserează "Country" și "Reggae" la începutul tabloului.

const genres = ["Jazz", "Blues"];
genres.push("Rock and Roll");
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
console.log(genres.shift());
genres.unshift("Country", "Reggae");
console.log(genres);
