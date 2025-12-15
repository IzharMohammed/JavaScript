const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome user");
} else {
  console.log("Please login");
}

//  o/p:- welcome user

const date = new Date();

const day = date.getDay();

if (day === 1) {
  console.log("The Day is Monday");
} else if (day === 5) {
  console.log("The Day is Friday");
} else {
  console.log("The Day isn't Wednesday or Friday");
}

//  Difference between switch and if-else-if
const role = "izhar";

if (role === "admin") {
  console.log("Full access");
} else if (role === "user") {
  console.log("Limited access");
} else {
  console.log("No access");
}

console.log("=============================");

//  syntax of switch
/**
 * switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}
 * 
 */

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}
