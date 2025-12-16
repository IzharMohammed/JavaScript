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
