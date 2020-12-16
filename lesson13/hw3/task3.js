export function getAdults(obj) {
   const objRes = {};

   // eslint-disable-next-line no-restricted-syntax
   for (const key in obj) {
      if (obj[key] >= 18) objRes[key] = obj[key];
   }

   return objRes;
}
