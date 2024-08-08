'use strict';
import { save, load } from './storage.js';

// try {
//   const data = JSON.parse([{ test: 'String test' }]);
//   console.log(data);
// } catch (error) {
//   console.error('A aparut eroare:', error);
// }

// const user = {
//   name: 'Testing name',
//   showName() {
//     console.log(this.name);
//   },
// };

// const json = JSON.stringify(user);
// console.log(json);
// localStorage.setItem('PusDeDenis', json);

// const dataDinLocal = localStorage.getItem('PusDeDenis');
// console.log(dataDinLocal);

// localStorage.removeItem('PusDeDenis');

// localStorage.clear();

const persoana = { name: 'Denis', age: '30', height: 1.55 };
const testHeight = '1.83';

console.log('in script.js');
save('persoana', persoana);
save('height', testHeight);

console.log(load('persoana'));
console.log(load('height'));
console.log(load('heiewqeqwght'));
