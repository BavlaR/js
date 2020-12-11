function addPropertyV1(obj, key, value) {
   obj[key] = value;

   return obj;
}

function addPropertyV2(obj, key, value) {
   const obj2 = Object.assign(obj);

   obj2[key] = value;

   return obj2;
}

function addPropertyV3(obj, key, value) {
   const obj2 = Object.assign({}, obj);

   obj2[key] = value;

   return obj2;
}

function addPropertyV4(obj, key, value) {
   const obj2 = { ...obj };

   obj2[key] = value;

   return obj2;
}

console.log(addPropertyV4({ name: 'Bob' }, 'secondName', 'Baisen'));
console.log(addPropertyV3({ name: 'Bob' }, 'secondName', 'Baisen'));
console.log(addPropertyV2({ name: 'Bob' }, 'secondName', 'Baisen'));
console.log(addPropertyV1({ name: 'Bob' }, 'secondName', 'Baisen'));
