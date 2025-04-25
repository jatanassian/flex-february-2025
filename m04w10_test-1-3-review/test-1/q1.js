/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function (arr) {
  // SOLUTION 1
  //   let lowest = arr[0];
  //   arr.forEach(num => {
  //     if (num < lowest) {
  //       lowest = num;
  //     }
  //   });
  //   return lowest;

  // SOLUTION 2
  //   return arr.reduce((lowest, num) => {
  //     if (num < lowest) {
  //       return num;
  //     }
  //     return lowest;
  //   }, arr[0]);

  // SOLUTION 3
  return Math.min(...arr);
};

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function (arr) {
  return Math.max(...arr);
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function (arr) {
  return max(arr) - min(arr);
};

// Don't change below:

module.exports = { min, max, range };
