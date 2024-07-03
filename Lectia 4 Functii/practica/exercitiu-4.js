"use strict";
// Exemplu 4 - Găsirea celui mai mare element
// Scrie o funcție `findLargestNumber(numbers)` care caută cel mai mare număr dintr-un array.

function findLargestNumber(numbers) {
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
console.log(findLargestNumber([49, 4, 7, 83, 12]));
