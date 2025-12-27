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

### Path Module Utilities
```javascript
const path = require('path');

// Join segments
const fullPath = path.join('/docs', 'file.txt'); // /docs/file.txt

// Parse a path
const parsed = path.parse('/docs/file.txt');
/*
{ root: '/', dir: '/docs', base: 'file.txt', ext: '.txt', name: 'file' }
*/

// Resolve to absolute path
const absolute = path.resolve('src', '../index.js');

// Get extension
const ext = path.extname('archive.tar.gz'); // .gz
```

### Special Node.js Constants
- `__filename` – absolute path of the current file.
- `__dirname` – absolute directory of the current file.

---

## 7. Quick Reference
- **Run a script**: `node script.js`
- **Install a package**: `npm install <package>`
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