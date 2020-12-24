// Отметить всех администраторов

// result:
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];

//algo
// 1. irerate arr of obj - map
// 2. check if elem is admin => add is admin: true/false

// case1
/* function markAdmins(usersList, adminIds) {
   return usersList.map(user => {
      return adminIds.includes(user.id)
         ? {
              id: user.id,
              isAdmin: true,
              name: user.name,
           }
         : {
              id: user.id,
              isAdmin: false,
              name: user.name,
           };
   });
} */

// case2

/* function markAdmins(usersList, adminIds) {
   return usersList.map(user => {
      return adminIds.includes(user.id)
         ? { ...user, isAdmin: true }
         : { ...user, isAdmin: false };
   });
} */

//case3

/* function markAdmins(usersList, adminIds) {
   return usersList.map(user => {
      let isAdmin = adminIds.includes(user.id);

      return { ...user, isAdmin };
   });
} */

//case4

const markAdmins = (usersList, adminIds) =>
   usersList.map(user =>
      adminIds.includes(user.id) ? { ...user, isAdmin: true } : { ...user, isAdmin: false },
   );

// test
const adminIds = ['1', '3'];
const users = [
   { id: '1', name: 'Bob' },
   { id: '2', name: 'Tom' },
   { id: '3', name: 'Sam' },
   { id: '4', name: 'Tad' },
];

console.log(markAdmins(users, adminIds));
