const items = document.querySelectorAll('.list-item');

function handleItemClick() {
   console.log('clicked');
}

// items.forEach(item => item.addEventListener('click', handleClick));

// option2

const list = document.querySelector('.list');

function handleListClick(e) {
   if (e.target.className !== 'list-item') return;
   console.log(e.target.textContent);
}

list.addEventListener('click', handleListClick);

// WEB FLOW!!!
// 1. get data from server ===> [{}, {}, {}]
// 2. render
// 3. handle event - UPDATE [{}, {}, {}], dont touch dom
// 4.re render
