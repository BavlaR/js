export function pinger(num, ms) {
   console.log('Ping');
   let counter = num;

   const index = setInterval(() => {
      if (--counter > 0) console.log('Ping');
      else {
         clearInterval(index);
      }
   }, ms);
}
