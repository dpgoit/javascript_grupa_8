"use strict";
// Exemplu 10 - Bucla for
// Scrieți o buclă for care să imprime numere în ordine crescătoare în consola browserului de la min la max, dar numai dacă numărul este multiplu de 5.

const max = 100;
const min = 20;

++min;
// 20 % 5 === 0; // > coonsole.log(20)
// 21 % 5 === 0; // >! coonsole.log(20)
// 22 % 5 === 0; // >! coonsole.log(20)

for (let i = min; i <= max; ++i) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

/* ! INTREBARI DE VERIFICARE !
1. Care sunt tipurile de date în JavaScript?
2. Ce este "NaN"? Cum se verifică dacă o valoare este NaN?
3. Care este diferența dintre "null" și "undefined"?
4. Care este diferența dintre egal strict (===) și egal (==)?
5. Cum funcționează operatorii logici !, &&, ||?
6. Care este diferența dintre variabilele "let" și "const"?
7. Ce este "scope" și cum funcționează în JavaScript?
*/
