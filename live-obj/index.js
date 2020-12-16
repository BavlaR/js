// input: obj obj
// output: obj
const mergeObjectsV1 = (obj1, obj2) => {
   Object.assign(obj1, obj2);
};

const mergeObjectsV2 = (obj1, obj2) => {
   Object.assign({}, obj2, obj1);
};

console.log(mergeObjectsV2({ name: 'Bob' }, { name: 'Alex', age: 30 }));

const mergeObjectsV3 = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjectsV3({ name: 'Bob' }, { name: 'Alex', age: 30 }));

const user = {};

function addPropertyV1(obj, userId) {
   obj.id = userId;
}

function addPropertyV3(obj, userId) {
   return { ...obj, id: userId };
}
