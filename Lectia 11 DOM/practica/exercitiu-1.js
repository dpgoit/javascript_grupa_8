"use strict";

/*
# Sarcina 1

const technologies = ["Javascript", "Python", "CSS", "HTML"];

1. Obține elementul container (referinta care el)
2. Creează un ciclu pentru sortarea elementelor array-ului
3. Creează un tag li
4. Scrie textul din array în interiorul elementelor de listă
5. Plasează elementul li în interiorul ul
6. Plasează tag-ul ul cu elemente pe pagină
*/

const technologies = ["Javascript", "Python", "CSS", "HTML"];

const containerEl = document.getElementById("container");
console.log(containerEl);

// crearea unui element
const list = document.createElement("ul");

// lipirea elementului de un alt element deja existent in pagina
containerEl.append(list);

// // crearea unui li
// const firstElementLi = document.createElement("li");

// // adaugare text
// firstElementLi.textContent = technologies[1];

// // lipire li de parinte
// list.append(firstElementLi);

// for (let i = 0; i < technologies.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = technologies[i];
//   list.append(li);
// }

technologies.forEach((technology) => {
  const li = document.createElement("li");
  li.textContent = technology;
  list.prepend(li);
});
