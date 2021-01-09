/* eslint-disable prefer-arrow-callback */
/* здесь мы создаем промис, который резолвит объект { name: 'Tom', age: 17 } через 1 секунду */
const userDataPromise = new Promise(resolve => {
   setTimeout(() => {
      resolve({ name: 'Tom', age: 17 });
   }, 1000);
});

/*
 * Выведите в консоль переменную userDataPromise
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise?
 */

console.log(userDataPromise);

/*
 * Выведите в консоль переменную userData в обработчике промиса
 * Ответьте себе на вопрос, что находится в переменной userData?
 */
userDataPromise.then(function onSuccess(userData) {
   console.log(userData);
});

/*
 * подпишитесь на успешное выполнение промиса userDataPromise
 * используйте метод .then
 * в обработчике промиса (ф-ция внутри .then() ) выведите в консоль строку 'My name is Tom. I am 17 years old'
 * Tom и 17 достаньте с данных, которые приходят в ф-цию onSuccess
 */

userDataPromise.then(function onSuccess(userData) {
   console.log(`My name is ${userData.name}. I am ${userData.age} years old`);
});

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */

const successPromise = new Promise(resolve => {
   resolve(67);
});

/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

successPromise.then(function onSuccess(number) {
   console.log(number ** 2);
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
successPromise.catch(function onError() {
   console.log('I am an error');
});

/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная failedPromise
 */

const failedPromise = new Promise((resolve, reject) => {
   reject(new Error('Oops, error!'));
});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
   console.log(error);
});
