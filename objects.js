const user = {
  name: "izhar",
  age: 21,
};

console.log(user);
delete user.age;
console.log(user["name"]);

const property = "firstName";
const name = "Mohammed Izhar";
const user1 = {
  [property]: name,
};
console.log(user1);

const user2 = {
  name: "izhar",
  age: 21,
  isFinite: true,
};

for (key in user2) {
  console.log(`${key} : ${[key]}`);
}

const obj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(obj); // { a: 'three', b: 'two' }

// Q: create a  fn that multiplies all numeric property values of nums by 2
let nums = {
  a: 100,
  b: 200,
  title: "Izhar",
};

multiplyNum(nums);
function multiplyNum(nums) {
  for (let key in nums) {
    if (typeof nums[key] === "number") {
      nums[key] = nums[key] * 2;
    }
  }
}

console.log(nums);

// JSON.stringify and  JSON.parse
const strObj = JSON.stringify(user2);
console.log(strObj);
console.log(JSON.parse(strObj));

// spread operator
console.log([..."izhar"]);

const admin = { admin: true, ...user2 };
console.log(admin);

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => this.radius * 2,
};
console.log(shape.diameter()); //20 bcoz in normal function this refers to block scope radius
console.log(shape.perimeter()); //NaN bcoz in arrow function this refers to global scope where there is no radius

//  Destructuring
let user3 = { name: "izhar", age: 21 };
let { name: userName, age: userAge } = user3;
console.log(userName, userAge);

let user4 = {
  name: "izhar",
  age: 21,
  fullName: {
    firstName: "Mohammed",
    lastName: "Izhar",
  },
};
let { age, fullName: { firstName, lastName } } = user4;
console.log(age, firstName, lastName);

//  we provide the refernce in objects not copy the object
let c = { greeting: "Hello" };
let d = c;
d.greeting = "Hi izhar";
console.log(c.greeting);

console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false

// whats the shallow copy and Deep copy
let user5 = { name: "izhar", age: 21 };
const objClone = Object.assign({}, user5);

objClone.name = "Mohammed Izhar";
console.log(user5.name); // izhar
console.log(objClone.name); // Mohammed Izhar

const objClone1 = JSON.parse(JSON.stringify(user5));
objClone1.name = "Mohammed Izhar";
console.log(user5.name); // izhar
console.log(objClone1.name); // Mohammed Izhar

const objClone2 = { ...user5 };
objClone2.name = "Mohammed Izhar";
console.log(user5.name); // izhar
console.log(objClone2.name); // Mohammed Izhar