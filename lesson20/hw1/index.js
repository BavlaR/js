class Order {
   constructor(price, city, type, isConfirmed = false) {
      this.id = String(Math.random());
      this.price = price;
      this.dateCreated = new Date();
      this.isConfirmed = isConfirmed;
      this.dateConfirmed = new Date();
      this.city = city;
      this.type = type;
   }

   checkPrice() {
      return this.price > 1000;
   }

   confirmOrder() {
      if (!this.isConfirmed) {
         this.isConfirmed = true;
         this.dateConfirmed = new Date();
      }
   }

   isValidType() {
      return this.type === 'Buy' || this.type === 'Sell';
   }
}

const order = new Order(150, 'Chicago', 'sdgfrdx');
console.log(order.isConfirmed);
order.confirmedOrder();

console.log(order.isConfirmed);
