/* eslint-disable */

// hoisting example 1
console.log(message);
var message = 'Hoisting is here!';

// hoisting example 2
var a = 55;

if (a) {
   var a = 1;

   console.log(a);
}

console.log(a);

// hoisting example 3
// var a = 77;
// console.log(a);

// function print() {
//    var a = 2;
//    console.log(a);
// }
// print();

// console.log(a);

// var a;
// a = 77;
// function print() {
//    var a;
//    a = 2;
//    console.log(a);
// }

// console.log(a);

//hoisting example 4

// run();
// go();

// function run() {
//    console.log('Run!');
// }

// function go() {
//    console.log('Gos!');
// }

//put your code here
export function createLogger() {
   const messages = [];
   function warn(text) {
      messages.push({
         message: text,
         dateTime: new Date(),
         type: 'warn',
      });
   }
   function error(text) {
      messages.push({
         message: text,
         dateTime: new Date(),
         type: 'error',
      });
   }
   function log(text) {
      messages.push({
         message: text,
         dateTime: new Date(),
         type: 'log',
      });
   }
   function getRecords(messageType) {
      const sorted = memory.sort((prev, next) => next.dateTime - prev.dateTime);

      return messageType ? sorted : sorted.filter(memoryObj => memoryObj.type === messageType);
   }

   return {
      warn,
      error,
      log,
      getRecords,
   };
}

const logger1 = createLogger();
logger1.error('we have problem');
logger1.error('error');
logger1.error('Hello!');

console.log(logger1.getRecords());
