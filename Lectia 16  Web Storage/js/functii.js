import { save, load } from './storage.js';

const STORAGE_KEY = 'tasks';

const list = document.getElementById('myUL');
const myInput = document.getElementById('myInput');
let currentId = 1;

const createTaskObject = (text, isDone) => ({
  text,
  isDone,
  id: currentId,
});

export function createLi(text, isDone = false, id = currentId) {
  const liEl = document.createElement('li');
  liEl.textContent = text;
  liEl.dataset.id = currentId;
  if (isDone) liEl.classList.add('checked');
  list.append(liEl);
  addBtnClose(liEl);
}

function addBtnClose(li) {
  const span = document.createElement('span');
  span.textContent = 'x';
  span.classList.add('close');
  li.append(span);
}

export function addNewTask() {
  const inputValue = myInput.value.trim();
  if (inputValue === '') {
    alert('Trebuie sa completezi in input');
    return;
  }

  createLi(inputValue);
  myInput.value = '';
  addTaskToLocalStorage(inputValue);
}

function addTaskToLocalStorage(text, isDone = false) {
  const currentState = load(STORAGE_KEY);
  const newTask = createTaskObject(text, isDone);
  if (currentState === undefined) {
    save(STORAGE_KEY, [newTask]);
  } else {
    currentState.push(newTask);
    save(STORAGE_KEY, currentState);
  }

  currentId += 1;
}

export function fillTaskList() {
  const currentState = load(STORAGE_KEY);
  if (currentState !== undefined) {
    currentState.forEach(task => {
      createLi(task.text, task.isDone, task.id);
      currentId = currentState[currentState.length - 1].id + 1;
    });
  }

  console.log(currentId);
}
