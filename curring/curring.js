

//example of Currying functions:

 function add(a) {
   return function(b) {
     return a + b;
   };
 }
 console.log(add(5)(10));
