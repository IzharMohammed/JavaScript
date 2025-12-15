//  Problem:- we cant print multiple numbers
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// Loops

// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("==========================");
//  Reverse for loop
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("==========================");
// Loops + Array
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("==================");

// for..of
for (const fruit of fruits) {
  console.log(fruit);
}
