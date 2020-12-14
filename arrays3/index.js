'use strict';
//input: array, callback
//output: array

// callback
// output: boolean

//algo:
// 1.iterate array
// 2.apply callback to each element
// 3.if callback returns true - add el to res arr.
const filterArray = (arr, callback) => {
   const result = [];
   for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
         result.push(arr[i]);
      }
   }

   return result;
};

// test
const testArr = [5, 6, 10, -2, 44, 5];
const testCallback = (el, index, arr) => index > 3;

const res = filterArray(testArr, testCallback);
console.log(res);
