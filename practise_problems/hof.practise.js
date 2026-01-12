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
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
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
  return arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  }, 0);
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
    console.log(`acc ${acc}, curr ${curr}`);
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
  const addTenMarks = students.map((stu) => {
    return {
      ...stu,
      marks: stu.marks < 50 ? stu.marks + 10 : stu.marks,
    };
  });

  console.log(addTenMarks);
  return addTenMarks
    .filter((mark) => mark.marks > 60)
    .reduce((acc, curr) => {
      return acc + curr.marks;
    }, 0);
}

const students = [
  { name: "A", marks: 45 },
  { name: "B", marks: 60 },
  { name: "C", marks: 30 },
  { name: "D", marks: 80 },
];

console.log("Q6:", processMarks(students));

/**
 * Problem:-
    Increase salary by 20% for employees whose salary is < 50,000
    Then calculate the total salary of employees whose final salary is > 60,000
 * output:- 140000
 */

const employees = [
  { name: "A", salary: 40000 },
  { name: "B", salary: 60000 },
  { name: "C", salary: 30000 },
  { name: "D", salary: 80000 },
];

function processEmployees(employees) {
  return employees
    .map((employee) => {
      return {
        ...employee,
        salary:
          employee.salary < 50000
            ? employee.salary + (employee.salary * 20) / 100
            : employee.salary,
      };
    })
    .filter((employee) => employee.salary >= 60000)
    .reduce((acc, curr) => {
      return acc + curr.salary;
    }, 0);
}

console.log("Q7:", processEmployees(employees));

/*
Problem:-
Add 5 marks to students with marks < 40
Count how many students scored ≥ 50
output:- 2
*/
const students1 = [
  { name: "A", marks: 35 },
  { name: "B", marks: 50 },
  { name: "C", marks: 38 },
  { name: "D", marks: 60 },
];

const result1 = students1
  .map((stu) => {
    return {
      ...stu,
      marks: stu.marks < 40 ? stu.marks + 5 : stu.marks,
    };
  })
  .filter((stu) => stu.marks >= 50)
  .map((stu) => {
    return {
      name: stu.name,
      marks: stu.marks,
    };
  });

console.log("Q8:", result1);

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
  return people.filter((ppl) => ppl.age >= 18).map((ppl) => ppl.name);
}

const peopleQ7 = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 18 },
];
// Uncomment to test
console.log("Q9:", getAdultNames(peopleQ7));

// -----------------------------------------------------------
// Q8. Total Price of Cart (reduce)
// Description:
// Calculate the total price of items in a cart.
// Input: [{price: 10, qty: 2}, {price: 5, qty: 4}]
// Output: 40
// -----------------------------------------------------------
function calculateTotal(cart) {
  return cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);
}

const cartQ8 = [
  { item: "Apple", price: 10, qty: 2 },
  { item: "Banana", price: 5, qty: 4 },
];
// Uncomment to test
console.log("Q10:", calculateTotal(cartQ8));

// -----------------------------------------------------------
// Q9. Longest Word (reduce)
// Description:
// Find the longest word in an array of strings.
// Input: ["a", "big", "elephant"]
// Output: "elephant"
// -----------------------------------------------------------
function findLongestWord(words) {
  return words.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
  }, "");
}

// Uncomment to test
console.log("Q9:", findLongestWord(["apple", "banana", "kiwi", "watermelon"]));

// -----------------------------------------------------------
// Q10. Count Character Occurrences (reduce)
// Description:
// Count the frequency of each character in a string.
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
// -----------------------------------------------------------
function countCharFreq(str) {
  const splitStr = str.split("");
  return splitStr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

// Uncomment to test
console.log("Q10:", countCharFreq("hello world"));

// -----------------------------------------------------------
// Q11. Flatten 2D Array (reduce)
// Description:
// Flatten a simple 2D array (array of arrays) into a single array.
// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]
// -----------------------------------------------------------
function flatten2D(arr) {
  return arr.reduce((acc, curr) => {
    // return acc.concat(curr)
    return [...acc, ...curr];
  }, []);
}

// Uncomment to test
console.log("Q11:", flatten2D([[1, 2], [3, 4], [5]]));

// -----------------------------------------------------------
// Q12. Average Age (reduce)
// Description:
// Calculate the average age of a group of people.
// Input: [{age: 10}, {age: 20}]
// Output: 15
// -----------------------------------------------------------
function averageAge(people) {
  return people.reduce((acc, curr) => {
    return (acc + curr.age) / 2;
  }, 0);
}

const peopleQ12 = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 40 },
];
// Uncomment to test
console.log("Q12:", averageAge(peopleQ12));

// Group users by role
/*
o/p:- {
  admin: ["A", "C"],
  user: ["B"]
}
*/

const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];

const result2 = users.reduce((acc, curr) => {
  //  M-1
  // if (acc[curr.role]) {
  //   acc[curr.role].push(curr.name);
  // } else {
  //   acc[curr.role] = [curr.name];
  // }

  // M-2
  acc[curr.role] = acc[curr.role] ? [...acc[curr.role], curr.name] : curr.name;
  return acc;
}, {});

console.log("Q13:", result2);

// Return the student object with highest marks
// o/p:- { name: "B", marks: 90 }
const students3 = [
  { name: "A", marks: 40 },
  { name: "B", marks: 90 },
  { name: "C", marks: 70 },
];

const result3 = students3.reduce((acc, curr) => {
  return acc.marks > curr.marks ? acc : curr;
}, students3[0]);

console.log("Q14:", result3);

// Return total price of products whose quantity > 1
// o/p:- 1100

const cart = [
  { name: "A", price: 100, qty: 2 },
  { name: "B", price: 200, qty: 1 },
  { name: "C", price: 300, qty: 3 },
];

console.log(
  cart
    .filter((c) => c.qty > 1)
    .reduce((acc, curr) => acc + curr.price * curr.qty, 0)
);

// Return email ids of users who are:
// active === true
// age >= 18
// o/p:- ["b@test.com", "d@test.com"]

const users1 = [
  { email: "a@test.com", age: 17, active: true },
  { email: "b@test.com", age: 25, active: true },
  { email: "c@test.com", age: 30, active: false },
  { email: "d@test.com", age: 20, active: true },
];

console.log(
  users1
    .filter((user) => user.active && user.age >= 18)
    .map((user) => user.email)
);

// Remove Duplicates & Sum
// Given an array of numbers, remove duplicates first and then sum numbers > 10
// Expected Output: 35
const nums = [5, 10, 15, 10, 20, 5];
console.log(
  [...new Set(nums)].filter((r) => r > 10).reduce((acc, curr) => acc + curr, 0)
);

// Find the employee with max salary
// Output:{ name: "B", salary: 90000 }

const employees1 = [
  { name: "A", salary: 40000 },
  { name: "B", salary: 90000 },
  { name: "C", salary: 60000 },
];

console.log(
  employees1.reduce((acc, curr) => {
    return acc.salary > curr.salary ? acc : curr;
  }, employees1[0])
);

// Merge two arrays of objects based on id and sum score
/*
Output:

[
  { id: 1, score: 15 },
  { id: 2, score: 35 },
]
*/

const arr1 = [
  { id: 1, score: 10 },
  { id: 2, score: 20 },
];
const arr2 = [
  { id: 1, score: 5 },
  { id: 2, score: 15 },
];

const combined = [...arr1, ...arr2];
console.log(combined);
const map = new Map();
combined.forEach((item) => {
  if (map.has(item.id)) {
    map.set(item.id, map.get(item.id) + item.score);
  } else {
    map.set(item.id, item.score);
  }
});
console.log(Array.from(map, ([id, score]) => ({ id, score })));
console.log(map);

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
