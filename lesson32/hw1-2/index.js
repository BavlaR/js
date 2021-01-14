/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = val => new Promise(resolve => resolve(val));

makePromise(20).then(val => console.log(val));

/*
 * пример использования
 */
makePromise(17).then(number => {
   console.log(number); // 17
});

//

const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

const resultPromise = Promise.all([promiseNumber1, promiseNumber2, promiseNumber3]);

resultPromise
   .then(numbersList => {
      console.log(numbersList);
      const sum = numbersList.reduce((acc, num) => acc + num, 0);
      return sum;
   })
   .then(result => {
      console.log(result); // 98
   });
