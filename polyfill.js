/*
============================================================
 POLYFILLS: map(), filter(), reduce()
============================================================

WHAT IS A POLYFILL?
- A polyfill is a custom implementation of a JS feature
  that may not exist in older browsers.
- Interviewers ask polyfills to test:
  ✔ Understanding of array methods
  ✔ Callbacks
  ✔ `this` keyword
  ✔ Loops & edge cases
*/

const nums = [1, 2, 3, 4, 5];

// -----------------------------------------------------------
// 1) POLYFILL FOR map()
// -----------------------------------------------------------

// Original syntax:
// Array.map((value, index, array) => {})

// THEORY:
// - map returns a NEW array
// - Same length as original
// - Callback is applied to every element

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    // this -> refers to the array on which myMap is called
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const multiplyByTwo = nums.myMap((num, i) => {
  return num * 2;
});

console.log("myMap result:", multiplyByTwo);
// Output: [2, 4, 6, 8, 10]

// -----------------------------------------------------------
// 2) POLYFILL FOR filter()
// -----------------------------------------------------------

// Original syntax:
// Array.filter((value, index, array) => boolean)

// THEORY:
// - filter returns a NEW array
// - Length may be smaller
// - Callback must return true to keep element

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const moreThanThree = nums.myFilter((num) => num > 3);

console.log("myFilter result:", moreThanThree);
// Output: [4, 5]

// -----------------------------------------------------------
// 3) POLYFILL FOR reduce()
// -----------------------------------------------------------

// Original syntax:
// Array.reduce((acc, curr, index, array) => {}, initialValue)

// THEORY:
// - reduce returns a SINGLE value
// - accumulator stores the result
// - initialValue is optional but IMPORTANT

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      // If no initial value, first element becomes accumulator
      accumulator = this[i];
    }
  }

  return accumulator;
};

const sumUsingMyReduce = nums.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("myReduce result (sum):", sumUsingMyReduce);
// Output: 15

// -----------------------------------------------------------
// IMPORTANT INTERVIEW NOTES
// -----------------------------------------------------------

/*
1) Why we use Array.prototype?
   - So that method is available on all arrays

2) Why NOT use arrow function for polyfill?
   - Arrow functions do NOT have their own `this`
   - We need `this` to refer to the array

3) reduce edge case:
   - Always handle missing initialValue
*/