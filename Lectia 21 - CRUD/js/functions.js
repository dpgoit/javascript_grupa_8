import { loadTasks, saveTask, updateTask, deleteTask } from './api.js';

const myInput = document.getElementById('myInput');
let currentId = 1;

function addNewTask() {
  const inputValue = myInput.value.trim();
  if (inputValue === '') {
    alert('You must write something!');
    return;
  }
  createLi(inputValue);
  myInput.value = '';
  addTaskToDB(inputValue);
}

const createTaskObject = (text, isDone) => ({ text, isDone });

function addTaskToDB(text, isDone = false) {
  const newTask = createTaskObject(text, isDone);
  saveTask(newTask);
  currentId += 1;
}

function createLi(text, isDone = false, id = currentId) {
  const liEl = document.createElement('LI');
  const liText = document.createTextNode(text);
  liEl.appendChild(liText);
  liEl.dataset.id = id;
  if (isDone) liEl.className = 'checked';
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}

function addCloseButton(li) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
}

function handleTaskBehavior({ target }) {
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');
    updateTask(target.dataset.id, target.classList.contains('checked'));
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
    deleteTask(target.parentNode.dataset.id);
  }
}

function fillTasksList() {
  loadTasks()
    .then(todos => {
      console.log(todos);
      todos.forEach(element => {
        createLi(element.text, element.isDone, element.id);
      });
      return todos;
    })
    .then(todos => {
      currentId = todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
      console.log(currentId);
    });
}

export { addNewTask, handleTaskBehavior, fillTasksList };
