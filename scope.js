// var vs let vs const

// scopes - var is __ scoped
{
  var a = 5;
}

console.log(a);

// {
//   let b = 5;
// }

// console.log(b);

// {
//   const c = 5;
// }

// console.log(c);

// variable shadowing
function test() {
  let a = "Hello";

  if (true) {
    let a = "hi";
    console.log(a);
  }
  console.log(a);
}

test();

// illegal shadowing
function test() {
  var a = "Hello";
  let b = "Bye";

  if (true) {
    let a = "hi";
    // var b = "Goodbye";
    console.log(a);
    console.log(b);
  }
}

test();

// Declaration
var a;
var a; // No error

// let a;
// let a; // Re-declaration error

// const a ;
// const a ; // Re-declaration error and initialization error

// Re-Initialization
var a = 1;
a = 1;

let b = 2;
b = 2;

const c = 3;
// c = 4; //TypeError: Assignment to constant variable.

// Hoisting
console.log(count); // undefined - var is hoisted
var count = 10;

console.log(count1); // let and const are also hoisted but temporal dead zone
console.log(count2);
// ReferenceError: Cannot access 'count1' before initialization

let count1 = 10;
const count2 = 20;
