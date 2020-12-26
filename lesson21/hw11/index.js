/* eslint-disable no-param-reassign */
export function squaredNumbers() {
   document.querySelectorAll('.number').forEach(liItem => {
      liItem.dataset.squaredNumber = String(liItem.dataset.number ** 2);
   });
}

squaredNumbers();

console.log(document.querySelector('.list'));

console.log('5' ** 2);
