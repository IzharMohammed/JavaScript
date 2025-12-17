function izhar() {
    console.log("Izhar");
}

izhar();

// 2nd type
const izhar2 = function () {
    console.log("Izhar");
}

izhar2();

//  setTimeout 
// setTimeout(function () {
//     console.log("inside setTimeout Izhar");
// }, 5000); // 5s

// // syntax
// setTimeout(() => {
//     console.log("inside setTimeout Izhar");
// }, 10000);

// 1st
function square(num) {
    return num * num;
}

// 2nd
function displaySquare(mujahid) {
    console.log("Square is:", mujahid(10));
}

displaySquare(square);

(function izhar(num) {
    console.log("Izhar", num);
})(10);


function functionName() {
    console.log("functionName");
}

functionName();


function square(num) { // parameters
    const squareResult = num * num;
    return squareResult;
}

const result = square(10); // arguments
console.log(result);

// Rest
function multiply(...arr) {
    console.log("multiply", arr);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// spread
multiply(...arr);

