# 🟢 Node.js & Backend Interview Cheat Sheet

## 1. Core Concepts
- **Node.js:** A runtime environment for executing JavaScript server-side.
- **V8 Engine:** The Google Chrome engine that compiles JS to machine code.
- **Single-Threaded:** Uses a single main thread for execution but delegates I/O tasks to the system kernel (libuv).
- **Non-Blocking I/O:** Doesn't wait for file/network operations to finish; uses callbacks/promises to handle results later.

### What is V8?
**V8** is the JavaScript engine that **parses and executes** JavaScript code. It powers:
- **Google Chrome** (browser)
- **Node.js** (server-side runtime)
- **Electron** (desktop apps like VS Code, Slack)

**Key Insight:** V8 is **independent** of the browser. This separation enabled Node.js to exist—V8 handles JavaScript execution, while the browser/Node.js provides the APIs (DOM vs File System).

### Other JavaScript Engines
Different browsers use different engines, but all follow the **ECMAScript (ES)** standard:
- **Chrome/Node.js/Edge**: V8
- **Firefox**: SpiderMonkey
- **Safari**: JavaScriptCore (Nitro)

### How V8 Works: JIT Compilation
**Common Misconception:** JavaScript is purely interpreted.  
**Reality:** Modern engines like V8 use **Just-In-Time (JIT) compilation**.

**Process:**
1. **Parse**: Code → Abstract Syntax Tree (AST)
2. **Compile**: AST → Machine code (during execution, not before)
3. **Optimize**: Hot code paths are optimized further

```
JavaScript Code → V8 Parser → Bytecode → JIT Compiler → Optimized Machine Code
```

**Why JIT?**
- **Interpreted code** (old approach): Slow, line-by-line execution
- **JIT compilation**: Small startup delay, then **much faster** execution
- Modern web apps run for hours—JIT makes this viable

**Trade-off:**
- Slightly slower startup (compilation time)
- Much faster execution (runs native machine code)

**Example Impact:**
- Google Maps (2004) changed everything—suddenly JS apps had thousands of lines
- Without JIT, complex apps like Gmail, VS Code, or Figma wouldn't be possible



## 2. Node.js vs Browser - Key Differences

Both use JavaScript, but the **ecosystem** is completely different.

| Feature | Browser | Node.js |
| :--- | :--- | :--- |
| **Environment APIs** | DOM, `window`, `document`, Web APIs (fetch, localStorage, cookies) | File System, OS, Process, Network modules |
| **Version Control** | You **don't control** what browser users have | You **control** the exact Node.js version |
| **JavaScript Support** | Must support older browsers (need Babel/transpiling) | Can use latest ES2015+ features directly |
| **Module System** | ES Modules only (`import`/`export`) | Both CommonJS (`require`) and ES Modules (`import`) |
| **Use Case** | Frontend (UI, user interactions) | Backend (servers, APIs, CLI tools) |

### Practical Implications

<details>
<summary>Browser-specific APIs Example</summary>

```javascript
// Browser-specific APIs
document.getElementById('btn').addEventListener('click', () => {});
localStorage.setItem('user', 'Alice');
fetch('/api/data').then(res => res.json());
```
</details>

<details>
<summary>Node.js-specific APIs Example</summary>

```javascript
// Node.js-specific APIs
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {});

const os = require('os');
console.log(os.platform()); // 'linux', 'win32', etc.
```
</details>

**Advantage:** Full-stack developers can use **one language** (JavaScript) for both frontend and backend, reducing context switching and leveraging the same skills across the entire stack.

---

### Streams
Process data piece by piece instead of loading everything into memory.

**Types:**
- **Readable**: Read data (file system, HTTP requests)
- **Writable**: Write data (file system, HTTP responses)
- **Duplex**: Both read and write (TCP sockets)
- **Transform**: Modify data while reading/writing (compression, encryption)

<details>
<summary>Streams Example</summary>

```javascript
const fs = require('fs');

// Bad: Loads entire file into memory
const data = fs.readFileSync('huge-file.txt', 'utf8');

// Good: Streams data in chunks
const readStream = fs.createReadStream('huge-file.txt');
readStream.pipe(process.stdout);

// Example: File processing with transform
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

fs.createReadStream('input.txt')
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream('output.txt'));
```
</details>

**Use streams for:**
- Large files (videos, logs)
- Real-time data processing
- Memory efficiency (process data without loading all at once)

---

### File System Operations (fs Module)

The `fs` module provides APIs for interacting with the file system. Understanding sync vs async operations is crucial for interviews.

#### Synchronous vs Asynchronous vs Promises

| Method | Blocking? | Use Case | Return Value |
|--------|----------|----------|--------------|
| **Sync** (`readFileSync`) | ✅ Yes | Scripts, initialization | Direct value |
| **Async** (callback) | ❌ No | Production apps | Via callback |
| **Promises** (`fs/promises`) | ❌ No | Modern apps with async/await | Promise |

---

#### 1. Reading Files

<details>
<summary>Synchronous (Blocking) Example</summary>

```javascript
const fs = require('fs');

// Blocks execution until file is read
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

console.log('This runs immediately (non-blocking)');
```
</details>

<details>
<summary>Promises (Modern Approach) Example</summary>

```javascript
const fs = require('fs').promises;
// OR: const fs = require('fs/promises');

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

---

#### 2. Writing Files

<details>
<summary>Write (Overwrites existing file) Example</summary>

```javascript
const fs = require('fs').promises;

async function writeFile() {
  try {
    await fs.writeFile('output.txt', 'Hello World!', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}
```
</details>

<details>
<summary>Append (Adds to existing file) Example</summary>

```javascript
const fs = require('fs').promises;

async function appendFile() {
  try {
    await fs.appendFile('log.txt', 'New log entry\n', 'utf8');
    console.log('Data appended');
  } catch (err) {
    console.error('Error appending file:', err);
  }
}
```
</details>

<details>
<summary>Synchronous Write Example</summary>

```javascript
const fs = require('fs');

try {
  fs.writeFileSync('config.json', JSON.stringify({ key: 'value' }, null, 2));
} catch (err) {
  console.error('Error writing file:', err);
}
```
</details>

---

#### 3. File Operations

<details>
<summary>Check if File Exists Example</summary>

```javascript
const fs = require('fs').promises;

async function fileExists(path) {
  try {
    await fs.access(path); // Throws error if doesn't exist
    return true;
  } catch {
    return false;
  }
}

// Usage
if (await fileExists('data.txt')) {
  console.log('File exists');
}
```
</details>

<details>
<summary>Delete File Example</summary>

```javascript
const fs = require('fs').promises;

async function deleteFile(path) {
  try {
    await fs.unlink(path);
    console.log('File deleted');
  } catch (err) {
    console.error('Error deleting file:', err);
  }
}
```
</details>

<details>
<summary>Rename/Move File Example</summary>

```javascript
const fs = require('fs').promises;

async function renameFile() {
  try {
    await fs.rename('old-name.txt', 'new-name.txt');
    console.log('File renamed');
  } catch (err) {
    console.error('Error renaming file:', err);
  }
}
```
</details>

<details>
<summary>Copy File Example</summary>

```javascript
const fs = require('fs').promises;

async function copyFile() {
  try {
    await fs.copyFile('source.txt', 'destination.txt');
    console.log('File copied');
  } catch (err) {
    console.error('Error copying file:', err);
  }
}
```
</details>

<details>
<summary>Get File Stats Example</summary>

```javascript
const fs = require('fs').promises;

async function getFileInfo(path) {
  try {
    const stats = await fs.stat(path);
    
    console.log({
      size: stats.size,           // Size in bytes
      isFile: stats.isFile(),
      isDirectory: stats.isDirectory(),
      created: stats.birthtime,   // Creation time
      modified: stats.mtime       // Last modified time
    });
  } catch (err) {
    console.error('Error getting file stats:', err);
  }
}
```
</details>

---

#### 4. Directory Operations

<details>
<summary>Read Directory Example</summary>

```javascript
const fs = require('fs').promises;

async function listFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    console.log('Files:', files);
    
    // With file types
    const filesWithTypes = await fs.readdir(dirPath, { withFileTypes: true });
    filesWithTypes.forEach(file => {
      console.log(`${file.name} - ${file.isDirectory() ? 'DIR' : 'FILE'}`);
    });
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}
```
</details>

<details>
<summary>Create Directory Example</summary>

```javascript
const fs = require('fs').promises;

async function createDir(path) {
  try {
    // { recursive: true } creates parent directories if needed
    await fs.mkdir(path, { recursive: true });
    console.log('Directory created');
  } catch (err) {
    console.error('Error creating directory:', err);
  }
}

// Example: Creates all parent directories
await createDir('logs/2024/december');
```
</details>

<details>
<summary>Remove Directory Example</summary>

```javascript
const fs = require('fs').promises;

async function removeDir(path) {
  try {
    // { recursive: true } removes directory and all contents
    await fs.rm(path, { recursive: true, force: true });
    console.log('Directory removed');
  } catch (err) {
    console.error('Error removing directory:', err);
  }
}
```
</details>

---

#### 5. Working with JSON Files

<details>
<summary>Read JSON Example</summary>

```javascript
const fs = require('fs').promises;

async function readJSON(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading JSON:', err);
    throw err;
  }
}

// Usage
const config = await readJSON('config.json');
```
</details>

<details>
<summary>Write JSON Example</summary>

```javascript
const fs = require('fs').promises;

async function writeJSON(path, data) {
  try {
    const jsonString = JSON.stringify(data, null, 2); // Pretty print
    await fs.writeFile(path, jsonString, 'utf8');
  } catch (err) {
    console.error('Error writing JSON:', err);
    throw err;
  }
}

// Usage
await writeJSON('users.json', { name: 'Alice', age: 25 });
```
</details>

---

#### 6. File Streaming (For Large Files)

<details>
<summary>Read Stream Example</summary>

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt', {
  encoding: 'utf8',
  highWaterMark: 16 * 1024 // 16KB chunks
});

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length, 'bytes');
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', (err) => {
  console.error('Error reading stream:', err);
});
```
</details>

<details>
<summary>Write Stream Example</summary>

```javascript
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Line 1\n');
writeStream.write('Line 2\n');
writeStream.write('Line 3\n');

writeStream.end(); // Signal that writing is complete

writeStream.on('finish', () => {
  console.log('Finished writing file');
});
```
</details>

<details>
<summary>Copy Large File (Stream) Example</summary>

```javascript
const fs = require('fs');

const readStream = fs.createReadStream('large-input.txt');
const writeStream = fs.createWriteStream('large-output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File copied successfully');
});
```
</details>

---

### Clustering
Utilize all CPU cores by creating worker processes.

<details>
<summary>Clustering Example</summary>

```javascript
const cluster = require('cluster');
const os = require('os');
const express = require('express');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart worker
  });
} else {
  const app = express();
  app.get('/', (req, res) => {
    res.send(`Handled by worker ${process.pid}`);
  });
  app.listen(3000);
  console.log(`Worker ${process.pid} started`);
}
```
</details>

**Benefits:**
- Maximizes CPU utilization
- Fault tolerance (worker crashes don't affect others)
- Zero-downtime restarts

---

### WebSockets
Full-duplex communication for real-time applications.

<details>
<summary>WebSockets Example</summary>

```javascript
// Server (using ws library)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    console.log('Received:', message);
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  
  ws.on('close', () => console.log('Client disconnected'));
});

// Client (browser)
const socket = new WebSocket('ws://localhost:8080');
socket.onopen = () => socket.send('Hello!');
socket.onmessage = (event) => console.log('Received:', event.data);
```
</details>

**Use cases:**
- Chat applications
- Live notifications
- Real-time dashboards
- Multiplayer games
- Live sports scores

---

### File Uploads (Multer)
Secure file upload handling.

<details>
<summary>File Uploads (Multer) Example</summary>

```javascript
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueName = crypto.randomBytes(16).toString('hex');
    cb(null, uniqueName + path.extname(file.originalname));
  }
});

// File filter for security
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only images and PDFs allowed'));
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: { 
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 5 // Max 5 files
  }
});

// Routes
app.post('/upload/single', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

app.post('/upload/multiple', upload.array('files', 5), (req, res) => {
  res.json({ files: req.files });
});

// Error handling
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
  }
  res.status(500).json({ error: error.message });
});
```
</details>

**Security Best Practices:**
- Validate file type (check MIME type AND extension)
- Limit file size
- Use random filenames
- Store outside public directory
- Scan for viruses (use antivirus API)
- Use cloud storage for production (AWS S3, Cloudinary)

---

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