function pickProps(obj, arrStr) {
   const objRes = {};

   arrStr.filter(str => obj.hasOwnProperty([str])).forEach(str => (objRes[str] = obj[str]));

   return objRes;
}

console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));
