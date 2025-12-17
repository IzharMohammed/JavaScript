//  Promises in js
// Synchronous vs asynchronous code

// Async code
console.log("start");

setTimeout(() => {
    console.log("i am inside setTimeout");
}, 0);

console.log("end");
//  js is single threaded and js first execute all sync code and then async code


// callbacks - They are used to handle async code
console.log("start");

function importantFunc(userName, callback) {
    setTimeout(() => {
        callback(`Hello ${userName}`);
    }, 1000)
}

function goingToMarket(userName, callback) {
    setTimeout(() => {
        callback(`Market visited by ${userName}`);
    }, 1000)
}

function shopping(userName, callback) {
    setTimeout(() => {
        callback(`Shopping done by ${userName}`);
    }, 1000)
}

// // callback hell - nested callbacks
// importantFunc("izhar", (message) => {
//     console.log(message);
//     goingToMarket("izhar", (message) => {
//         console.log(message);
//         shopping("izhar", (message) => {
//             console.log(message);
//         });
//     });
// });

// console.log("stop");

// promises
console.log("start");

function importantFunc(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${userName}`);
        }, 1000)
    })
}

function goingToMarket(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Market visited by ${userName}`);
        }, 1000)
    })
}

function shopping(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Shopping done by ${userName}`);
        }, 1000)
    })
}

// Promise Chaining
importantFunc("izhar").then((message) => {
    console.log(message);
    return goingToMarket("izhar");
}).then((message) => {
    console.log(message);
    return shopping("izhar");
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

console.log("stop");
// Promise combinators
// Promise.all

Promise.all([
    importantFunc("izhar"),
    goingToMarket("izhar"),
    shopping("izhar")
]).then((messages) => {
    console.log("All promises resolved", messages);
}).catch((error) => {
    console.log("All promises rejected", error);
})

// Promise.race
Promise.race([
    importantFunc("izhar"),
    goingToMarket("izhar"),
    shopping("izhar")
]).then((messages) => {
    console.log("All promises resolved", messages);
}).catch((error) => {
    console.log("All promises rejected", error);
})

// promise.allSettled
Promise.allSettled([
    importantFunc("izhar"),
    goingToMarket("izhar"),
    shopping("izhar")
]).then((messages) => {
    console.log("All promises resolved", messages);
}).catch((error) => {
    console.log("All promises rejected", error);
})

// Promise.any
Promise.any([
    importantFunc("izhar"),
    goingToMarket("izhar"),
    shopping("izhar")
]).then((messages) => {
    console.log("All promises resolved", messages);
}).catch((error) => {
    console.log("All promises rejected", error);
})

console.log("stop");


const sub = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = false;
        if (result) {
            resolve("subscribed");
        } else {
            reject("not subscribed");
        }
    }, 1000)
})

console.log(sub);

sub.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

console.log("start");

const promise1 = Promise.resolve("Promise 1");
promise1.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

console.log("stop");

// Async/await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();