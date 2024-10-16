 what is Currying ?
 Currying is a functional programming technique where a function is transformed into a sequence of functions, each taking a single argument. Instead of accepting multiple arguments at once, a curried function takes one argument and returns another function that takes the next argument, and so on, until all arguments have been provided.


 Where to Use Currying
Partial Application: Currying is useful for creating functions with preset arguments. It allows for the creation of more specific functions from general ones.
Functional Composition: It helps in composing multiple functions together in a clean and modular way.
Higher-Order Functions: Currying can simplify the process of passing functions around, especially when you need to work with callbacks or event handlers.

Use Cases for Currying
Dynamic Function Creation: Currying can create specialized functions based on user input or configurations.

Improved Readability: Code can be cleaner and more readable, as curried functions can express operations more declaratively.

Function Reusability: By creating a more modular approach to function creation, curried functions can be reused in different contexts with varying parameters.


Real-World Example of Currying
Consider a scenario where you're working on a web application that processes user payments. You might have a function to calculate the total price after applying various discounts.


function calculatePrice(orignalPrice) {
  return function(discount) {
    return function(tax) {
      return (orignalPrice - discount) + tax;
    };
  };
}

const orignalPrice = 100; 
const discount = 10; 
const tax = 5; 

const finalPriceCalculator = calculatePrice(basePrice)(discount);
const finalPrice = finalPriceCalculator(tax);

console.log(finalPrice); // Output: 95


