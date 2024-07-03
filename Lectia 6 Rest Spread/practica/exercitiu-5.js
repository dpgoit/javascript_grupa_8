"use strict";
// Exemplul 5 - Operațiunea Spread
// Extinde funcția `createContact(partialContact)` astfel încât să returneze un nou obiect de contact cu proprietățile `id` și `createdAt` adăugate, precum și `list` cu valoarea "default" dacă nu există această proprietate în `partialContact`.

function createContact(partialContact) {
  return {
    list: "default",
    id: generateId(),
    createAt: new Date(Date.now()).toLocaleDateString(),
    ...partialContact,
  };
}

console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
