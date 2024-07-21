"use strict";
// Exemplul 2 - Storage

// Scrie o clasă `Storage` care creează obiecte pentru gestionarea unui depozit de bunuri.
// Când este apelată, va primi un argument - array-ul inițial de bunuri, și îl va salva
// în proprietatea `items`.

// Adaugă metodele clasei:

// - `getItems()` - returnează un array de produse.
// - `addItem(item)` - primește un nou produs și îl adaugă la cele curente.
// - `removeItem(item)` - primește produsul și, dacă există, îl elimină din cele curente.

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((fruct, index, arrIntreg) => fruct !== item);
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

console.log(storage);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
