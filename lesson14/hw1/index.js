let counter = 0;

function add(num) {
   counter += num;
}

function decrease(num) {
   counter -= num;
}

function reset() {
   counter = 0;
}

function getMemo() {
   return counter;
}

console.log(add(10), counter);
console.log(decrease(7), counter);
console.log(reset(), counter);
console.log(decrease(6), counter);
console.log(getMemo(), counter);
