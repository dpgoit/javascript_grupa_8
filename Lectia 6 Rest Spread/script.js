"use strict";

// const email = "paul@yahoo.com";

// const user = {
//   email: "denis@yahoo.com",
//   age: 20,
// };

// const { email: username } = user;
// console.log(username);

// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2);
// console.log(arr1[0] === arr2[0]); //

// const profile = {
//   name: "Mango",
//   age: 2,
// };

// const profileUpdate = {
//   name: "Poly",
// };

// const updatedProfile = {
//   ...profile,
//   ...profileUpdate,
// };

// console.log(updatedProfile);

// function boo(...test) {
//   console.log(test);
//   console.log(arguments);
// }
// boo(1, 2, 3, 4, 5);

// rest operator se afla in partea stanga a egalului (rest aduna mai multe valori intr-o variabila)
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3,4,5

// spread in dreapta egal (desparte valorile dintr-un array, obiect, string)
const arr1 = [1, 2, 3, 4];
const arrayTest = [1, 2, ...arr1];
console.log(arrayTest);
