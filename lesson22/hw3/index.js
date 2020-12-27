function checkCheck(checkElm) {
   console.log(checkElm.checked);
}

const checkCheckHandler = e => checkCheck(e.target);

document.querySelector('.task-status').addEventListener('change', checkCheckHandler);
