function name1(params) {}
function name2(params) {}
async function name3(params) {}
async function name4(params) {}
function name5(params) {}

// const promisiune = new Promise((resolve, reject) => {
//   const aiTinutPromisiunea = true;
//   if (aiTinutPromisiunea) {
//     resolve(10);
//   } else {
//     reject('Foarte rau Denis, nu ti-ai tinut promisiunea');
//   }
// });

// promisiune
//   .then(value => {
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value * 100);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Promisiune');
//   });

// const promise = new Promise((resolve, reject) => {
//   reject('Ops');
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// ! 1
// console.log('A');

// Promise.reject('B')
//   .then(
//     value => {
//       console.log(value);
//     },
//     error => {
//       console.log(error);
//       console.log('C');
//     },
//   )
//   .finally(() => {
//     console.log('D');
//   });

// console.log('E');

// Promise.reject('B')
//   .catch(error => {
//     console.log('-------');
//     console.log(error);
//     console.log('C');
//   })
//   .finally(() => {
//     console.log('D');
//   });

// console.log('E');

// // A>E>C>D
// // A>E>B>C>D

// const promise = new Promise((resolve, reject) => {
//   reject('error Dennis');
//   resolve('OK');
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

function sleep(ms) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(ms);
    }, ms),
  );
}

// sleep(2000).then(value => {
//   console.log(`after ${value}ms`);
// });

// sleep(5000).then(value => {
//   console.log(`after ${value}ms`);
// });

Promise.all([sleep(2000), sleep(5000), sleep(10000)]).then(value => {
  console.log(value); // [2000,5000,10000]
  console.log('all promises');
});

Promise.race([sleep(500), sleep(2000), sleep(5000), sleep(10000)]).then(value => {
  console.log(value); // 500
  console.log('race promise');
});

// !TEMA exercitiu 3
// import Notiflix from 'notiflix';

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         // resolve
//         resolve({ position, delay });
//       } else {
//         // Reject
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// document.querySelector('.form').addEventListener('submit', event => {
//   event.preventDefault();

//   const delay = parseInt(event.target.delay.value);
//   const step = parseInt(event.target.step.value);
//   const amount = parseInt(event.target.amount.value);

//   console.log(delay, step, amount);

//   for (let i = 0; i < amount; i++) {
//     const currentDelay = delay + i * step;
//     createPromise(1, currentDelay)
//       .then(value => {
//         Notiflix.Notify.success(`Fulfilled promise ${value.position} in ${value.delay}ms`);
//       })
//       .catch(error => {
//         Notiflix.Notify.failure(`Rejected promise ${error.position} in ${error.delay}ms`);
//       });
//   }
// });
