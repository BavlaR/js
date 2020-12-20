var foo = 1;

function bar() {
   if (!foo) {
      var foo = 1;
   }

   return foo;
}

var foo = bar();
console.log(foo);
