"use strict";

// Exercițiul 1 - Schimbă culoarea butonului dintr-o singură apăsare de buton.
// adaug clasa my-block-blue
const btn = document.querySelector(".toggle-button");
const block = document.querySelector(".my-block");

console.log(btn, block);

const handleToggleColor = (event) => {
  console.log("toggle");
  block.classList.toggle("my-block-blue");
};

btn.addEventListener("click", handleToggleColor);
