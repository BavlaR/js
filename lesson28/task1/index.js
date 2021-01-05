export function calc(startVal) {
   let res = startVal;

   return {
      add(value) {
         res += value;
         return this;
      },
      mult(value) {
         res *= value;
         return this;
      },
      div(value) {
         res /= value;
         return this;
      },
      subtract(value) {
         res -= value;
         return this;
      },
      result() {
         return res;
      },
   };
}
