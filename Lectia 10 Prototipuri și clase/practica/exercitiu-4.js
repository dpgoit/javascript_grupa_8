"use strict";
// Exemplul 4 - Notes

// Scrie o clasă `Notes` care gestionează colecția de note în proprietatea `items`.
// O notă este un obiect cu proprietățile `text` și `priority`. Adaugă o proprietate statică
// `Priority` la clasă, care va stoca obiectul cu priorități.

// Adaugă metodele `addNote(note)`, `removeNote(text)` și
// `updatePriority(text, newPriority)`.

class Notes {
  constructor(items) {
    this.items = items;
  }

  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    this.items = this.items.filter((note) => note.text !== text);
  }

  updatePriority(text, newPriority) {
    const note = this.items.find((item) => item.text === text);
    if (note) {
      note.priority = newPriority;
    }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// console.log(myNotes.items);

myNotes.addNote({
  text: "My second note",
  priority: Notes.Priority.NORMAL,
});
// console.log(myNotes.items);

// myNotes.removeNote("My first note");

myNotes.updatePriority("My second note", Notes.Priority.HIGH);
console.log(myNotes.items);
