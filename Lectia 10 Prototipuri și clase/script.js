"use strict";

class Person {
  constructor() {
    this.name = "Deniss";
    this.age = 30;
  }

  static getFullName() {
    return `Numele meu este ${this.name} Paul si am ${this.age} ani!`;
  }
}

const denis = new Person();

console.log(Person.getFullName());
