"use strict";

// Exemplul 1 - Blogger

// Scrie o clasă `Blogger` pentru a crea un obiect blogger cu următoarele proprietăți:

// - `email` - email, string
// - `age` - vârstă, număr
// - `numberOfPosts` - număr de postări, număr
// - `topics` - un array de subiecte în care bloggerul este specializat

// Clasa așteaptă un parametru - un obiect de setări cu proprietăți cu aceleași nume.

// Adaugă o metodă `getInfo()` care returnează un șir de caractere:
// `User ${email} is ${age} years old and has ${numberOfPosts} posts`.

// Adaugă metoda `updatePostCount(value)`, care primește în parametrul `value`
// numărul de postări pentru a adăuga utilizatorului.

class Blogger {
  constructor({ denisEmail, age, numberOfPosts, topics }) {
    this.email = denisEmail;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.denisEmail} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  denisEmail: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});

console.log(mango);

console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  email: "poly@mail.com",
  age: 19,
  numberOfPosts: 17,
  topics: ["sports", "gaming", "health"],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
