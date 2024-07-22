"use strict";
/*
# Sarcina 2

Pornind de la acest array de culori, creează butoane dinamic;

1. Iterează prin array;
2. Creează un buton și setează culoarea pentru buton
3. Setează textul butonului
4. Adaugă butonul în interfața utilizatorului (UI)
*/

const colors = [
  {
    label: "Primary Button",
    color: "#ff0000",
    isPrimary: true,
  },
  {
    label: "Click Me",
    color: "#00ff00",
    isPrimary: false,
  },
  {
    label: "Yellow",
    color: "#fff00f",
    isPrimary: false,
  },
];

const containerEl = document.querySelector("#container");
console.log(containerEl);
colors.forEach((element, index, arrayIntreg) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = element.label;

  if (element.isPrimary) {
    buttonEl.classList.add("primary-button");
    buttonEl.innerHTML = `<span><a href="https://www.google.com/">${element.label}</a></span>`;
  } else {
    buttonEl.style.backgroundColor = element.color;
    buttonEl.style.margin = "10px";
    buttonEl.style.padding = "10px 20px";
  }

  containerEl.append(buttonEl);
});

// textContent => modifica doar text-ul din interior
// innerHTML => adaug / scriu peste continutul deja existent
