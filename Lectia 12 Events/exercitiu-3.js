"use strict";

// Exercițiul 3 - Folosind JavaScript, fă ca acest
// modal să apară la click-ul pe buton.

const modal = document.querySelector(".modal");
const btnOpen = document.getElementById("myBtn");
const btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", () => {
  modal.style.display = "block";
});

btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});
