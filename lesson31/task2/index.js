export function asyncCalculator(num) {
   return new Promise(res => {
      setTimeout(() => {
         console.log(`Initial value: ${num}`);
         res(num);
      }, 500);
   })
      .then(
         val =>
            new Promise(res =>
               setTimeout(() => {
                  const result = val ** 2;
                  console.log(`Squared value: ${result}`);
                  res(result);
               }, 500),
            ),
      )
      .then(val => {
         const result = val * 2;
         console.log(`Doubled value: ${result}`);
         return result;
      });
}
