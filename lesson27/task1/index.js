function getLocalStorageData() {
   return Object.entries(localStorage).reduce(
      (acc, [key, val]) => ({
         ...acc,
         [key]: JSON.parse(val),
      }),
      {},
   );
}

console.log(getLocalStorageData());
