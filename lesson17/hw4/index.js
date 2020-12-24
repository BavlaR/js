// const user = {
//    firstName: 'George',
//    lastName: 'Washington',
// };

// Object.defineProperty(user, 'fullName', {
//    get() {
//       return `${this.firstName} ${this.lastName}`;
//    },

//    set(value) {
//       this.firstName = value.split(' ')[0];
//       this.lastName = value.split(' ')[1];
//    },
// });

const user = {
   firstName: 'George',
   lastName: 'Washington',
   getFullName() {
      return `${this.firstName} ${this.lastName}`;
   },
   setFullName(fullName) {
      [this.firstName, this.lastName] = fullName.split(' ');
   },
};

user.setFullName('Bob Baisen');

console.log(user.lastName);
console.log(user.getFullName());
