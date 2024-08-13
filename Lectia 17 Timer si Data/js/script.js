'use strict';

// console.log('start');

// setTimeout(() => {
//   console.log('Testing timeout');
// }, 5000);

// console.log('end');

// let counter = 1;

// const testInterval = setInterval(() => {
//   console.log('interval', counter);
//   counter++;
// }, 2000);

// console.log(testInterval);

// setTimeout(() => {
//   clearInterval(testInterval);
// }, 5000);

// console.log('A');

// setTimeout(() => {
//   console.log('B');
// }, 0);

// console.log('C');

// for (let i = 3; i > 0; i--) {
//   const delay = i * 1000;
//   setTimeout(() => console.log(i), delay);
// }

// setTimeout(() => console.log(3), 3000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(1), 1000);

const date = new Date();

console.log(date.getDate());

const start = new Date('2030-04-23');
const end = new Date('2030-05-17');
console.log(end - start);
