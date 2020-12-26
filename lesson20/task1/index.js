class User {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   sayHi() {
      console.log(`Hi, I am ${this.name}`);
   }

   requestNewPhoto() {
      console.log(`New photo request was sent for ${this.name}`);
   }

   setAge(newAge) {
      this.age = newAge;

      if (this.age >= 25) console.log(`New photo request was sent for ${this.name}`);

      return newAge < 0 ? false : this.age;
   }

   static createEmpty() {
      return {
         name: '',
         age: null,
      };
   }
}

const user = new User('John', 15);
console.log(user);
user.setAge(30);
console.log(User.createEmpty());
