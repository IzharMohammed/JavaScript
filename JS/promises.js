/**
 * ==========================================
 * 📘 JAVASCRIPT PROMISES - QUICK REVISION
 * ==========================================
 * 
 * 1. WHAT IS A PROMISE?
 * ---------------------
 * A Promise is an object representing the eventual completion (or failure) 
 * of an asynchronous operation and its resulting value.
 * 
 * Think of it like ordering food at a restaurant:
 * - You place an order (Promise created).
 * - You get a buzzer (The Promise object).
 * - While waiting, you can do other things (Asynchronous).
 * - Eventually, the buzzer rings (Resolved) or they tell you they're out of ingredients (Rejected).
 */

/**
 * 2. PROMISE STATES
 * -----------------
 * A Promise can be in one of three states:
 * 1. PENDING: Initial state, neither fulfilled nor rejected.
 * 2. FULFILLED (Resolved): Operation completed successfully.
 * 3. REJECTED: Operation failed.
 */

// ==========================================
// 3. CREATING A PROMISE
// ==========================================

const myPromise = new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., fetching data)
    const success = true;

    setTimeout(() => {
        if (success) {
            // resolve(value) changes state from Pending -> Fulfilled
            resolve("Operation Successful! ✅");
        } else {
            // reject(error) changes state from Pending -> Rejected
            reject("Operation Failed! ❌");
        }
    }, 1000);
});

// ==========================================
// 4. CONSUMING A PROMISE
// ==========================================
// We use .then() for success, .catch() for errors, and .finally() for cleanup.

console.log("1. Waiting for promise...");

myPromise
    .then((data) => {
        console.log("2. Success:", data); // Runs if resolved
    })
    .catch((error) => {
        console.error("2. Error:", error); // Runs if rejected
    })
    .finally(() => {
        console.log("3. Cleanup: Operation finished (success or fail)."); // Always runs
    });


// ==========================================
// 5. PROMISE CHAINING (Avoiding Callback Hell)
// ==========================================
// Instead of nesting callbacks, we return a new Promise in .then()

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(500)
    .then(() => {
        console.log("Step 1 completed");
        return wait(500); // Return a new promise
    })
    .then(() => {
        console.log("Step 2 completed");
        return wait(500);
    })
    .then(() => {
        console.log("Step 3 completed");
    });


// ==========================================
// 6. PROMISE COMBINATORS (Handling multiple promises)
// ==========================================

const p1 = new Promise(resolve => setTimeout(() => resolve("A"), 100));
const p2 = new Promise(resolve => setTimeout(() => resolve("B"), 200));
const p3 = new Promise((_, reject) => setTimeout(() => reject("Error!"), 300));

// A. Promise.all()
// Waits for ALL to resolve. Fails if ANY fails.
Promise.all([p1, p2])
    .then(results => console.log("Promise.all:", results)) // ["A", "B"]
    .catch(err => console.log("Promise.all failed:", err));

// B. Promise.race()
// Returns result of the FIRST one to settle (resolve or reject).
Promise.race([p1, p2])
    .then(result => console.log("Promise.race:", result)); // "A" (because 100ms < 200ms)

// C. Promise.allSettled()
// Waits for ALL to finish, regardless of success or failure.
Promise.allSettled([p1, p2, p3])
    .then(results => console.log("Promise.allSettled:", results));
// Returns array of objects: { status: 'fulfilled', value: ... } or { status: 'rejected', reason: ... }

// D. Promise.any()
// Waits for the FIRST successful resolution. Fails only if ALL fail.
Promise.any([p3, p2, p1])
    .then(result => console.log("Promise.any:", result)); // "B" (skips p3 because it rejected)


// ==========================================
// 7. ASYNC / AWAIT (Modern Syntax)
// ==========================================
// Syntactic sugar over Promises. Makes async code look synchronous.

async function fetchData() {
    try {
        console.log("Fetching data...");
        // await pauses execution until the Promise resolves
        const result = await myPromise;
        console.log("Async/Await Result:", result);
    } catch (error) {
        // Handle errors with try/catch blocks
        console.error("Async/Await Error:", error);
    }
}

fetchData();