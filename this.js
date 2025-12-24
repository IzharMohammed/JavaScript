// this keyword in js has implicit binding

this.a = 5;
// In function this keyword refers to global object<
function test() {
    console.log(this.a);
}
test();
// In arrow function this keyword refers to parent object
const testArrow = () => {
    console.log(this.a);
}
testArrow();

// In object this keyword refers to object

let user = {
    name: "Izhar",
    age: 20,
    childObj: {
        newName: "Izhar new",
        newAge: 21,
        printDetails() {
            console.log(this.newName, "and", this.name);
        }
    },
    // Arrow function does not have its own this, it takes this from parent scope
    getDetails: () => {
        console.log(this.name, this.age);
        console.log(this);
    },
    // Normal function has its own this
    printDetails() {
        console.log(this.name, this.age);
    }
}
user.childObj.printDetails();
user.getDetails();
user.printDetails();
console.log("=".repeat(50));


// Inside of a class this keyword refers to all variables inside constructor
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printDetails() {
        console.log(this.name, this.age);
    }
}

const user1 = new User("Izhar", 21);
user1.printDetails();

// o/p based questions
const user2 = {
    firstName: "Izhar",
    getName() {
        const firstName = "Izhar new";
        return this.firstName;
    }
}
console.log(user2.getName());

console.log("=".repeat(50));

// what is the result of accessing its ref
function makeUser() {
    return {
        name: "Izhar",
        ref: this
    };
}

let user3 = makeUser();
console.log(user3.ref.name);

// # Fix
function makeUser1() {
    return {
        name: "Izhar",
        ref() {
            return this;
        }
    };
}

let user4 = makeUser1();
console.log(user4.ref().name);
console.log("=".repeat(50));

const user5 = {
    name: "Izhar",
    logMessage() {
        console.log(this.name);
    }
}
setTimeout(user5.logMessage, 1000);
// #fix
setTimeout(() => {
    user5.logMessage();
}, 1000);
console.log("=".repeat(50));


// let calculator = {
//     read() {
//         this.a = +prompt("Enter a");
//         this.b = +prompt("Enter b");
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log("=".repeat(50));

var length = 4;
function callback() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(fn) {
        fn();
    }
}
obj.method(callback); //4

console.log("=".repeat(50));

const calc = {
    total: 0,
    add(x) {
        this.total += x;
        return this;
    },
    multiply(x) {
        this.total *= x;
        return this;
    },
    subtract(x) {
        this.total -= x;
        return this;
    }
}

const result = calc.add(10).multiply(5).subtract(2).add(1);
console.log(result.total);