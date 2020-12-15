'use strict';

// input: number...
// output: number...

function multiply() {
   return Array.from(arguments).reduce((acc, arg) => (acc *= arg), 1);
}

console.log(multiply(5, 5, 5));

//spread
const testArr = [2, 5, 10, 16];
console.log(...testArr);

const testArrCopy = [...testArr];

function sum(a, b) {
   return a + b;
}

sum(testArr[0], testArr[1]);
sum(...testArr);
