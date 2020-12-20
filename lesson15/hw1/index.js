'use strict';

const createCalculator = () => {
   let counter = 0;

   const add = num => {
      counter += num;
   };
   const decrease = num => {
      counter -= num;
   };
   const reset = () => {
      counter = 0;
   };
   const getMemo = () => {
      return counter;
   };

   return {
      add,
      decrease,
      reset,
      getMemo,
   };
};

const obj = createCalculator();
obj.add(5);
obj.add(5);
console.log(obj.getMemo());
// console.log(obj.add());
// console.log(obj.getMemo());
// console.log(obj.decrease());
// console.log(obj.reset());
