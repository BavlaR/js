function createMessenger() {
   let message = 'Just learn it';
   let sender = 'Gromcode';

   function sendMessage(name) {
      console.log(`${name}, ${message}! Your ${sender}`);
   }

   function setMessage(text) {
      message = text;
   }

   function setSender(text) {
      sender = text;
   }

   return {
      sendMessage,
      setMessage,
      setSender,
   };
}

const obj1 = createMessenger();
obj1.sendMessage('Helen');
obj1.sendMessage('Alina');
obj1.setMessage('Hi');
obj1.sendMessage('Shaun');
obj1.setSender('Google');
obj1.sendMessage('Vasia');
obj1.setMessage('Fuck you');
obj1.sendMessage('Helen');
