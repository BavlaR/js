'use strict';

// начальный массив
const numbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

//input: callback
//output: number OR undefined
const findRes = numbersList.find(el => el % 2 === 1);

console.log(findRes);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

numbersList.forEach(num => {
   if (num > 0) console.log(num);
});

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

//input: callback
//output: number

// option1
// transactions.reduce((acc, num) => {
//    console.log('acc ' + acc);
//    console.log(acc);

//    return num > 100 ? acc + num : acc;
// }, 0);

const reduceRes = transactions.reduce((acc, num) => {
   return num > 100 ? acc + num : acc;
}, 0);

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];

//input: callback
//output: array

const sortResCopy = numbersList2.slice().sort((a, b) => b - a);

console.log(sortResCopy);
console.log(numbersList2);
