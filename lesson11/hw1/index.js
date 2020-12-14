`use strict`;

//input: string number
//output: array

// Algo:
// Before all check typeof str!!!
// 1. Init the res array
// 2. inside the loop : take the part of str => push into the res array
// 3. Add to the last elt of the res array '.' symbol

function splitString(str, num = 10) {
   if (typeof str !== 'string') return null;

   const arr = [];

   for (let i = 0; ; i += num) {
      const part = str.substr(i, num);

      if (part.length === 0) break;

      arr.push(part);
   }

   arr[arr.length - 1] = arr[arr.length - 1].padEnd(num, '.');

   return arr;
}
