function getRandomNumbers(totalArrArgs, start, end) {
   if (Math.floor(start) === Math.floor(end)) return null;

   start = Math.ceil(start);
   end = end > 0 ? Math.floor(end) : Math.ceil(end);

   return new Array(totalArrArgs)
      .fill(null)
      .map(item => (item = Math.floor(Math.random() * (end - start) + start)));
}

console.log(getRandomNumbers(7, 25, 35));
