function getTotalPrice(arr) {
   return `$${Math.floor(arr.reduce((acc, num) => (acc += num), 0) * 100) / 100}`;
}

console.log(getTotalPrice([1.368, 2.569, 7.831, 8.934526, 7.1423]));
