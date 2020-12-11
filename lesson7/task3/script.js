function flatArray(arr) {
   return (newArr = arr.reduce((acc, item) => acc.concat(item), []));
}
