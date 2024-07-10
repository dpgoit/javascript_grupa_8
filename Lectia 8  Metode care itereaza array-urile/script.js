"use strict";

const values = [1, 4, 9, 16];
// const result = values.map((elementul, index, arrayulIntreg) => {
//   return elementul * 2;
// });

const result = values.map(function (acc, elementul, index, arrayulIntreg) {
  const test = 10;
  return elementul * test;
});

console.log(values);
console.log(result);

// ()=>{}  Arrow function
