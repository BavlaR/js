function createArrayOfFunctions(num) {
   if (num === undefined) return [];
   return typeof num !== 'number'
      ? null
      : new Array(num).fill().map((item, i) => {
           return function () {
              return i;
           };
        });
}

console.log(createArrayOfFunctions('ddd'));
