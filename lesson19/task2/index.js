function getOwnProps(someObj) {
   return Object.keys(someObj).filter(key => typeof someObj[key] !== 'function');
}

const vehicle = {
   name: 'Argo',
   move() {
      console.log(`${this.name} is moving`);
   },
   stop() {
      console.log(`${this.name} stopped`);
   },
};

console.log(getOwnProps(vehicle));
