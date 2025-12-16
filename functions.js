/*
============================================================
 JAVASCRIPT FUNCTIONS — THEORY + OUTPUT BASED QUESTIONS
============================================================

Covers:
- Function Expression
- Anonymous Function
- First Class Functions
- IIFE
- Scope + setTimeout
- Function Hoisting
- Params vs Arguments
- Spread vs Rest
- Callback Functions
- Arrow Functions vs Regular Functions

This file is INTERVIEW READY.
*/

// -----------------------------------------------------------
// 1) FUNCTION EXPRESSION
// -----------------------------------------------------------

// THEORY:
// A function expression is when a function is assigned to a variable.
// It is NOT hoisted.

const squareExpr = function (num) {
  return num * num;
};

console.log("Function Expression:", squareExpr(4)); // 16

// -----------------------------------------------------------
// 2) ANONYMOUS FUNCTION
// -----------------------------------------------------------

// THEORY:
// A function without a name is called an anonymous function.
// It can be:
// - Stored in a variable
// - Passed as a callback

setTimeout(function () {
  console.log("Anonymous function as callback");
}, 500);

// -----------------------------------------------------------
// 3) FIRST CLASS FUNCTIONS
// -----------------------------------------------------------

// THEORY:
// In JS, functions are treated like variables.
// They can be passed as arguments, returned from functions,
// and stored in variables.

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is:", fn(5));
}

displaySquare(square);

// -----------------------------------------------------------
// 4) IIFE (Immediately Invoked Function Expression)
// -----------------------------------------------------------

// THEORY:
// IIFE runs immediately after creation.
// Used to avoid polluting global scope.

(function squareIIFE(num) {
  console.log("IIFE output:", num * num);
})(5);

// IIFE — Output based question
(function (x) {
  return (function (y) {
    console.log("IIFE closure output:", x); // 1
  })(2);
})(1);

// -----------------------------------------------------------
// 5) FUNCTION SCOPE + setTimeout (VERY IMPORTANT)
// -----------------------------------------------------------

// THEORY:
// let -> block scoped
// var -> function scoped

// Using let
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("let:", i);
  }, i * 1000);
}
// Output: 0 1 2 3 4

// Using var
for (var j = 0; j < 5; j++) {
  setTimeout(function () {
    console.log("var:", j);
  }, j * 1000);
}
// Output: 5 5 5 5 5

// -----------------------------------------------------------
// 6) FUNCTION HOISTING
// -----------------------------------------------------------

// THEORY:
// Function declarations are hoisted completely.
// Function expressions are NOT hoisted.

functionName();
console.log(x); // undefined

function functionName() {
  console.log("Izhar");
}

var x = 21;

var fun = function () {
  console.log(x); // undefined (local x is hoisted)
  var x = 20;
};

fun();

// -----------------------------------------------------------
// 7) PARAMETERS vs ARGUMENTS
// -----------------------------------------------------------

// THEORY:
// Parameters -> variables defined in function definition
// Arguments  -> actual values passed to function

function squareParam(num) {
  console.log("Params vs Arguments:", num * num);
}

squareParam(5); // 5 is argument

// -----------------------------------------------------------
// 8) SPREAD vs REST OPERATOR
// -----------------------------------------------------------

// REST: collects values into array
function multiply(...nums) {
  console.log("Rest operator:", nums);
}

const arr = [5, 6];

// SPREAD: expands array
multiply(...arr);

// -----------------------------------------------------------
// 9) CALLBACK FUNCTIONS
// -----------------------------------------------------------

// THEORY:
// A callback function is passed as an argument
// and executed later.

// Examples: setTimeout, map, filter, reduce

[1, 2, 3].map(function (num) {
  return num * 2;
});

// -----------------------------------------------------------
// 10) ARROW FUNCTIONS
// -----------------------------------------------------------

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log("Arrow function:", addArrow(2, 3));

// -----------------------------------------------------------
// ARROW vs REGULAR FUNCTIONS (IMPORTANT)
// -----------------------------------------------------------

// 1) Syntax
function squareFn(num) {
  return num * num;
}

const squareArrow = (num) => num * num;

// 2) Arguments object
function regularFn() {
  console.log("regular arguments:", arguments);
}

regularFn(1, 2, 3);

const arrowFn = () => {
  // console.log(arguments); // ❌ arguments not available
};

// 3) this keyword
let user = {
  userName: "Izhar",
  rc1: () => {
    console.log("Arrow this:", this.userName); // undefined
  },
  rc2() {
    console.log("Regular this:", this.userName); // Izhar
  },
};

user.rc1();
user.rc2();

// -----------------------------------------------------------
// INTERVIEW ONE-LINERS (MEMORIZE)
// -----------------------------------------------------------

/*
1) Functions are first-class citizens in JS.
2) Arrow functions do not have their own this or arguments.
3) IIFE is used to avoid global scope pollution.
*/
