"use strict";
// Exemplul 3 - Destructurare profundă
// Rescrie proprietatea astfel încât să folosească un obiect ca parametru în loc de un set de argumente independente.

function getBotReport({
  companyName,
  bots: { repair: repairBots, defence: defenceBots },
}) {
  // Variata1
  // const { companyName, bots } = props;
  // const { repair: repairBots, defence: defenceBots } = bots;

  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// It was
// console.log(getBotReport("Cyberdyne Systems", 150, 50));

// // Is expected
console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"
