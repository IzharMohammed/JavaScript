/**
 * ==========================================
 * 🟢 NODE.JS & BACKEND INTERVIEW CHEAT SHEET
 * ==========================================
 * 
 * 1. CORE CONCEPTS
 * ----------------
 * - Node.js: A runtime environment for executing JavaScript server-side.
 * - Single-Threaded: Uses a single main thread for execution.
 * - Non-Blocking I/O: Uses the Event Loop to handle async operations efficiently.
 * - V8 Engine: The Google Chrome engine that Node.js is built on.
 */

// ==========================================
// 2. THE EVENT LOOP (Crucial!)
// ==========================================
/*
Phases of execution:
1. Call Stack: Sync code executes here.
2. Microtask Queue: Promises (resolve/reject), process.nextTick. (HIGHEST PRIORITY)
3. Macrotask Queue (Callback Queue): setTimeout, setInterval, I/O callbacks.

Order: Call Stack -> Microtasks -> Macrotasks
*/

console.log("1. Start");

setTimeout(() => {
    console.log("4. setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise (Microtask)");
});

console.log("2. End");

// Output: 1. Start -> 2. End -> 3. Promise -> 4. setTimeout


// ==========================================
// 3. EXPRESS.JS BASICS
// ==========================================

const express = require('express');
const app = express();

// A. MIDDLEWARE
// Functions that have access to req, res, and next().
// Used for: Logging, Auth, Parsing Body, Error Handling.

app.use(express.json()); // Built-in middleware to parse JSON bodies

// Custom Middleware
function logger(req, res, next) {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Pass control to the next handler
}

app.use(logger);

// B. ROUTING & REST API METHODS
// GET: Retrieve data
app.get('/api/users', (req, res) => {
    res.status(200).json({ message: "List of users" });
});

// POST: Create data
app.post('/api/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }
    res.status(201).json({ message: `User ${name} created` });
});

// C. ERROR HANDLING MIDDLEWARE (Must have 4 arguments)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// ==========================================
// 4. COMMON INTERVIEW QUESTIONS
// ==========================================

/*
Q1: process.nextTick() vs setImmediate()?
A: process.nextTick() fires immediately after the current operation completes (before any I/O).
   setImmediate() fires in the Check phase of the Event Loop (after I/O).

Q2: SQL vs NoSQL?
A: SQL (MySQL, Postgres): Relational, Tables, Fixed Schema, Good for complex queries/transactions.
   NoSQL (MongoDB): Non-relational, Documents, Flexible Schema, Good for scalability/rapid changes.

Q3: What is CORS?
A: Cross-Origin Resource Sharing. A security feature that restricts web pages 
   from making requests to a different domain than the one that served the web page.
   Fix: app.use(cors());

Q4: Authentication vs Authorization?
A: Authentication: Who are you? (Login, JWT)
   Authorization: What are you allowed to do? (Admin vs User roles)
*/
