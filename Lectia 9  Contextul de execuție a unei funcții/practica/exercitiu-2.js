"use strict";

// Exemplul 2 - Agendă telefonică

// Fă refactorizarea metodelor obiectului `phonebook` pentru a face ca codul să funcționeze.

const phonebook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };

    this.contacts.push(newContact);

    return this.contacts;
  },

  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  phonebook.add({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);
