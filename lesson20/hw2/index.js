/* eslint-disable max-classes-per-file */
class User {
   constructor(id, name, sessionId) {
      Object.defineProperties(this, {
         id: {
            value: id,
            writable: false,
         },
         name: {
            value: name,
            writable: false,
         },
         sessionId: {
            value: sessionId,
            writable: false,
         },
      });
   }
}

class UserRepository {
   constructor(users) {
      Object.defineProperty(this, users, {
         value: Object.freeze(users),
         writable: false,
      });
   }

   getUserNames() {
      return this.users.map(user => user.name);
   }

   getUserIds() {
      return this.users.map(user => user.id);
   }

   getUserNameById(id) {
      return this.users.find(user => user.id === id).name;
   }
}

const userRepo = new UserRepository([
   { name: 'bob', id: 1 },
   { name: 'goga', id: 2 },
   { name: 'vasia', id: 3 },
]);
console.log(userRepo);
console.log(userRepo.getUserNames());
console.log(userRepo.getUserIds());
