function superRound(num, afterComma) {
   const afterCommaMod = 10 ** afterComma;

   return [
      Math.floor(num * afterCommaMod) / afterCommaMod,
      Math.round(num * afterCommaMod) / afterCommaMod,
      Math.ceil(num * afterCommaMod) / afterCommaMod,
      Math.trunc(num * afterCommaMod) / afterCommaMod,
      +num.toFixed(afterComma),
   ];
}
