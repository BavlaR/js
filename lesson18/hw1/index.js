// передаем в аргументы функцию, историю вызовов которой хотим сохранять

function saveCalls(fn) {
   const calls = [];

   function withMemory(...args) {
      withMemory.calls.push(args);

      return fn.apply(this, args);
   }

   withMemory.calls = calls;

   return withMemory;
}

function test(a, b) {
   return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);

console.log(testWithMemory(4, 2));

console.log(testWithMemory(9, 1));

console.log(testWithMemory.calls);
