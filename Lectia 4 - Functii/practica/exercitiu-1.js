"use strict";
// Exemplu 1 - Indicele de masă corporală (IMC)
// Scrie o funcție `calcBMI(weight, height)` care calculează și returnează indicele de masă corporală al unei persoane. Pentru a face acest lucru, împarte greutatea în kilograme la pătratul înălțimii persoanei în metri.
// Greutatea și înălțimea vor fi transmise sub formă de stringuri. Numerele neîntregi pot fi specificate ca `24.7` sau `24,7`, adică o virgulă poate fi folosită ca separator zecimal.
// Indicele de masă corporală trebuie rotunjit la o zecimală;

function calcBMI(weight, height) {
  // transformam string in numbers si inlocui , cu .

  weight = Number.parseFloat(weight.replace(",", "."));
  height = Number.parseFloat(height.replace(",", "."));

  //calculam BMI
  const bmi = weight / (height * height);

  return bmi.toFixed(1);
}

console.log(calcBMI("88,3", "1.75")); // BMI DENIS
console.log(calcBMI("80,3", "2.00")); // BMI Paul
console.log(calcBMI("80,3", "2.10")); // BMI Paul
