/**
 * Problem solving steps
 * 1. Inputs
 * 2. Output
 * 3. Processing
 */

/**
 * Sun two numbers.
 *
 * @param {number} num1 - First number to add
 * @param {number} num2 - Second number to add
 * @return {number} Sum of the two numbers
 */
const sumTwoNums = function (num1, num2) {
  // First solution:
  // let sum;
  // sum = num1 + num2;
  // return sum;

  // Improved solution
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return;
  }
  return num1 + num2;
};

console.log('sumTwoNums(1, 2) =>', sumTwoNums(1, 2)); // Expected output: 3
console.log('sumTwoNums(2, 2) =>', sumTwoNums(2, 2)); // Expected output: 4
console.log('sumTwoNums(10, 2) =>', sumTwoNums(10, 2)); // Expected output: 12
console.log(sumTwoNums('test', 'hello'));
