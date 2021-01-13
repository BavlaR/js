/* eslint-disable max-classes-per-file */
export class Sportsman {
   constructor(name) {
      console.log(this);
      this.name = name;
   }

   run() {
      console.log(`${this.name} is running`);
   }
}

export class Swimmer extends Sportsman {
   constructor(name, style) {
      // can lose context - 1
      super(name);
      this.style = style;
   }

   testFunc() {
      const binded = this.swim.bind(this);

      setTimeout(binded, 3000);
   }

   swim() {
      console.log(`${this.name} is swimming ${this.style}`);
   }
}

// test
const sportsman = new Sportsman('Den');
const swimmer = new Swimmer('User', 'Some style');
console.log(swimmer);

// lose context example 2

// const swimFunc = swimmer.swim;
// swimFunc();

// lose context example 3

// Swimmer.swim();

const obj = {
   name: 'Test',
   run() {
      console.log('John is running');
   },
};

console.log(obj);
