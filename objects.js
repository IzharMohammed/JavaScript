/**
 * --------------------------------------------------------------------------
 *                              JAVASCRIPT OBJECTS
 * --------------------------------------------------------------------------
 * Theory:
 * - Objects are non-primitive data types that allow you to store collections of data.
 * - They are composed of key-value pairs (properties).
 * - Keys are always strings (or Symbols), while values can be of any data type.
 * - Objects are mutable and are passed by reference, not by value.
 */

// ==========================================
// 1. CREATING OBJECTS
// ==========================================

// Method A: Object Literal (Most Common)
const user = {
  name: "Izhar",
  age: 21,
  "is Admin": true, // Multi-word keys need quotes
};

// Method B: Object Constructor (Less Common)
const obj = new Object();
obj.id = 101;

// ==========================================
// 2. ACCESSING PROPERTIES
// ==========================================

// Dot Notation (Use when you know the key name)
console.log(user.name); // "Izhar"

// Bracket Notation (Use for dynamic keys or multi-word keys)
console.log(user["age"]); // 21
console.log(user["is Admin"]); // true

// Dynamic Property Access
const property = "name";
console.log(user[property]); // "Izhar"

// Computed Property Names
const keyName = "firstName";
const user1 = {
  [keyName]: "Mohammed Izhar", // Key becomes "firstName"
};

// ==========================================
// 3. MODIFYING OBJECTS
// ==========================================

user.age = 22;       // Update
user.city = "Dubai"; // Add
delete user.age;     // Delete

// ==========================================
// 4. ITERATING OVER OBJECTS
// ==========================================

const person = { name: "Izhar", age: 21, role: "Dev" };

// 'for...in' loop (Iterates over keys)
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person));   // ["name", "age", "role"]
console.log(Object.values(person)); // ["Izhar", 21, "Dev"]

// Example: Function to multiply numeric properties by 2
let nums = { a: 100, b: 200, title: "My Nums" };

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(nums);
console.log(nums); // { a: 200, b: 400, title: "My Nums" }

// ==========================================
// 5. OBJECT METHODS & 'THIS' KEYWORD
// ==========================================

const shape = {
  radius: 10,
  // Normal function: 'this' refers to the object calling the method
  diameter() {
    return this.radius * 2;
  },
  // Arrow function: 'this' refers to the outer scope (window/global), NOT the object
  perimeter: () => this.radius * 2,
};

console.log(shape.diameter());  // 20
console.log(shape.perimeter()); // NaN (this.radius is undefined in global scope)

// ==========================================
// 6. DESTRUCTURING & SPREAD OPERATOR
// ==========================================

// Destructuring (Extracting values)
const { name: userName, role } = person;
console.log(userName, role); // "Izhar", "Dev"

// Nested Destructuring
const userProfile = {
  id: 1,
  info: { firstName: "Mohammed", lastName: "Izhar" }
};
const { info: { firstName } } = userProfile;

// Spread Operator (Cloning & Merging)
const admin = { admin: true, ...person }; // Merges person into admin

// ==========================================
// 7. COPYING OBJECTS (Reference vs Value)
// ==========================================

// Reference Copy (Both variables point to same object)
let a = { x: 1 };
let b = a;
b.x = 2;
console.log(a.x); // 2 (Changed because 'b' is just a reference to 'a')

// Shallow Copy (Top level is copied, nested objects are still references)
const shallowClone = { ...person };
const shallowClone2 = Object.assign({}, person);

// Deep Copy (Complete independent copy)
const deepClone = JSON.parse(JSON.stringify(userProfile));

// ==========================================
// 8. USEFUL JSON METHODS
// ==========================================

const str = JSON.stringify(person); // Object to String
const parsed = JSON.parse(str);     // String to Object