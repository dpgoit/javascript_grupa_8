"use strict";
// Exemplul 2 - Destructurare
// Rescrie funcția astfel încât să ia un obiect ca parametru în loc de un set de argumente independente.

function printContactsInfo({ names, phones }) {
  // const { names, phones } = props;
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// It was
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Is expected
printContactsInfo({
  names: "Jacob,William,Solomon,Artemis",
  phones: "89001234567,89001112233,890055566377,890055566300",
});
