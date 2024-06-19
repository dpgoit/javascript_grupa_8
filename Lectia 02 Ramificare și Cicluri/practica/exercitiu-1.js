"use strict";
// Exemplu 1 - Introducerea utilizatorului și ramificare
// Utilizând construcțiile if..else și prompt, scrieți cod care va întreba: "Care este numele oficial al JavaScript?". Dacă utilizatorul introduce ECMAScript, atunci afișați un alert cu șirul "Corect!", altfel - "Nu știi? ECMAScript!".

const raspuns = prompt("Care este numele oficial al Javascript?");
const raspunsCorect = "ECMAScript";

let testRaspuns = "testing";

if (raspuns === raspunsCorect) {
  console.log("Corect!");
  testRaspuns = "Denis";
} else {
  console.log("Nu știi? ECMAScript!");
}

console.log(testRaspuns);
