"use strict";
// Exemplul 5 - Toggle

// Scrie o clasă `Toggle` care primește un obiect de setări `{isOpen: boolean}` și
// declară o proprietate `on` - stare pornit/oprit (true/false). Implicit,
// valoarea proprietății `on` ar trebui să fie `false`.

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({ isOpen: true });

console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);

const secondToggle = new Toggle();

console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
