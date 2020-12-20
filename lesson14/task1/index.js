let message = 'Just learn it';

function sendMessage(name) {
   console.log(`${name}, ${message}! Your Gromcode`);
}

function setMessage(text) {
   message = text;
}

sendMessage('Bob');
setMessage('Good job');
sendMessage('Bob');
