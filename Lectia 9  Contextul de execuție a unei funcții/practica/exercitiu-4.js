"use strict";

// Exemplu: Utilizarea `call`
// Scrie o funcție greet care va folosi call pentru a saluta o persoană într-un context specificat.
// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// function greet(greeting) {
//   console.log(`${greeting}, my name is ${this.name}`);
// }

// greet.call(person1, "Salut");
// greet.call(person2, "Hello");
// greet.call({ name: "Aladin" }, "Hello");

// Exemplu: Utilizarea apply
// Scrie o funcție introduce care va folosi apply pentru a introduce
// o persoană într-un context specificat cu mai multe argumente.
// const person3 = { name: "Charlie", age: 30 };
// const person4 = { name: "Dana", age: 25 };

// function introduce(greeting, occupation) {
//   console.log(
//     `${greeting}, my name is ${this.name}, I am ${this.age} years old and I am a ${occupation}.`
//   );
// }

// introduce.apply(person3, ["Buna", "developer"]);
// introduce.apply(person4, ["Hello", "designer"]);

// Exemplu: Utilizarea bind
// Scrie o funcție multiply și folosește bind pentru a crea
// o funcție care înmulțește un număr dat cu un multiplicator specific.

function multiply(number) {
  return number * this.factor;
}

const double = multiply.bind({ factor: 2 });

console.log(double(5)); // 10
console.log(double(10)); // 20

const tripler = multiply.bind({ factor: 3 });
console.log(tripler(5)); // 15
console.log(tripler(10)); // 30
