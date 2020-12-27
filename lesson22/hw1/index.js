function callAlert() {
   alert('done');
}

const alertHandler = () => callAlert();

document.querySelector('.create-btn').addEventListener('click', alertHandler);
