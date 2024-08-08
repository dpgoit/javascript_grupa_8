//! =========================================
console.log('Start');
/*
Creează o listă de sarcini (Todo-list) unde poți crea, șterge elemente și salva lista în stocarea locală.
Stilurile și marcajul pot fi luate de aici - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
*/

/*
- Cu stocare locală (local storage)
    1. Vom stoca sarcinile sub forma unui array de obiecte
        1.1. Obiect cu câmpuri: text, isDone, ID. ID-ul este necesar pentru a căuta elemente, a șterge elemente și a actualiza statusul elementelor.
        Identificatorul trebuie să fie atât în element, cât și în obiectul din stocare.
    2. Când adăugăm un `li` pe pagină, îl vom adăuga și în stocare
    3. Scrie logica funcției care va prelua datele din stocare și le va adăuga pe pagină sub formă de elemente.
    4. Scrie logica pentru eliminarea sarcinii de pe pagină și pentru actualizarea statusului sarcinii.
*/

import { addNewTask, fillTaskList } from './functii.js';

[
  { text: 'Sa mananc', isDone: false, id: 1 },
  { text: 'Sa mananc', isDone: false, id: 2 },
  { text: 'Sa mananc', isDone: false, id: 3 },
];

const addBtn = document.getElementById('addBtn');
const list = document.getElementById('myUL');

addBtn.addEventListener('click', addNewTask);
// list.addEventListener('click', handleTaskCheck);

window.addEventListener('DOMContentLoaded', fillTaskList);
