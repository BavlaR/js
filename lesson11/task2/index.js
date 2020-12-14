'use strict';

// input: array, boolean
// output: array

function sortContacts(arr, dir = true) {
   return !Array.isArray(arr)
      ? null
      : dir
      ? arr.sort((prev, next) => prev.name.localeCompare(next.name))
      : arr.sort((prev, next) => next.name.localeCompare(prev.name));
}

const contacts = [
   {
      name: 'Bob',
      phone: 7777777,
   },
   {
      name: 'John',
      phone: 8888888,
   },
   {
      name: 'Lisa',
      phone: 'Ne dam',
   },
];

console.log(sortContacts(contacts, false));
