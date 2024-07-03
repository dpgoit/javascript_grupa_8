"use strict";
// Exemplul 4 - Destructurare
// Rescrie funcția astfel încât să accepte un obiect ca parametru cu proprietățile `companyName` și `stock` și să afișeze un raport despre numărul de bunuri din depozitul oricărei companii.
function getStockReport({ companyName, stock }) {
  let total = 0;
  const values = Object.values(stock);

  for (const value of values) {
    total += value;
  }

  return `${companyName} are in stock ${total} bunuri!`;
}

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
