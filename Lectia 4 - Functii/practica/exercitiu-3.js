"use strict";
// Exemplu 3 - Afișarea elementelor
// Scrie o funcție `logItems(items)` care primește un array și folosește un `for` loop pentru ca fiecare element al array-ului să tipărească un mesaj în consolă în formatul `<număr element> - <valoare element>`. Numerotarea elementelor trebuie să înceapă de la `1`.

function logItems(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(["Mango", "Poly", "Ajax"]);
logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
