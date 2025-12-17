/*
============================================================
 MAP / FILTER / REDUCE + SORTING & SEARCHING PRACTICE
============================================================
INSTRUCTIONS:
- Solve each function below
- DO NOT change function names or test cases
- Write only logic inside functions
- Run file to verify output
============================================================
*/

// ===========================================================
// SECTION 1: MAP / FILTER / REDUCE (FULL-STACK FAVORITE)
// ===========================================================

// -----------------------------------------------------------
// Q1. Double All Numbers Using map
// Description:
// Given an array of numbers, return a new array where each number is doubled.
// Input: [1, 2, 3]
// Output: [2, 4, 6]
// -----------------------------------------------------------
function doubleNumbers(arr) {
  // TODO
}

console.log("Q1:", doubleNumbers([1, 2, 3]));

// -----------------------------------------------------------
// Q2. Filter Even Numbers Using filter
// Description:
// Return only even numbers from the array.
// Input: [1,2,3,4,5,6]
// Output: [2,4,6]
// -----------------------------------------------------------
function filterEven(arr) {
  // TODO
}

console.log("Q2:", filterEven([1, 2, 3, 4, 5, 6]));

// -----------------------------------------------------------
// Q3. Sum of Array Using reduce
// Description:
// Return sum of all numbers in array.
// Input: [1,2,3,4]
// Output: 10
// -----------------------------------------------------------
function sumArray(arr) {
  // TODO
}

console.log("Q3:", sumArray([1, 2, 3, 4]));

// -----------------------------------------------------------
// Q4. Find Maximum Using reduce
// Description:
// Return maximum number in array.
// Input: [10, 5, 8, 20]
// Output: 20
// -----------------------------------------------------------
function findMax(arr) {
  // TODO
}

console.log("Q4:", findMax([10, 5, 8, 20]));

// -----------------------------------------------------------
// Q5. Count Frequency Using reduce
// Description:
// Return frequency object of elements.
// Input: [1,2,2,3,3,3]
// Output: {1:1,2:2,3:3}
// -----------------------------------------------------------
function countFrequencyReduce(arr) {
  // TODO
}

console.log("Q5:", countFrequencyReduce([1, 2, 2, 3, 3, 3]));

// -----------------------------------------------------------
// Q6. Chain map + filter + reduce
// Description:
// Add 10 marks to students with marks < 50
// Then sum marks that are > 60
// Input:
// [
//   { name: "A", marks: 45 },
//   { name: "B", marks: 60 },
//   { name: "C", marks: 30 },
//   { name: "D", marks: 80 }
// ]
// Output: 150
// -----------------------------------------------------------
function processMarks(students) {
  // TODO
}

const students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 60 },
  { name: "C", marks: 30 },
  { name: "D", marks: 80 },
];

console.log("Q6:", processMarks(students));

/*
============================================================
 EXPECTED OUTPUT (After Solving)
============================================================
Q1: [2,4,6]
Q2: [2,4,6]
Q3: 10
Q4: 20
Q5: {1:1,2:2,3:3}
Q6: 150
Q7: [1,2,5,8]
Q8: [8,5,2,1]
Q9: 2
Q9 Edge: -1
Q10: 3
Q10 Edge: -1
Q11: { min:1, max:9 }
============================================================
*/
