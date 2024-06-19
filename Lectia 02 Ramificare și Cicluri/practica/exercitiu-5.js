"use strict";
// Exemplu 5 - Formatarea link-urilor (endsWith)
// Scrieți un script care să verifice dacă valoarea variabilei link se termină cu simbolul /. Dacă nu, adăugați acest caracter la sfârșitul valorii link. Utilizați construcția if...else.
// 'https://my-site.com/about';

let link = "https://my-site.com/about";

console.log(link.endsWith("/")); // false

if (!link.endsWith("/")) {
  link += "/";
}

console.log(link);
