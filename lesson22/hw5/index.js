/* eslint-disable no-plusplus */
let clickCounter = 0;

function getClick() {
   if (clickCounter === 1) return;
   clickCounter++;
   console.log('clicked');
}

const getClickHandler = () => getClick();

document.querySelector('.single-use-btn').addEventListener('click', getClickHandler);
