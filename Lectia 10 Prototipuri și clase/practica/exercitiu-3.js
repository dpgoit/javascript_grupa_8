"use strict";

// Exemplul 3 - User

// Scrie o clasă `User` care creează un obiect cu proprietățile `login` și `email`.
// Declară proprietățile private `#login` și `#email`, care pot fi accesate prin
// getter și setter de `login` și `email`.

class User {
  #login;
  #email;
  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get login() {
    return this.#login;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  get email() {
    return this.#email;
  }
}

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango.login); // Mango
mango.login = "Mangodoge";
console.log(mango.login); // Mangodoge

console.log(mango.email); // Mango
mango.email = "Test Email";
console.log(mango.email); // Mangodoge

const poly = new User({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.login); // Poly
poly.login = "Polycutie";
console.log(poly.login); // Polycutie
