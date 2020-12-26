const tasks = [
   { text: 'Buy milk', done: false },
   { text: 'Pick up Tom from airport', done: false },
   { text: 'Visit party', done: false },
   { text: 'Visit doctor', done: true },
   { text: 'Buy meat', done: true },
];

function createTasks(toDoItems) {
   const unordered = document.querySelector('.list');

   const toDoElems = toDoItems.map(item => {
      const liElem = document.createElement('li');
      const checkElem = document.createElement('input');

      checkElem.type = 'checkbox';
      checkElem.checked = item.done;

      if (item.done) {
         liElem.classList.add('list__item_done');
      }

      liElem.classList.add('list__item');
      checkElem.classList.add('list__item-checkbox');

      liElem.append(checkElem, item.text);

      return liElem;
   });

   unordered.append(...toDoElems);
}

createTasks(tasks);
