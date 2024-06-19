"use strict";
/* Exemplul 4 - Clasa Math */
/* Scrieți un script care afișează în consolă valorile rotunjite în sus/jos, etc. ale variabilei value.
Utilizați metodele Math.floor(), Math.ceil() și Math.round().
Verificați ce se întâmplă în consolă pentru valorile "27.3" și "27.9".*/

const value1 = 27.3;
const value2 = -27.8;

console.log("Pentru value1");
console.log(Math.floor(value1)); // 27;
console.log(Math.ceil(value1)); // 28;
console.log(Math.round(value1)); // 27;
console.log("--------------------");
console.log("Pentru value2");
console.log(Math.floor(value2)); // 27
console.log(Math.ceil(value2)); // 28
console.log(Math.round(value2)); // 28
