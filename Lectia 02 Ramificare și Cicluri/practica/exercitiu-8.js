// Exemplu 8 - if...else și operatorii logici
// Scrieți un script care va afișa un șir în consola browserului în funcție de valorile variabilei hours.

const data = 10;

//  produs
// 1. daca este mai mic de 17 -> nu este expirat
// 2. daca intre 17 si 24 -> "urmeaza sa expire"
// 3. daca este mai mare de 24 -> expirat
if (data < 17) {
  console.log("Nu este expirat produsul!");
} else if (data >= 17 && data < 24) {
  console.log("Produsul urmeaza sa expire");
} else {
  console.log("Expirat");
}
