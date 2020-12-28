/* eslint-disable no-param-reassign */

const tasks = [
   { text: 'Buy milk', done: false },
   { text: 'Pick up Tom from airport', done: false },
   { text: 'Visit party', done: false },
   { text: 'Visit doctor', done: true },
   { text: 'Buy meat', done: true },
];

const unordered = document.querySelector('.list');
const taskBtn = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');

const onCheckClickHandler = e => {
   const singleCheck = e.target.dataset.id;

   tasks[+singleCheck].done = !tasks[+singleCheck].done;

   unordered.innerHTML = '';
   createTasks(tasks);
};

const onBtnClickHandler = () => {
   if (taskInput.value) {
      tasks.unshift({
         text: taskInput.value,
         done: false,
      });

      taskInput.value = '';
      unordered.innerHTML = '';
      createTasks(tasks);
   }
};

taskBtn.addEventListener('click', onBtnClickHandler);

function createTasks(toDoItems) {
   const toDoElems = toDoItems
      .map((item, i) => {
         const liElem = document.createElement('li');
         const checkElem = document.createElement('input');

         checkElem.type = 'checkbox';
         checkElem.checked = item.done;
         checkElem.dataset.id = String(i);

         checkElem.addEventListener('click', onCheckClickHandler);

         if (item.done) {
            liElem.classList.add('list__item_done');
         }

         liElem.classList.add('list__item');
         checkElem.classList.add('list__item-checkbox');

         liElem.append(checkElem, item.text);

         return liElem;
      })
      .sort((prev, next) => prev.firstElementChild.checked - next.firstElementChild.checked);

   unordered.append(...toDoElems);
}

createTasks(tasks);
