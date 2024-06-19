"use strict";
// Exemplu 3 - Ramificare
// Scrieți un script care să imprime șirul "Acesta este un număr pozitiv" în consolă, dacă utilizatorul a introdus un număr mai mare decât zero în prompt. Dacă a fost introdus zero, să afișeze în consolă șirul "Acesta este zero". Dacă se introduce un număr negativ, în consolă ar trebui să fie șirul "Acesta este un număr negativ".

const userInput = prompt("Introduceti un numar"); // 0
console.log(userInput);
console.log(typeof userInput);

if (userInput === null) {
  console.log("Campul de introducere este gol");
} else if ("0" > 0) {
  console.log("Acesta este un numar pozitiv!");
} else if (Number(userInput) < 0) {
  console.log("Acesta este un numar negativ!");
} else if (Number(userInput) === 0) {
  console.log("Acesta este un numar egal cu 0!");
} else {
  console.log("Introduce un numar!");
}
