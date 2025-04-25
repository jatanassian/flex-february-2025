/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function (arr) {
  const numbersCount = {}; // { 6: 2, 2: 1, 3: 2, ... }
  let currentMode = arr[0]; // 6

  arr.forEach(num => {
    if (numbersCount[num]) {
      numbersCount[num]++;
    } else {
      numbersCount[num] = 1;
    }

    if (numbersCount[num] > numbersCount[currentMode]) {
      currentMode = num;
    }
  });

  return currentMode;
};

// Don't change below:
module.exports = { mode };
