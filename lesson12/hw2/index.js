// algo: 1. using filter() to exclude text contained elements
// 2. using map():
// a) toString() makes all elem typoof string
// b) trim() 'kills' elem left/right spaces
// c) Number makes all elem typeof number to use toFixed()
// d) toFixed(2) rounds elem to two decimal places and returns typeof string which is nessesary

// input/output array
function cleanTransactionsList(arr) {
   return arr
      .filter(transact => +transact)
      .map(transact => `$${Number(transact.toString().trim()).toFixed(2)}`);
}
