"use strict";

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// Exemplul 5 - Metoda Filter

// Lasă funcția `getCarsWithType` să returneze un array de mașini a căror tip
// corespunde cu valoarea parametrului `type`.
// const getCarsWithType = (cars, type) => {
//   const arrFiltrat = [];

//   for (let car of cars) {
//     if (car.type === type) {
//       arrFiltrat.push(car);
//     }
//   }

//   return arrFiltrat;
// };

// const getCarsWithType = (cars, type) => {
//   const arrFiltrat = cars.filter((car, i, arr) => {
//     return car.type === type;
//   });

//   return arrFiltrat;
// };

const getCarsWithType = (cars, type) =>
  cars.filter((car, i, arr) => car.type === type);

console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, 'sedan'));
