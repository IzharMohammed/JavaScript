//  what is function expression ?
// what is anonymous functions anf it can be used as callback and also can be stored in variable
// const square = function (num) {
//   return num * num;
// };

// square();

//  what are first class functions
function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is:-", fn(5));
}

displaySquare(square);

//  what is IIFE

(function square(num) {
  console.log(num * num);
})(5);

// IIFE - o/p based question
(function (x) {
  return (function (y) {
    console.log(x); // 1
  })(2);
})(1);

// Function scope - o/p based question
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
// //  1,2,3,4,5
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
//  5,5,5,5,5

// Function Hoisting

functionName();
console.log(x);

function functionName() {
  console.log("Izhar");
}

var x = 21;

var fun = function () {
  console.log(x); // undefined: bcoz firsty it will take 21 because it is global scope but when it comes inside function then it will hoist the local variable x so after hoisting x becomes undefined
  var x = 20;
};

fun();

//  Params vs arguments
function square(num) {
  // Params
  console.log(num * num);
}

square(5); // Arguments

//  spread vs rest
function multiply(...nums) {
  // Rest if we use ... here
  console.log(nums);
}
var arr = [5, 6];
multiply(...arr); // spread if we use ... here

//  Callback function
// setTimeOut, map, filter, reduce are js cb functions

// Arrow functions
const add = (a, b) => {
  return a + b;
};

// Arrow functions vs regular functions
// 1- syntax
function square(num) {
  return num * num;
}

const square1 = (num) => {
  return num * num;
};

// 2- Implicit "return" keyword
const squareArr = (num) => num * num;

// 3- Arguments
function fn() {
  console.log("regular", arguments);
}

fn(1, 3, 2);

const fnArr = () => {
  console.log("arrow", arguments);
};
fn(1, 3, 2);

// 4- This keyword
let user = {
  userName: "Izhar",
  rc1: () => {
    console.log("Welcome", this.userName); // welcome undefined
  },
  rc2() {
    console.log("welcome", this.userName); // welcome izhar
  },
};

user.rc1();
user.rc2();
