'use strict';

// algo: 1. exp split to array, ' ' divider
// 2. destr an array on 3 var's
// 3. use Switch Case to return the res depends of the operator

// input: string
// output: string
function calc(exp) {
   const arr = exp.split(' '),
      [leftVal, operator, rightVal] = arr;

   switch (operator) {
      case '+':
         return `${exp} = ${+leftVal + +rightVal}`;
         break;
      case '-':
         return `${exp} = ${leftVal - rightVal}`;
         break;
      case '*':
         return `${exp} = ${leftVal * rightVal}`;
         break;
      default:
         return `${exp} = ${leftVal / rightVal}`;
   }
}
