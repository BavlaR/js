'use strict';

// Algo: 1. using ? operator check condition (if true => return null)
// 2. if false
// a) map() to create the new array filled with Math.abs() items
// b) spread new array and transfer to Math.min() as a parameter
// c) exponentiation

// input: array
// output: number
export default arr => {
   return !Array.isArray(arr) || arr.length === 0
      ? null
      : Math.min(...arr.map(num => Math.abs(num))) ** 2;
};
