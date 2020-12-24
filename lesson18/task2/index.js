const wallet = {
   transactions: [10, 20, 6, 21, 17],
   getMax() {
      return Math.max.apply(null, this.transactions);
   },
   getMin() {
      return Math.min(...this.transactions);
   },
};

console.log(wallet.getMax(), wallet.getMin());
