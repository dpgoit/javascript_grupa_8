"use strict";

// const person = {
//   name: "Denis",
//   prenume: "Paul",
//   age: 30,
//   culoareOchi: "caprui",

//   saManance: function () {
//     console.log("Am mancat pizza astazi!");
//   },
// };

// person.saManance();

// const cutie = ["denis", "paul", "30", "caprui"];
// // cutie[0]; // denis

// const user = {
//   email: "denis@email.com",
// };

// console.log(user["email"]);
// console.log(user.email);

// const hotel = {
//   camere: 130,
// };

// console.log(hotel.name);

// const userA = {
//   username: "Mango",
//   age: 20,
// };

// const userB = userA; // nu asa se copiza un obiect (aici este o referinta / un pointer)
// userB.age = 30;
// console.log(userA.age, userB.age);

// cum se face o copie
// const userB = { ...userA };
// userB.age = 30;
// console.log(userA.age, userB.age);

// const person = {
//   name: "Denis",
//   prenume: "Paul",
//   age: 30,
//   culoareOchi: "caprui",
// };

// console.log(Object.keys(person)); // scoate toate keys din obiect intr-un array
// console.log(Object.values(person)); // scoate toate values din obiect intr-un array
// console.log(Object.entries(person)); // scoate toate keys and values din obiect intr-un array

// console.log(person.name); // Denis
// console.log(person["name"]);

//for in pentru obiect -> el itereaza keyurile unui obiect
// for (let prop in person) {
//   //   console.log(prop);
//   //prop= "name"
//   //prop= "prenume"
//   console.log(person[prop]);
// }

// for of -pentru arrays

function arrayPlusArray(arr1, arr2) {
  const bigArray = arr1.concat(arr2);
  let result = 0;
  for (let value of bigArray) {
    result += value;
  }
  return result;
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); //2100
