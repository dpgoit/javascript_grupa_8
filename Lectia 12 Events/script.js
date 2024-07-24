"use strict";

// const btn = document.querySelector(".btn-test");
// console.log(btn);

// const handlerTest1 = () => {
//   console.log("test1");
// };

// const handlerTest2 = () => {
//   console.log("test2");
// };

// const handlerTest3 = () => {
//   console.log("test3");
// };

// btn.addEventListener("click", () => {
//   console.log("Functie anonima");
// });

// btn.removeEventListener("click", ?);

const form = document.getElementById("form"); // document.querySelector("#form");
console.log(form);

// const handleSubmit = (event) => {
//   console.log(event);
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const {
//     elements: { email, password, testing },
//   } = event.currentTarget;

//   console.log(email.value);
//   console.log(password.value);
//   console.log(testing.value);
//   console.log(event);
// });

const btn = document.querySelector(".btn-test");

btn.addEventListener("keydown", (event) => {
  console.log(event.code);
  console.log(event.key);
  // console.log(event.type);

  console.log(typeof event.key);
  if (event.key == "w") {
    console.log("mergi inainte");
  }

  if (event.key == "s") {
    console.log("mergi inapoi");
  }
});

const inputTest = document.getElementById("email");

inputTest.addEventListener("", (event) => {
  console.log(event.currentTarget.value);
});
