/*
============================================================
 map(), filter(), reduce() — THEORY + EXAMPLES (Interview Ready)
============================================================

Quick Summary:
- map    -> transforms each element and returns a NEW array
- filter -> selects elements based on condition
- reduce -> reduces array to a single value

IMPORTANT:
- All three do NOT mutate original array
- All accept a callback function
*/

const nums = [1, 2, 3, 4];

// -----------------------------------------------------------
// 1) map()
// -----------------------------------------------------------

// THEORY:
// - map() is used to TRANSFORM each element of an array
// - It returns a NEW array of SAME length
// - Callback receives: (currentValue, index, originalArray)

const multiplyThree = nums.map((num, index, array) => {
  console.log("map => index & array:", index, array);
  return num * 3; // transformed value
});

console.log("map result:", multiplyThree);
// Output: [3, 6, 9, 12]

// Interview tip:
// Use map when you want to MODIFY each element

// -----------------------------------------------------------
// 2) filter()
// -----------------------------------------------------------

// THEORY:
// - filter() is used to SELECT elements based on a condition
// - Returns a NEW array
// - Length may be LESS than original
// - Callback must return true or false

const moreThanTwo = nums.filter((num) => {
  return num > 2; // condition
});

console.log("filter result:", moreThanTwo);
// Output: [3, 4]

// Interview tip:
// Use filter when you want to REMOVE unwanted elements

console.log("=".repeat(40));

// -----------------------------------------------------------
// 3) reduce()
// -----------------------------------------------------------

// THEORY:
// - reduce() reduces an array to a SINGLE value
// - Can return number, string, object, array
// - Takes an accumulator and current value
// - Initial value is IMPORTANT

// Syntax:
// array.reduce((accumulator, currentValue) => {}, initialValue)

const sum = nums.reduce((acc, curr) => {
  console.log("reduce => acc & curr:", acc, curr);
  return acc + curr; // updated accumulator
}, 0);

console.log("reduce result (sum):", sum);
// Output: 10

// -----------------------------------------------------------
// COMMON INTERVIEW EXAMPLES WITH reduce()
// -----------------------------------------------------------

// Example 1: Find maximum number
const max = nums.reduce((acc, curr) => {
  console.log([acc, curr]);
  return curr > acc ? curr : acc;
}, nums[0]);

console.log("max using reduce:", max);

// Example 2: Count frequency
const words = ["apple", "banana", "apple", "orange", "banana"];

const frequency = words.reduce((acc, curr) => {
  console.log([acc, curr]);
  console.log(acc[curr]);

  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
/**
 * {}, "apple"
 *
 *
 */

console.log("frequency using reduce:", frequency);

// -----------------------------------------------------------
// FINAL INTERVIEW ONE-LINER (MEMORIZE)
// -----------------------------------------------------------

/*
map transforms array,
filter selects elements,
reduce combines elements into one value.
*/
