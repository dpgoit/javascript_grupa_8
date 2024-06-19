"use strict";
// Exemplu 2 - Afișarea timpului (if...else)
// Scrieți un script pentru a afișa orele și minutele în consola browserului ca un șir de format "14 ore 26 minute.". Dacă valoarea variabilei minutes este 0, atunci afișați șirul "14 fix", fără minute.

const ora = 14;
const minute = 0;
let afisare = null;

// if (minute === 0) {
//   afisare = `Este ora ${ora} fix`;
// } else {
//   afisare = `Este ora ${ora} si ${minute} minute.`;
// }
console.log(afisare);
if (minute > 0) {
  afisare = `Este ora ${ora} si ${minute} minute.`;
} else {
  afisare = `Este ora ${ora} fix`;
}

console.log(afisare);
