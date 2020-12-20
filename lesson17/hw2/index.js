const transaction = {
   amount: 1200,
   operation: 'sell',
   currency: 'USD',
   exchange: 'NYSE',
   printTransaction() {
      console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
   },
};

const anotherTransaction = {
   amount: 400,
   operation: 'buy',
   currency: 'USD',
   exchange: 'NASDAQ',
};

// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
transaction.printTransaction.call(anotherTransaction);
