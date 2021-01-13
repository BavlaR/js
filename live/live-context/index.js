function printMessage(country, city) {
   console.log(this);
   console.log(this.firstName);
   console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
   firstName: 'Andrew',
   age: 111,
};

// printMessage('Ukraine', 'Kyiv');

// input: context, args
// output: fn
// bind();

// 1
// const printMessageBinded = printMessage.bind(user, 'Uganda', 'Berlin');
// printMessageBinded(user, 'Uganda', 'Berlin')();

// 2
// printMessage.bind(user, 'Uganda', 'Berlin')();

// 3
// const printMessageBinded = printMessage.bind(user, 'Uganda');
// printMessageBinded('Berlin');

// 4
// const printMessageBinded = printMessage.bind(user);
// printMessageBinded('Uganda', 'Berlin');

// option 1 - using bind

// function myBind(func, context, ...args) {
//    return func.bind(context, ...args);
// }

// option 2 - using call

export function bind(func, context, ...args) {
   return function (...params) {
      return func.call(context, ...args, ...params);
   };
}

const printMessageBinded = bind(printMessage, user, 'Germany', 'Berlin');
printMessageBinded();

// option 3 - using custom JS

// function bind(func, context, ...args) {
//    return function (...params) {
//       const contextCopy = { ...context };
//       contextCopy.tempFunc = func;
//       contextCopy.tempFunc(...args, ...params);
//    };
// }

// console.log(bind(printMessage, user)('Ukraine', 'Kyiv'));

// const printMessageBinded = bind(printMessage, user);
// console.log(printMessageBinded('Germany', 'Berlin'));

// input: fn, obj, ...args
// output: fn
