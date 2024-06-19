"use strict";
/* Exemplul 5 - Șiruri template */
/* Compuneți o frază folosind șirurile template: 
A has B bots in stock, unde A, B sunt variabile inserate în șir. */
const numeCompanie = "Denis SRL";
let adidasiDefecti = 150;
let adidasiReparati = 100;

const message = `Compania ${numeCompanie} are in depozit un numar de ${
  adidasiDefecti + adidasiReparati
} adidasi, din care ${adidasiDefecti} sunt defecti si ${adidasiReparati} sunt reparati.`;
console.log(message);
