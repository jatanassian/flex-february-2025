'use strict';

/* Question 00

Write a converter that will change Celsius to Fahrenheit and back again.

Your function should take in a number, and a boolean.
The number will be the temperature in degrees, and the boolean will be whether to convert from C to F (true) or F to C (false).
Your answer should be rounded to one decimal place, and returned as a Number, not a string.

If the first argument is not a number, return NaN for the result.

Examples:

- tempConverter(32, true) returns 89.6 as a result
- tempConverter(32, false) returns 0.0 as a result
- tempConverter(98.6, false) returns 37 as a result
- tempConverter("12", <anything>) returns NaN as a result

(32°F − 32) × 5/9 = 0°C



*/

const tempConverter = function (value, cToF) {
  if (!Number.isInteger(value)) {
    return NaN;
  }

  if (cToF) {
    return Math.round(((value * 9) / 5 + 32) * 10) / 10;
  }
  return Math.round((((value - 32) * 5) / 9) * 10) / 10;
};

// Don't change below:

module.exports = { tempConverter };
