'use strict';
// algo: 1.create high order func => create callback
// 2. init res array
// 3. iterate arr using for loop (push the callback value to res arr)

const someNumbers = [2, 6, 15, 126];

// input: array function
// output: array
const mapArrayElements = (arr, callback) => {
   const newNumbers = [];
   for (let i = 0; i < arr.length; i++) {
      newNumbers.push(callback(arr[i], i, arr));
   }
   return newNumbers;
};

// input: number / number / array
// output: number
function likeMap(item, i, arr) {
   return item ** 3;
}
