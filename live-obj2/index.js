// Lesson9 - объект в массив пользователей!!!

// input: obj;
// output: arr of obj

// algo
// 1.get Obj.entries()
// 2.map srr
// 3.sort arr

// option3
const getCustomersList = obj => {
   return Object.entries(obj)
      .map(arr => ({ ...arr[1], id: arr[0] }))
      .sort((prev, next) => prev.age - next.age);
};

// option2
const getCustomersList = obj => {
   return Object.entries(obj)
      .map(arr => {
         return { ...arr[1], id: arr[0] };
      })
      .sort((prev, next) => {
         return prev.age - next.age;
      });
};

//test func

const customers = {
   'customer-id-1': {
      name: 'William',
      age: 54,
   },
   'customer-id-2': {
      name: 'Tom',
      age: 17,
   },
};

getCustomersList(customers);
