/*
============================================================
 MAP / FILTER / REDUCE
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
  return arr.map((a) => a * 2);
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
  return arr.filter((a) => a % 2 === 0);
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
  return arr.reduce((acc, curr) => acc + curr, 0);
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
  // M - 1
  // return arr.reduce((acc, curr) => {
  //   return acc > curr ? acc : curr;
  // }, arr[0]);

  // M-2
  return arr.reduce((max, curr) => Math.max(max, curr), arr[0]);
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
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
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
// Output:80
// -----------------------------------------------------------
function processMarks(students) {
  const qualifiedStudents = students
    .map((stu) => ({
      ...stu,
      marks: stu.marks < 50 ? stu.marks + 10 : stu.marks,
    }))
    .filter((stu) => stu.marks > 50);

  const totalMarks = qualifiedStudents.reduce((sum, stu) => sum + stu.marks, 0);
  return {
    totalMarks,
    qualifiedStudents,
  };
}

const students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 60 },
  { name: "C", marks: 30 },
  { name: "D", marks: 80 },
];

console.log("Q6:", processMarks(students));



// ===========================================================
// SECTION 2: MORE PRACTICE (INTERMEDIATE)
// ===========================================================

// -----------------------------------------------------------
// Q7. Get Names of Adults (map + filter)
// Description:
// Given an array of people, return an array of names of people who are 18 or older.
// Input: [{name: "A", age: 10}, {name: "B", age: 20}, {name: "C", age: 18}]
// Output: ["B", "C"]
// -----------------------------------------------------------
function getAdultNames(people) {
  // TODO: Implement using filter and map
}

const peopleQ7 = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 18 },
];
// Uncomment to test
// console.log("Q7:", getAdultNames(peopleQ7));

// -----------------------------------------------------------
// Q8. Total Price of Cart (reduce)
// Description:
// Calculate the total price of items in a cart.
// Input: [{price: 10, qty: 2}, {price: 5, qty: 4}]
// Output: 40
// -----------------------------------------------------------
function calculateTotal(cart) {
  // TODO: Implement using reduce
}

const cartQ8 = [
  { item: "Apple", price: 10, qty: 2 },
  { item: "Banana", price: 5, qty: 4 },
];
// Uncomment to test
// console.log("Q8:", calculateTotal(cartQ8));

// -----------------------------------------------------------
// Q9. Longest Word (reduce)
// Description:
// Find the longest word in an array of strings.
// Input: ["a", "big", "elephant"]
// Output: "elephant"
// -----------------------------------------------------------
function findLongestWord(words) {
  // TODO: Implement using reduce
}

// Uncomment to test
// console.log("Q9:", findLongestWord(["apple", "banana", "kiwi", "watermelon"]));

// -----------------------------------------------------------
// Q10. Count Character Occurrences (reduce)
// Description:
// Count the frequency of each character in a string.
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
// -----------------------------------------------------------
function countCharFreq(str) {
  // TODO: Implement using reduce (hint: split string first)
}

// Uncomment to test
// console.log("Q10:", countCharFreq("hello world"));

// -----------------------------------------------------------
// Q11. Flatten 2D Array (reduce)
// Description:
// Flatten a simple 2D array (array of arrays) into a single array.
// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]
// -----------------------------------------------------------
function flatten2D(arr) {
  // TODO: Implement using reduce
}

// Uncomment to test
// console.log("Q11:", flatten2D([[1, 2], [3, 4], [5]]));

// -----------------------------------------------------------
// Q12. Average Age (reduce)
// Description:
// Calculate the average age of a group of people.
// Input: [{age: 10}, {age: 20}]
// Output: 15
// -----------------------------------------------------------
function averageAge(people) {
  // TODO: Implement using reduce
}

const peopleQ12 = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 40 },
];
// Uncomment to test
// console.log("Q12:", averageAge(peopleQ12));

/*
============================================================
 EXPECTED OUTPUT (After Solving)
============================================================
Q1: [2,4,6]
Q2: [2,4,6]
Q3: 10
Q4: 20
Q5: {1:1,2:2,3:3}
Q6: 80
Q7: [ 'Bob', 'Charlie' ]
Q8: 40
Q9: watermelon
Q10: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
Q11: [ 1, 2, 3, 4, 5 ]
Q12: 30
============================================================
*/
