/*
============================================================
 map() vs forEach() — THEORY + OUTPUT EXPLANATION
============================================================

This is a VERY common interview question.
Interviewers want to test:
- Return value behavior
- Mutation of array
- When to use map vs forEach
*/

// -----------------------------------------------------------
// QUESTION: map vs forEach
// -----------------------------------------------------------

const arr = [2, 4, 6, 8, 10];

// -----------------------------------------------------------
// map()
// -----------------------------------------------------------

// THEORY:
// - map() returns a NEW array
// - Does NOT modify original array
// - Used when transformation is needed

const mapResult = arr.map((value) => {
  return value + 2;
});

// -----------------------------------------------------------
// forEach()
// -----------------------------------------------------------

// THEORY:
// - forEach() does NOT return anything (returns undefined)
// - Used for side effects (mutation, logging, API calls)
// - CAN modify original array if you do it manually

const forEachResult = arr.forEach((value, index) => {
  arr[index] = value + 3; // manually mutating original array
});

// -----------------------------------------------------------
// OUTPUT
// -----------------------------------------------------------

console.log("mapResult:", mapResult);
// [4, 6, 8, 10, 12]

console.log("forEachResult:", forEachResult);
// undefined

console.log("original arr after forEach:", arr);
// [5, 7, 9, 11, 13]

// -----------------------------------------------------------
// IMPORTANT INTERVIEW CLARIFICATION
// -----------------------------------------------------------

/*
❗ VERY IMPORTANT:

- forEach itself does NOT modify the array
- The modification happens because we explicitly wrote:
  arr[index] = value + 3

If we remove that line, arr would remain unchanged.
*/

// -----------------------------------------------------------
// INTERVIEW ONE-LINER (MEMORIZE)
// -----------------------------------------------------------

/*
map returns a new array and is used for transformations.
forEach returns undefined and is used for side effects.
*/

// q: Return only name of students in Capital
let students = [
  { name: "Izhar", roll: 31, marks: 80 },
  { name: "Jenny", roll: 15, marks: 69 },
  { name: "Salmaan", roll: 16, marks: 35 },
  { name: "Prithviraj", roll: 7, marks: 55 },
];

const capitalNames = students.map((student) => {
  return student.name.toUpperCase();
});

console.log(capitalNames);

let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names);

// q: Return only details of those who scored more than 60 marks
const details = students.filter((stu) => stu.marks > 60);
console.log(details);

// q: Return only details of those who scored more than 60 marks and roll Number greater than 15
const moreDetails = students.filter((stu) => stu.marks > 60 && stu.roll > 15);
console.log(moreDetails);
console.log("=".repeat(50));

// q: sum of marks of all students
const sumOfMarks = students.reduce((acc, curr, i) => {
  console.log([acc, curr]);
  return acc + curr.marks;
}, 0);
console.log(sumOfMarks);

// q: Return only names of students who scored more than 60
const answer = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);
console.log(answer);

// q: Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored
//  less than 60

// add 20 marks for less than 60 marks students
//  sum for students of marks greater than 60

const sum = students
  .map((stu) => {
    if (stu.marks < 60) return stu.marks + 20;
    return stu.marks;
  })
  .reduce((total, marks) => {
    if (marks > 60) return total + marks;
    return total;
  }, 0);

//   Alternate solution:-
const sum1 = students
  .map((stu) => (stu.marks < 60 ? stu.marks + 20 : stu.marks))
  .filter((marks) => marks > 60)
  .reduce((acc, curr) => acc + curr, 0);

console.log(sum);

/*
============================================================
 SDE-1 PROBLEM SOLVING PRACTICE — 15 QUESTIONS
============================================================
INSTRUCTIONS:
- Solve each function one by one
- DO NOT change test cases
- After writing logic, run file and compare output
- All questions are INTERVIEW LEVEL (Easy–Medium)
============================================================
*/

// -----------------------------------------------------------
// Q1. Reverse a String
// Input: "hello"
// Output: "olleh"
// -----------------------------------------------------------
function reverseString(str) {
  // TODO
}

console.log("Q1:", reverseString("hello"));

// -----------------------------------------------------------
// Q2. Check Palindrome
// Input: "madam"
// Output: true
// -----------------------------------------------------------
function isPalindrome(str) {
  // TODO
}

console.log("Q2:", isPalindrome("madam"));

// -----------------------------------------------------------
// Q3. Find Maximum Number in Array
// Input: [3, 7, 2, 9, 4]
// Output: 9
// -----------------------------------------------------------
function findMax(arr) {
  // TODO
}

console.log("Q3:", findMax([3, 7, 2, 9, 4]));

// -----------------------------------------------------------
// Q4. Two Sum
// Input: [2,7,11,15], target = 9
// Output: [0,1]
// -----------------------------------------------------------
function twoSum(nums, target) {
  // TODO
}

console.log("Q4:", twoSum([2, 7, 11, 15], 9));

// -----------------------------------------------------------
// Q5. Remove Duplicates
// Input: [1,2,2,3,4,4]
// Output: [1,2,3,4]
// -----------------------------------------------------------
function removeDuplicates(arr) {
  // TODO
}

console.log("Q5:", removeDuplicates([1, 2, 2, 3, 4, 4]));

// -----------------------------------------------------------
// Q6. FizzBuzz (1 to n)
// Input: 15
// Output: Fizz Buzz FizzBuzz ...
// -----------------------------------------------------------
function fizzBuzz(n) {
  // TODO
}

console.log("Q6:");
fizzBuzz(15);

// -----------------------------------------------------------
// Q7. Character Frequency
// Input: "aabbbc"
// Output: { a:2, b:3, c:1 }
// -----------------------------------------------------------
function charFrequency(str) {
  // TODO
}

console.log("Q7:", charFrequency("aabbbc"));

// -----------------------------------------------------------
// Q8. Find Missing Number (1 to n)
// Input: [1,2,4,5], n = 5
// Output: 3
// -----------------------------------------------------------
function missingNumber(arr, n) {
  // TODO
}

console.log("Q8:", missingNumber([1, 2, 4, 5], 5));

// -----------------------------------------------------------
// Q9. map vs forEach (Explain via output)
// Modify array using forEach, transform using map
// -----------------------------------------------------------
const arr9 = [1, 2, 3];
const mapRes = arr9.map((x) => x * 2);
arr9.forEach((x, i) => (arr9[i] = x + 1));

console.log("Q9 map:", mapRes);
console.log("Q9 arr after forEach:", arr9);

// -----------------------------------------------------------
// Q10. Sum using reduce
// Input: [1,2,3,4]
// Output: 10
// -----------------------------------------------------------
function sumUsingReduce(arr) {
  // TODO
}

console.log("Q10:", sumUsingReduce([1, 2, 3, 4]));

// -----------------------------------------------------------
// Q11. Closure Output
// What will be printed?
// -----------------------------------------------------------
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn();
fn();

// -----------------------------------------------------------
// Q12. Hoisting Output
// Guess output before running
// -----------------------------------------------------------
console.log(a);
var a = 10;

// -----------------------------------------------------------
// Q13. setTimeout with let vs var
// Observe output order
// -----------------------------------------------------------
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let:", i), 500);
}

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log("var:", j), 500);
}

// -----------------------------------------------------------
// Q14. Add Marks Problem (map + reduce)
// Students < 60 get +20, sum marks > 60
// -----------------------------------------------------------
const students1 = [
  { name: "A", marks: 50 },
  { name: "B", marks: 70 },
  { name: "C", marks: 40 },
];

function totalMarks(students1) {
  // TODO
}

console.log("Q14:", totalMarks(students));

// -----------------------------------------------------------
// Q15. Valid Parentheses
// Input: "()[]{}"
// Output: true
// -----------------------------------------------------------
function isValidParentheses(str) {
  // TODO
}

console.log("Q15:", isValidParentheses("()[]{}"));

/*
============================================================
 EXPECTED OUTPUT (Order may vary for async logs)
============================================================
Q1: olleh
Q2: true
Q3: 9
Q4: [0,1]
Q5: [1,2,3,4]
Q6: Fizz Buzz FizzBuzz ...
Q7: { a:2, b:3, c:1 }
Q8: 3
Q9 map: [2,4,6]
Q9 arr after forEach: [2,3,4]
Q10: 10
Q11: 1 2
Q12: undefined
Q13: let:0 let:1 let:2 var:3 var:3 var:3
Q14: 150
Q15: true
============================================================
*/
