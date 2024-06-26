"use strict";

// Exemplul 4 - Tablouri și Bucla
// Scrie un script care afișează numele și numărul de telefon al utilizatorului în consolă. Variabilele `names` și `phones` stochează șiruri de nume și numere de telefon, separate prin virgule. Numărul de ordine al numelor și numerelor de telefon în șiruri indică o corespondență. Numărul de nume și numere de telefon este garantat a fi același.

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const namesArray = names.split(",");
const phonesArray = phones.split(",");
console.log(namesArray);

// console.log(`Nume ${namesArray[0]}: numar de telefon ${phonesArray[0]}`);
// console.log(`Nume ${namesArray[1]}: numar de telefon ${phonesArray[1]}`);
// console.log(`Nume ${namesArray[2]}: numar de telefon ${phonesArray[2]}`);
// console.log(`Nume ${namesArray[3]}: numar de telefon ${phonesArray[3]}`);

for (let i = 0; i < namesArray.length; i++) {
  console.log(`Nume ${namesArray[i]}: numar de telefon ${phonesArray[i]}`);
}
