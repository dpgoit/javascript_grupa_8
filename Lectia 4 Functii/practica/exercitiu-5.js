"use strict";
// Exemplu 5 - Colecția de cursuri
// Scrie funcții pentru a lucra cu colecția `courses` de cursuri de formare:
// - `addCourse(name)` - adaugă un curs la sfârșitul colecției
// - `removeCourse(name)` - elimină un curs din colecție
// - `updateCourse(oldName, newName)` - schimbă numele cu unul nou

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(name) {
  if (courses.includes(name)) {
    console.log("Acest curs deja il ai!");
  } else {
    courses.push(name);
  }
}

function removeCourse(name) {
  const index = courses.indexOf(name);

  if (index === -1) {
    console.log("Cursul pe care vrei sa il stergi nu exista in lista ta!");
  } else {
    // Eliminam cursul din lista (colectie / array)
    // pt html courses.splice(0,1);
    // pt react courses.splice(3,1);
    courses.splice(index, 1);
  }
}
function updateCourse(oldName, newName) {
  const index = courses.indexOf(oldName);
  console.log(`${index} : ${courses[index]}`);
  if (index === -1) {
    console.log("Cursul pe care vrei sa il inlocuiesti nu exista in lista ta!");
  } else {
    courses[index] = newName;
  }
}
console.log(window.c);
addCourse("Romana");
addCourse("Mate");
addCourse("HTML");

// removeCourse("HTML");
removeCourse("Denis");
removeCourse("React");

updateCourse("CSS", "Denis CURS");

console.log(courses);
