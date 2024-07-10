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

// Exemplul 9 - Metoda Sort

// Lasă funcția `sortByModel` să returneze un nou array de mașini sortate
// după numele modelului în ordine alfabetică și invers alfabetică, în funcție de
// valoarea parametrului `order`.

const sortByModel = (cars, order) => {
  if (order !== "asc" && order !== "desc") {
    return `Poti sa completezi parametrul order doar cu valorile "asc" sau "desc"`;
  }

  const arraySortat = [...cars].sort((a, b) => {
    if (order === "asc") return a.model.localeCompare(b.model);
    if (order === "desc") return b.model.localeCompare(a.model);
  });

  return arraySortat;
};

console.table(sortByModel(cars, "asc"));
console.table(sortByModel(cars, "desc"));
console.table(sortByModel(cars, "desec"));
