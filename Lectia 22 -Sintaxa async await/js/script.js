function getStone(stoneName) {
  const stones = {
    Emerald: {
      price: 1300,
      quantity: 4,
    },
    Diamond: {
      price: 2700,
      quantity: 3,
    },
    Sapphire: {
      price: 400,
      quantity: 7,
    },
    Rubble: {
      price: 200,
      quantity: 2,
    },
  };

  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(stones[stoneName]), 5000);
    setTimeout(() => reject('Nu mai avem pietre!'), 5000);
  });
}

// fetch (url) === getStones()

/*
1. await poate fi folosit doar în interiorul funcțiilor asincrone.
2. Instrucțiunea await blochează execuția unei funcții asincrone până când promisiunea trece în starea de "rejected" (respinse) sau "fulfilled" (îndeplinite) (adică simulăm sincronizarea în execuția codului asincron).
3. await nu va returna o promisiune, ci rezultatul acesteia.
4. O funcție asincronă returnează întotdeauna o promisiune.
*/

async function getStonesByName() {
  try {
    console.time('getStones');
    console.log('start');
    const emerald = getStone('Emerald');
    console.log(emerald);

    console.log('end');
    console.timeEnd('getStones');
  } catch (error) {
    console.error(error);
  }
}

function testDenis() {
  console.log(1 + 1);
}

console.log('Before');
getStonesByName();
console.log('After');
testDenis();
