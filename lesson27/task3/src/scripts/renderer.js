import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const tasks = [
   { text: 'Buy milk', done: false },
   { text: 'Pick up Tom from airport', done: false },
   { text: 'Visit party', done: false },
   { text: 'Visit doctor', done: true },
   { text: 'Buy meat', done: true },
];

const createCheckbox = ({ done, id }) => {
   const checkboxElem = document.createElement('input');
   checkboxElem.setAttribute('type', 'checkbox');
   checkboxElem.setAttribute('data-id', id);
   checkboxElem.checked = done;
   checkboxElem.classList.add('list__item-checkbox');

   return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
   const listItemElem = document.createElement('li');
   listItemElem.classList.add('list__item');
   const checkboxElem = createCheckbox({ done, id });
   if (done) {
      listItemElem.classList.add('list__item_done');
   }
   listItemElem.append(checkboxElem, text);

   return listItemElem;
};

export const renderTasks = () => {
   const tasksList = getItem('tasksList') || [];

   listElem.innerHTML = '';
   const tasksElem = tasksList.map(createListItem);

   listElem.append(...tasksElem);
};
