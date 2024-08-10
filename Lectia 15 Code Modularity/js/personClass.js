export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  salut() {
    return `Buna, eu sunt ${this.name} si am ${this.age} ani!`;
  }
}

export function createPerson(name, age) {
  return new Person(name, age);
}

export const testingFromClass = { type: "D" };
