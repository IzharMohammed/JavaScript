# 🟢 Node.js & Backend Interview Cheat Sheet

## 1. Core Concepts
- **Node.js:** A runtime environment for executing JavaScript server-side.
- **V8 Engine:** The Google Chrome engine that compiles JS to machine code.
- **Single-Threaded:** Uses a single main thread for execution but delegates I/O tasks to the system kernel (libuv).
- **Non-Blocking I/O:** Doesn't wait for file/network operations to finish; uses callbacks/promises to handle results later.

---

## 2. The Event Loop (Crucial!)
The Event Loop is what allows Node.js to perform non-blocking I/O operations despite being single-threaded.

### Phases of the Event Loop
1. **Timers:** Executes `setTimeout()` and `setInterval()` callbacks.
2. **Pending Callbacks:** Executes I/O callbacks deferred to the next loop iteration.
3. **Idle, Prepare:** Internal use.
4. **Poll:** Retrieve new I/O events; execute I/O related callbacks.
5. **Check:** Executes `setImmediate()` callbacks.
6. **Close Callbacks:** e.g., `socket.on('close', ...)`.

### Diagram: Event Loop Execution Order
```mermaid
graph TD
    Start([Start]) --> CallStack{Call Stack Empty?}
    CallStack -- No --> Execute[Execute Sync Code]
    Execute --> CallStack
    CallStack -- Yes --> Microtasks[Run Microtasks: Promises, nextTick]
    Microtasks --> Macrotasks[Run Macrotasks: Timers, I/O, setImmediate]
    Macrotasks --> CallStack
```

### Code Example: Execution Order
```javascript
console.log("1. Start");

setTimeout(() => {
    console.log("4. setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise (Microtask)");
});

process.nextTick(() => {
    console.log("2. nextTick (High Priority Microtask)");
});

console.log("5. End");

// Output: 
// 1. Start
// 5. End
// 2. nextTick
// 3. Promise
// 4. setTimeout
```
> **Note:** `process.nextTick` has higher priority than Promises. Both run before `setTimeout`.

---

## 3. Express.js Basics
**Middleware:** Functions that have access to the request object (`req`), the response object (`res`), and the next middleware function (`next`).

### Types of Middleware
1. **Application-level:** `app.use((req, res, next) => ...)`
2. **Router-level:** `router.use(...)`
3. **Error-handling:** `app.use((err, req, res, next) => ...)` **(Must have 4 args)**
4. **Built-in:** `express.json()`, `express.static()`
5. **Third-party:** `morgan`, `cors`

### Example: Custom Logger Middleware
```javascript
const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Pass control to the next handler
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World');
});
```

---

## 4. Common Interview Questions

### Q1: `process.nextTick()` vs `setImmediate()`?
- **`process.nextTick()`**: Fires **immediately** after the current operation completes, *before* the Event Loop continues. It processes in the Microtask queue.
- **`setImmediate()`**: Fires in the **Check phase** of the Event Loop, *after* I/O events.

### Q2: CommonJS vs ES Modules?
- **CommonJS:** Uses `require()` and `module.exports`. Synchronous loading. (Default in Node.js < 14).
- **ES Modules:** Uses `import` and `export`. Asynchronous loading. (Standard in modern JS/Browsers).

### Q3: How to handle errors in Async/Await?
Always use `try...catch` blocks.
```javascript
app.get('/users', async (req, res, next) => {
    try {
        const users = await db.getUsers();
        res.json(users);
    } catch (error) {
        next(error); // Pass to error handling middleware
    }
});
```

### 🔗 Resources
- [Node.js Event Loop (Official Docs)](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [Don't Block the Event Loop](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
