"use strict";
// Exemplul 1 - Bazele Obiectelor
// Scrie un script care, pentru obiectul `user`, să efectueze succesiv următoarele:
// - adaugă un câmp `mood` cu valoarea `'happy'`
// - înlocuiește valoarea `hobby` cu `'skydiving'`
// - înlocuiește `premium` cu `false`
// - afișează conținutul obiectului `user` în formatul `cheie:valoare` folosind `Object.keys()` și `for...of`

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
console.log(user);
// - adaugă un câmp `mood` cu valoarea `'happy'`

user.mood = "happy";
console.log(user);

user.hobby = "skydiving";
console.log(user);

user.premium = false;
console.log(user);

const keys = Object.keys(user);
console.log("keys", keys);

for (let key of keys) {
  console.log(`Cheia:${key}: ${user[key]}`);
}
