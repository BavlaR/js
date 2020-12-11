// Step by step guide

//1. learn requirements
//2. create atep by step algorythm
//3. write solution & testing
//4. refactoring & final testing => final solution

function isPrime(num) {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
   }

   return true;
}

function getPrime(n) {
   for (let i = 2; i <= n; i++) {
      if (isPrime(i)) console.log(i);
   }
}

console.log(getPrime(10));
