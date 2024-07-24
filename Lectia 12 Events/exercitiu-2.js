"use strict";

// Exercițiul 2 - Pentru formularele date, adaugă validare pentru login și înregistrare.
// În cazul în care totul este corect, afișează un mesaj de succes.

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value === "" || password.value === "") {
    alert("Trebuie sa introduci valori in ambele campuri!");
  } else {
    alert("Formularul a fost trimis. Esti logat!");
    username.value = "";
    password.value = "";
  }
});

const registerForm = document.getElementById("registerForm");

const formError = document.querySelector(".form-errors");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { elements } = e.target;
  const username = elements["username-register"].value;
  const password = elements["password-register"].value;

  if (username === "" || password === "") {
    markFormWithError("Te rugam sa introduci o valoare in fiecare input!");
    return;
  }

  if (username.length > 15) {
    markFormWithError("Username-ul trebuie sa fie mai mic de 15 caractere!");
    return;
  }

  if (password.length < 8) {
    markFormWithError("Parola trebuie sa fie mai mare de 8 caractere!");
    return;
  }

  handleSuccess();
});

function markFormWithError(message) {
  registerForm.classList.add("form-error");
  formError.textContent = message;
}

function handleSuccess() {
  registerForm.classList.remove("form-error");
  formError.textContent = "";
  alert("Success!");
}
