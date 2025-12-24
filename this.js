/**
 * ==========================================
 * 👈 THE 'this' KEYWORD IN JAVASCRIPT
 * ==========================================
 * 
 * 1. WHAT IS 'this'?
 * ------------------
 * 'this' refers to the object that is executing the current function.
 * Its value depends on HOW the function is called (Runtime Binding).
 */

// ==========================================
// 2. GLOBAL CONTEXT
// ==========================================
console.log(this); // Window (in browser) or {} (in Node.js)


// ==========================================
// 3. FUNCTION CONTEXT (Normal vs Arrow)
// ==========================================

// A. Normal Function
// In non-strict mode, 'this' refers to Global Object (Window/global).
// In strict mode, 'this' is undefined.
function showThis() {
    console.log("Normal Function:", this);
}
showThis();

// B. Arrow Function
// Arrow functions DO NOT have their own 'this'.
// They inherit 'this' from the parent scope (Lexical Scoping).
const showArrowThis = () => {
    console.log("Arrow Function:", this);
};
showArrowThis(); // {} (Inherits from global scope in this file)


// ==========================================
// 4. OBJECT METHOD CONTEXT
// ==========================================

const user = {
    name: "Izhar",

    // Normal Method: 'this' refers to the object calling the method (user)
    printName() {
        console.log("Method (Normal):", this.name);
    },

    // Arrow Method: 'this' refers to parent scope (Global/Window), NOT the object
    printNameArrow: () => {
        console.log("Method (Arrow):", this.name); // undefined
    },

    // Nested Object
    address: {
        city: "Mumbai",
        printCity() {
            console.log("Nested Method:", this.city); // "Mumbai"
        }
    }
};

user.printName();       // "Izhar"
user.printNameArrow();  // undefined
user.address.printCity(); // "Mumbai"


// ==========================================
// 5. EXPLICIT BINDING (call, apply, bind)
// ==========================================
// Used to manually set 'this' for a function.

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

// A. call(): Pass arguments individually
greet.call(person1, "Hello", "!"); // "Hello, Alice!"

// B. apply(): Pass arguments as an array
greet.apply(person2, ["Hi", "."]); // "Hi, Bob."

// C. bind(): Returns a NEW function with 'this' permanently bound
const greetAlice = greet.bind(person1);
greetAlice("Hey", "!!"); // "Hey, Alice!!"


// ==========================================
// 6. CONSTRUCTOR FUNCTIONS (new keyword)
// ==========================================
// When using 'new', 'this' refers to the newly created instance.

function Car(model) {
    this.model = model;
}

const myCar = new Car("Tesla");
console.log("Constructor:", myCar.model); // "Tesla"


// ==========================================
// 7. COMMON INTERVIEW PITFALLS
// ==========================================

// Q1: Losing 'this' in callbacks
const obj = {
    name: "Object",
    log() {
        console.log(this.name);
    }
};
setTimeout(obj.log, 100); // undefined (called as plain function)

// Fix 1: Wrapper function
setTimeout(() => obj.log(), 100); // "Object"

// Fix 2: bind()
setTimeout(obj.log.bind(obj), 100); // "Object"


// Q2: Method Chaining
const calculator = {
    total: 0,
    add(n) {
        this.total += n;
        return this; // Return 'this' to allow chaining
    },
    subtract(n) {
        this.total -= n;
        return this;
    }
};

calculator.add(10).subtract(5);
console.log("Chaining Result:", calculator.total); // 5