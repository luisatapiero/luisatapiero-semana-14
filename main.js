import './style.css'
import { getTasks, addTask, editDocument, deleteDocument} from "./firebase.js"

let tasks = []

await renderTasks()

const buttonTask = document.getElementById('create-todo')
buttonTask.addEventListener('click', async () => await handleClick())

async function renderTasks() {
  tasks = await getTasks();
  const todosContainer = document.querySelector('#to-dos-container');

  todosContainer.innerHTML = '';

  tasks.forEach(task => {
    const elem = document.createElement('li');
    elem.textContent = task.title;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', async () => {
      await deleteTask(task.id);
    });

    if (task.completed) {
      elem.style.textDecoration = 'line-through';
      elem.style.opacity = '0.6';
    }

    elem.addEventListener('click', async () => {
      await editDocument(task.title, task.id, task.completed);
      await renderTasks();
    });

    elem.appendChild(deleteButton);
    todosContainer.appendChild(elem);
  });
}


async function handleClick(){

const inputTask = document.getElementById('input-todo')
const inputText = inputTask.value

await addTask(inputText)
inputTask.value = ''
await renderTasks()

}

async function deleteTask(id) {
  await deleteDocument(id);
  await renderTasks();
}

