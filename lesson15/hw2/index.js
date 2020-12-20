function createLogger() {
   const memory = [];

   function warn(message) {
      memory.push({
         message,
         dateTime: new Date(),
         type: 'warn',
      });
      console.log(memory[0].dateTime);
   }

   function error(message) {
      memory.push({
         message,
         dateTime: new Date(),
         type: 'error',
      });
   }

   function log(message) {
      memory.push({
         message,
         dateTime: new Date(),
         type: 'log',
      });
   }

   function getRecords(messageType) {
      return messageType === undefined
         ? memory.sort((prev, next) => next.dateTime - prev.dateTime)
         : memory
              .filter(memoryObj => memoryObj.type === messageType)
              .sort((prev, next) => next.dateTime - prev.dateTime);
   }

   return {
      warn,
      error,
      log,
      getRecords,
   };
}

const obj = createLogger();
obj.warn('Ooops!');
obj.warn('Ooops!');
obj.error('Errorrr!');
obj.log('Some log!');
console.log(obj.getRecords('warn'));
obj.warn('Ooops!');
console.log(obj.getRecords('warn'));
