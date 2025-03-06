## Definition

A way to assign a value, assign data.
A container for a value.

## Related terms

- const: a variable that doesn't change
- let: a variable that can be re-assigned
- var: can be re-assigned like `let`
- block-scoped: within a set of curly braces
- function-scoped: only accessible in the function it is defined in

## Examples

```js
/*
 * Writing variables
 */

// Can be re-assigned, function-scoped
var myBool = true;

// Can be re-assigned, block-scoped
let myNum = 2;
myNum = {};

// Can't be re-assigned, block-scoped
const name = 'Bob';
```
