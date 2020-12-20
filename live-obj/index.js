// input: arr arr
// output: obj
const buildObject = (keys, values) => {
   return keys.reduce((acc, key, i) => {
      return { ...acc, [key]: values[i] };
   }, {});
};

const buildObjectWithLoop = (keys, values) => {
   const res = {};

   for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const value = values[index];

      Object.assign(res, { [key]: value });
   }

   return res;
};

const arr1 = ['name', 'age', 'country'];
const arr2 = ['Bob', 20, 'Uganda'];

console.log(buildObject(arr1, arr2));

const someObj = {
   name: 'fff',
   age: 30,
};

const arr3 = [arr1, 10, 20];

console.log(arr3);
