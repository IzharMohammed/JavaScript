# 🟢 Node.js Interview Cheat Sheet

## 1. Key Features of Node.js
- **Single‑threaded** – runs on one main thread (event loop).
- **Asynchronous** – I/O operations are non‑blocking.
- **Event‑driven** – work is triggered by events.
- **V8 JavaScript engine** – executes JS code.
- **Real‑time capabilities** – ideal for websockets, chat, etc.
- **NPM** – massive ecosystem of packages.
- **Cross‑platform** – runs on Windows, macOS, Linux.

## 2. When **NOT** to Use Node.js
- CPU‑intensive workloads (image/video processing, heavy encryption/decryption, scientific calculations).
- Tasks that require true parallelism or heavy multithreading.

## 3. When to Use Node.js
- Chat applications, live notifications, real‑time dashboards.
- Online multiplayer games, collaborative tools.
- Lightweight, scalable RESTful APIs.
- Microservice architectures.

## 4. Programming Models
| Model | Description |
|------|-------------|
| **Synchronous programming** | Code runs line‑by‑line; each task must finish before the next starts. |
| **Asynchronous programming** | Tasks are started and the event loop notifies when they finish (callbacks, promises, async/await). |
| **Multithreaded programming** | Multiple OS threads run in parallel (Node can use worker threads or the `cluster` module). |

## 5. Events in Node.js
- **Event** – a signal that something happened.
- **Event Emitter** – object that can emit named events (`emitter.emit('event')`).
- **Event Queue** – holds emitted events until the event loop processes them.
- **Event Handler / Listener** – function attached via `emitter.on('event', handler)`.
- **Event Loop** – picks events from the queue and executes their handlers in order.
- **Event‑driven architecture** – application flow is driven by events rather than a linear call stack.

## 6. Modules
- **What is a module?** A reusable file that exports functionality (`module.exports = …`).
- **Types of modules**:
  1. **Core (built‑in) modules** – e.g., `fs`, `path`, `http`, `os`, `events`.
  2. **Local modules** – files you create in your project.
  3. **Third‑party modules** – installed via NPM (e.g., `lodash`).
- **Difference between a function and a module** – a function is a single reusable piece of code; a module groups related functions/variables and can expose many exports.

### Top 5 Built‑in Modules
1. `fs` – file system operations.
2. `os` – operating system information.
3. `http` – HTTP server/client.
4. `events` – event emitter implementation.
5. `path` – file‑path utilities.

### Role of the `fs` Module (examples)

used for performing file operations
- fs.readFile() - reads the contents of file specified
- fs.writeFile() - writes data to specific file, creating the file if it doesnt exist
- fs.appendFile() - appends data to specific file,creating the file if it doesnt exist
- fs.unlink()     - deletes the specified file
- fs.mkdir()      - creates a new directory
- fs.rmdir()     - removes specific directory
- fs.readdir()   - reads the contents of directory

```javascript
const fs = require('fs').promises;

// Read a file (async)
async function readFile(path) {
  return await fs.readFile(path, 'utf8');
}

// Write (overwrite) a file
async function writeFile(path, data) {
  await fs.writeFile(path, data, 'utf8');
}

// Append to a file
async function appendFile(path, data) {
  await fs.appendFile(path, data, 'utf8');
}
```
<details>
<summary>Synchronous (Blocking) Example</summary>

```javascript
const fs = require('fs');

try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err);
}
```
</details>

<details>
<summary>Asynchronous (Callback) Example</summary>

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
```
</details>

<details>
<summary>Promise (fs/promises) Example</summary>

```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
readFile();
```
</details>


<details>
<summary>Path Module Utilities</summary>

```javascript
const fs = require("fs");
const path = require("path");

console.log(__dirname);
console.log(__filename);

const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);

const parsedData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);

console.log({ parsedData, resolvedPath, extName, baseName, dirName });

/**
 * o/p:-
 * /home/izhar/learnings/node/path
/home/izhar/learnings/node/path/index.js
folder/students/data.txt
{
  parsedData: {
    root: '',
    dir: 'folder/students',
    base: 'data.txt',
    ext: '.txt',
    name: 'data'
  },
  resolvedPath: '/home/izhar/learnings/node/folder/students/data.txt',
  extName: '.txt',
  baseName: 'data.txt',
  dirName: 'folder/students'
}
 * 
 */
```
</details>

### Special Node.js Constants
- `__filename` – absolute path of the current file.
- `__dirname` – absolute directory of the current file.

---

## 7. Quick Reference
- **Run a script**: `node script.js`
- **Install a package**: `npm install <package>`

### Dependency vs Dev Dependency

Dependencies (`dependencies`):
- Packages required at runtime.
- Installed when the app runs (`npm install` in production).
- Listed under "dependencies" in package.json.

Dev Dependencies (`devDependencies`):
- Packages needed only during development/build (e.g., testing frameworks, linters, bundlers).
- Not installed in production when using `npm install --production` or `NODE_ENV=production`.
- Listed under "devDependencies" in package.json.

---

- **Start a server** (Express example):
```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000, () => console.log('Listening on 3000'));
```
- **Create a worker (cluster)**:
```javascript
const cluster = require('cluster');
if (cluster.isMaster) {
  const cpus = require('os').cpus().length;
  for (let i = 0; i < cpus; i++) cluster.fork();
} else {
  // worker code here
}
```

### Readline Module (Interactive CLI)
The `readline` module provides an interface for reading data from a Readable stream (like `process.stdin`) one line at a time.

**Use Cases:**
- Interactive command-line applications
- User input prompts
- CLI tools (npm init, create-react-app prompts)
- REPL (Read-Eval-Print Loop) implementations

<details>
<summary>Basic Example</summary>

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,   // Read from terminal input
  output: process.stdout  // Write to terminal output
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close(); // Always close when done
});
```
</details>

<details>
<summary>Interactive Loop Example</summary>

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askName() {
  rl.question("What is your name? (type 'bye' to exit): ", (name) => {
    // Check if user wants to exit
    if (name.toLowerCase() === 'bye') {
      console.log("Goodbye! 👋");
      rl.close(); // Close the readline interface
      return;
    }
    
    console.log(`Hello ${name}!\n`);
    askName(); // Recursive call for continuous input
  });
}

// Start the conversation
askName();

// Handle close event
rl.on('close', () => {
  console.log('Interface closed');
  process.exit(0);
});
```
</details>

<details>
<summary>Async/Await Pattern (Modern Approach)</summary>

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify the question method
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  const name = await askQuestion('What is your name? ');
  const age = await askQuestion('What is your age? ');
  
  console.log(`Hello ${name}, you are ${age} years old!`);
  rl.close();
}

main();
```
</details>

**Key Points:**
- Always call `rl.close()` when finished to prevent process hanging
- Use `process.stdin` for terminal input, `process.stdout` for output
- For complex CLI apps, consider libraries like `inquirer` or `prompts`

---

### WebAssembly (WASM)
WebAssembly is a **binary instruction format** that runs at near-native speed in browsers and Node.js.

**What is WebAssembly?**
- Low-level assembly-like language
- Compiled from languages like C, C++, Rust, Go
- Runs in a sandboxed environment alongside JavaScript
- **Not a replacement** for JavaScript, but a complement

**Why Use WebAssembly?**
- **Performance**: CPU-intensive tasks run **much faster** than JavaScript
- **Language Flexibility**: Use C/C++/Rust libraries in JavaScript
- **Portability**: Same binary runs in browser and Node.js

**Browser vs Node.js:**
| Feature | Browser | Node.js |
|---------|---------|---------|
| **Use Case** | Games, video editing, image processing | Crypto, data processing, ML inference |
| **Loading** | `fetch()` + `WebAssembly.instantiate()` | `fs.readFileSync()` + compile |

### Node.js with WebAssembly

<details>
<summary>Using WASM in Node.js Example</summary>

```javascript
const fs = require('fs');

// Load WASM binary
const wasmBuffer = fs.readFileSync('./module.wasm');

// Compile and instantiate
WebAssembly.instantiate(wasmBuffer).then(result => {
  const { add, multiply } = result.instance.exports;
  
  console.log(add(5, 3));      // 8
  console.log(multiply(4, 7)); // 28
});

// Async/Await version
async function loadWasm() {
  const wasmBuffer = fs.readFileSync('./module.wasm');
  const { instance } = await WebAssembly.instantiate(wasmBuffer);
  
  return instance.exports;
}

const wasm = await loadWasm();
console.log(wasm.fibonacci(10)); // Fast execution
```
</details>

<details>
<summary>Creating WASM (Rust Example)</summary>

```rust
// lib.rs
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Compile to WASM
// cargo build --target wasm32-unknown-unknown --release
```
</details>

**Real-World Use Cases:**
1. **Cryptography**: Fast encryption/hashing (bcrypt, argon2)
2. **Image Processing**: Resize, compress, filters (Sharp library uses WASM)
3. **Data Processing**: Large dataset transformations
4. **Machine Learning**: TensorFlow.js uses WASM backend
5. **Game Servers**: Physics calculations

**Popular WASM Tools for Node.js:**
- **esbuild**: Super-fast JavaScript bundler (written in Go, compiled to WASM)
- **SQLite WASM**: Run SQLite in Node.js
- **ImageMagick WASM**: Image manipulation
- **FFmpeg WASM**: Video processing

<details>
<summary>Performance Comparison</summary>

```javascript
// JavaScript (slower for heavy computation)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// WASM version is 10-100x faster for large n
```
</details>

**Key Takeaway:**
- Use **JavaScript** for business logic, I/O, async operations
- Use **WebAssembly** for CPU-intensive calculations
- Together, they create high-performance Node.js applications