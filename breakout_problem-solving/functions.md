## Definition

Reusable piece of code, a block of that performs an action. A container for code.

## Related terms

- non-primitive: objects or functions - complex data that is not stores or accessed by value, but instead by reference
- parameters: inputs for our function, placeholders for arguments
- arguments: the value we pass into a function during its execution
- callbacks: a function passed to another as an argument/parameter
- anonymous function
- return: output from the function, defaults to `undefined`
- hoisting: pushes certain code to the top, scans for functions declarations before running the code

## Examples

```js
/**
 * Writing functions
 */

// Declaration based functions are hoisted: we can call them before they are defined in our code
myFunction(3, 'hello');

// Function declaration
function myFunction(param1, param2) {
  // Placeholder names are parameters
  return; // Returns undefined by default
}

myFunction('hello', 123); // Values passed in are arguments

// Function expression
// We store an anonymous function in a variable
const myOtherFunction = function () {
  return;
};

// Arrow function
const myArrow = () => {
  // Logic goes here
  return;
};

// Callback example
const myHigherOrderFunction = function (someCallbackFunction) {
  someCallbackFunction();
};

myFunc(function () {
  console.log('Hello');
});
```
