function getAdults(obj) {
   const objRes = {};

   for (let key in obj) {
      if (obj[key] >= 18) objRes[key] = obj[key];
   }

   return objRes;
}
