function makeCounter() {
   let counter = 0;

   // eslint-disable-next-line func-names
   return function () {
      // eslint-disable-next-line no-plusplus
      return counter++;
   };
}

const changeCounter1 = makeCounter();

console.log(changeCounter1());
console.log(changeCounter1());
console.log(changeCounter1());

const changeCounter2 = makeCounter();

console.log(changeCounter2());
console.log(changeCounter2());
