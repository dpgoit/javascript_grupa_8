"use strict";

// Exemplul 6 - Operațiunea Rest
// Scrie o funcție `transformUsername(user)` care să returneze un nou obiect cu proprietatea `fullName` în loc de `firstName` și `lastName`.

function transformUsername({ firstName, lastName, ...otherProps }) {
  return {
    fullname: `${firstName} ${lastName}`,
    ...otherProps,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: "Adrian",
    lastName: "Cross",
    email: "a.cross@hotmail.com",
    friendCount: 20,
  })
);
