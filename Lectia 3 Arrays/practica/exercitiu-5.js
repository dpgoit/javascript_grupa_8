"use strict";

// Exemplul 5 - Tablouri și Șiruri de caractere
// Scrie un script care afișează în consolă toate cuvintele unui șir de caractere, cu excepția primului și ultimului. Șirul rezultat nu trebuie să înceapă sau să se termine cu un caracter de spațiu. Scriptul ar trebui să funcționeze pentru orice șir de caractere.

// const string = "Welcome to the future";
// const words = string.split(" ");
// console.log(words);
// words.shift();
// console.log(words);
// words.pop();
// console.log(words);
// const str = words.join(" ");
// console.log(str);

// Exemplul 6 - Tablouri și Șiruri de caractere
// Scrie un script care "desface" un șir de caractere (inversarea ordinii literelor) și îl afișează în consolă.
// const string = "Welcome to the future";
// const words = string.split("");
// console.log(words);
// const words2 = words.reverse();
// console.log(words2);
// const str = words2.join("");
// console.log(str);

// const string = "Welcome to the future";
// const reverseString = string.split("").reverse().join("");
// console.log(reverseString);

// Exemplul 7 - Căutarea unui element
// Scrie un script pentru a găsi cel mai mic număr într-un tablou. Codul ar trebui să funcționeze pentru orice tablou de numere. Folosește un bucla pentru a rezolva problema.

// iterare prin array (for cu let i sau for of) / variabila ce contine cel mai mic numar

const numbers = [55, 77, 94, 14, 23, 37];
let min = numbers[0];

// for of sau for cu let i

console.log(min); // 14
