/*
============================================================
 var vs let vs const — THEORY + EXAMPLES (Interview Ready)
============================================================

Quick Summary:
- var   -> function scoped, hoisted with `undefined`, allows redeclaration
- let   -> block scoped, hoisted but in Temporal Dead Zone (TDZ)
- const -> block scoped, hoisted but in TDZ, must be initialized, no reassignment

Use this file to revise before interviews.
*/

// -----------------------------------------------------------
// 1) SCOPE
// -----------------------------------------------------------

// THEORY:
// - var is FUNCTION scoped (ignores block {})
// - let & const are BLOCK scoped (respect {})

{
  var a = 5; // var ignores block scope
}

console.log(a); // 5 (accessible outside block)

{
  let b = 5; // block scoped
}
// console.log(b); // ReferenceError: b is not defined

{
  const c = 5; // block scoped
}
// console.log(c); // ReferenceError: c is not defined

// -----------------------------------------------------------
// 2) VARIABLE SHADOWING
// -----------------------------------------------------------

// THEORY:
// Shadowing happens when an inner scope variable has the same
// name as an outer scope variable. This is allowed with let/const.

function shadowingExample() {
  let msg = "Hello";

  if (true) {
    let msg = "Hi"; // shadows outer msg
    console.log(msg); // Hi
  }

  console.log(msg); // Hello
}

shadowingExample();

// -----------------------------------------------------------
// 3) ILLEGAL SHADOWING
// -----------------------------------------------------------

// THEORY:
// - var cannot shadow a let/const variable in the same or inner scope
// - let can shadow var (allowed)

function illegalShadowingExample() {
  var x = "Hello";
  let y = "Bye";

  if (true) {
    let x = "Hi"; // allowed: let shadows var
    // var y = "Goodbye"; // ❌ Illegal shadowing (uncomment to see error)

    console.log(x); // Hi
    console.log(y); // Bye
  }
}

illegalShadowingExample();

// -----------------------------------------------------------
// 4) DECLARATION RULES
// -----------------------------------------------------------

// THEORY:
// - var allows redeclaration
// - let & const do NOT allow redeclaration

var d;
var d; // ✅ No error

// let e;
// let e; // ❌ SyntaxError: Identifier 'e' has already been declared

// const f;
// const f; // ❌ SyntaxError + const must be initialized

// -----------------------------------------------------------
// 5) INITIALIZATION & REASSIGNMENT
// -----------------------------------------------------------

// THEORY:
// - var & let can be reassigned
// - const cannot be reassigned

var g = 1;
g = 2; // ✅ allowed

let h = 3;
h = 4; // ✅ allowed

const i = 5;
// i = 6; // ❌ TypeError: Assignment to constant variable

// IMPORTANT:
// const prevents reassignment, NOT mutation

const user = { name: "Izhar" };
user.name = "Mohammed"; // ✅ allowed (object mutation)
console.log(user);

// -----------------------------------------------------------
// 6) HOISTING
// -----------------------------------------------------------

// THEORY:
// - var is hoisted and initialized with `undefined`
// - let & const are hoisted but stay in Temporal Dead Zone (TDZ)

// --- var hoisting ---
console.log(count); // undefined
var count = 10;

// Internally JS does:
// var count;
// console.log(count);
// count = 10;

// --- let & const hoisting (TDZ) ---
// console.log(count1); // ❌ ReferenceError (TDZ)
// console.log(count2); // ❌ ReferenceError (TDZ)

let count1 = 10;
const count2 = 20;

// -----------------------------------------------------------
// INTERVIEW ONE-LINER (MEMORIZE)
// -----------------------------------------------------------

/*
var is function scoped, hoisted with undefined and allows redeclaration.
let and const are block scoped, hoisted but in temporal dead zone.
const cannot be reassigned.
*/
