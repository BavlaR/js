export function getLocalStorage() {
   return Object.entries(localStorage).reduce((acc, [key, val]) => {
      acc[key] = JSON.parse(val);
      return acc;
   }, {});
}
