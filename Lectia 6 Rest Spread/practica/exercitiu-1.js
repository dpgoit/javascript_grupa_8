"use strict";
// Exemplul 1 - Destructurare
// Rescrie funcția astfel încât să ia un obiect ca parametru în loc de un set de argumente independente.

// Variana 2
function calcBMI({ weight, height }) {
  // Varianta 1
  // const { weight, height } = obiect;
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// It was
// console.log(calcBMI("88,3", "1.75"));
// console.log(calcBMI("68,3", "1.65"));
// console.log(calcBMI("118,3", "1.95"));

// Is expected
console.log(
  calcBMI({
    weight: "88,3",
    height: "1.75",
  })
);
console.log(
  calcBMI({
    weight: "68,3",
    height: "1.65",
  })
);
console.log(
  calcBMI({
    weight: "118,3",
    height: "1.95",
  })
);
