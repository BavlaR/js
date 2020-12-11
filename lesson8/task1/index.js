const transformToObject = arr => {
   const obj = {};

   arr.forEach(el => {
      obj[el] = el;
   });

   return arr.length > 0 ? obj : {};
};
