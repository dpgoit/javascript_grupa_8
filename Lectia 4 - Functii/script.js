"use strict";

// function greet(name, prenume) {
//   console.log(`hello, numele meu este ${name} si prenumele este ${prenume}`);
// }

// greet("Mango", "Denis");

// greet("Paul ", "Aladin");

// greet("Greci", "Dan");

// const c = 20;

function boo(d, m) {
  return d + m + 10;
}

function foo(a, b) {
  console.log(boo(10, 30));
  return a + b + 10;
}

console.log(foo(5, 15)); // 30

// function foo(array) {
//   for (let i = 0; i < array.length; i++) {
//     // console.log(i);
//     // console.log(`${array[i]} * 2 = ${array[i] * 2}`);
//     array[i] = array[i] * 2;
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(foo(numbers));
// console.log(numbers);

// function foo() {
//   console.log([1, 2, 3, 4, 5, "paul", "catalin", "30", false]);
//   console.log(arguments);
// }

// foo(1, 2, 3, 4, 5, "paul", "catalin", "30", false);
