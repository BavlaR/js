/* eslint-disable */

const message = 'Test';
const weight = 55;

function run() {
   console.log('RUN');
}

// for(let i = 0; i < 5; i++) {
//    console.log('Hello');
// }

function createMessenger() {
   let message = 'Just learn it';
   let sender = 'Gromcode';
   let count = 0;

   function sendMessage(name) {
      console.log(`${name}, ${message}! Your ${sender}`);
   }

   function setSender(newSender) {
      sender = newSender;
   }

   function setMessage(text) {
      message = text;
   }

   function countMessages() {
      count++;
      console.log(count + ' was sent');
   }

   return {
      sendMessage,
      setMessage,
      setSender,
      countMessages,
   };
}

const messenger = createMessenger();
messenger.sendMessage('John');
const messenger2 = createMessenger();
messenger2.setMessage('You are fired!');
messenger2.sendMessage('Alex');

run();
