# Database Concepts Revision Guide

This guide covers essential database concepts, SQL, NoSQL, and common interview questions for quick revision.

## 1. Basic Concepts

### What is Data?
Data is a collection of distinct small units of information. It can be used in a variety of forms like text, numbers, media, bytes, etc.

### What is a Database?
A database is an organized collection of data, so that it can be easily accessed and managed.

### What is DBMS (Database Management System)?
DBMS is software that interacts with end-users, applications, and the database itself to capture and analyze the data.
*   **Examples**: MySQL, PostgreSQL, Oracle, SQL Server, MongoDB.

### Types of Databases
1.  **Relational Databases (RDBMS)**:
    *   Stores data in tables with rows and columns.
    *   Schema-based (structured).
    *   Uses SQL (Structured Query Language).
    *   **Examples**: MySQL, PostgreSQL, Oracle.
2.  **Non-Relational Databases (NoSQL)**:
    *   Stores data in various formats (documents, key-value, graphs).
    *   Schema-less (flexible).
    *   Good for unstructured data and scalability.
    *   **Examples**: MongoDB (Document), Redis (Key-Value), Cassandra (Wide-column).

---

## 2. SQL Concepts

### SQL Commands
*   **DDL (Data Definition Language)**: Defines the structure.
    *   `CREATE`, `ALTER`, `DROP`, `TRUNCATE`.
*   **DML (Data Manipulation Language)**: Manipulates data.
    *   `INSERT`, `UPDATE`, `DELETE`, `CALL`, `EXPLAIN CALL`.
*   **DQL (Data Query Language)**: Queries data.
    *   `SELECT`.
*   **DCL (Data Control Language)**: Controls access.
    *   `GRANT`, `REVOKE`.
*   **TCL (Transaction Control Language)**: Manages transactions.
    *   `COMMIT`, `ROLLBACK`, `SAVEPOINT`.

### Keys
Keys are used to uniquely identify a row in a table or establish relationships.
*   **Primary Key**: Uniquely identifies a record. Cannot be `NULL`. Only one per table.
*   **Foreign Key**: Links two tables. Points to the Primary Key of another table.
*   **Candidate Key**: A set of attributes that can uniquely identify a record. (Primary Key is selected from these).
*   **Super Key**: A set of attributes that can uniquely identify a record (Candidate Key + other attributes).
*   **Composite Key**: A Primary Key made of multiple columns.

### Joins
Used to combine rows from two or more tables based on a related column.
*   **INNER JOIN**: Returns records that have matching values in both tables.
*   **LEFT (OUTER) JOIN**: Returns all records from the left table, and the matched records from the right table.
*   **RIGHT (OUTER) JOIN**: Returns all records from the right table, and the matched records from the left table.
*   **FULL (OUTER) JOIN**: Returns all records when there is a match in either left or right table.
*   **CROSS JOIN**: Returns the Cartesian product of the two tables.
*   **SELF JOIN**: A regular join, but the table is joined with itself.

### Normalization
The process of organizing data to reduce redundancy and improve data integrity.
*   **1NF (First Normal Form)**: Atomic values (no repeating groups), unique column names.
*   **2NF (Second Normal Form)**: 1NF + no partial dependency (all non-key attributes depend on the full primary key).
*   **3NF (Third Normal Form)**: 2NF + no transitive dependency (non-key attributes depend only on the primary key).
*   **BCNF (Boyce-Codd Normal Form)**: A stricter version of 3NF.

---

## 3. Advanced Concepts

### ACID Properties
Properties that guarantee database transactions are processed reliably.
*   **Atomicity**: All or nothing. The entire transaction takes place at once or doesn't happen at all.
*   **Consistency**: The database must remain in a consistent state before and after the transaction.
*   **Isolation**: Multiple transactions occur independently without interference.
*   **Durability**: Changes of a successful transaction occur even if the system fails.

### Indexing
A data structure that improves the speed of data retrieval operations.
*   **Clustered Index**: Defines the physical order of data in a table. (Only one per table, usually on Primary Key).
*   **Non-Clustered Index**: A separate structure that points to the data rows. (Can have multiple).

### Transactions
A unit of work performed against a database.
*   **States**: Active, Partially Committed, Committed, Failed, Aborted.

### NoSQL Concepts (CAP Theorem)
It is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:
*   **Consistency**: Every read receives the most recent write or an error.
*   **Availability**: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
*   **Partition Tolerance**: The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

### Scaling
*   **Vertical Scaling (Scaling Up)**: Adding more power (CPU, RAM) to an existing machine.
*   **Horizontal Scaling (Scaling Out)**: Adding more machines to the network (Sharding).

### Sharding
Partitioning data across multiple servers (shards) to distribute the load.

---

## 4. Common Interview Questions

1.  **Difference between `DELETE`, `TRUNCATE`, and `DROP`?**
    *   `DELETE`: DML command, deletes rows, can be rolled back, slower.
    *   `TRUNCATE`: DDL command, removes all rows, resets identity, cannot be rolled back (in some DBs), faster.
    *   `DROP`: DDL command, removes the table structure and data entirely.

2.  **Difference between `HAVING` and `WHERE` clause?**
    *   `WHERE`: Filters rows *before* grouping. Cannot be used with aggregate functions.
    *   `HAVING`: Filters groups *after* grouping. Used with aggregate functions.

3.  **What is a View?**
    *   A virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table.

4.  **What is a Stored Procedure?**
    *   A prepared SQL code that you can save, so the code can be reused over and over again.

5.  **Explain the difference between SQL and NoSQL.**
    *   SQL: Relational, table-based, predefined schema, vertically scalable.
    *   NoSQL: Non-relational, document/key-value/graph-based, dynamic schema, horizontally scalable.

6.  **What is an Index and why is it used?**
    *   Used to speed up search queries. It's like a book index. Trade-off: Slows down `INSERT` and `UPDATE` operations.

7.  **What is Denormalization?**
    *   Adding redundant data to a normalized database to improve read performance.

8.  **What is a Deadlock?**
    *   A situation where two or more transactions are waiting for each other to give up locks, resulting in a cycle where none can proceed.

9.  **Explain ACID properties with an example.**
    *   (Bank Transfer):
        *   **A**: Money deducted from A and added to B happens together.
        *   **C**: Total money remains same.
        *   **I**: Another transaction checking balance sees either before or after state.
        *   **D**: If power fails after commit, money is still transferred.

10. **What is the difference between Primary Key and Unique Key?**
    *   **Primary Key**: Unique, Not Null, One per table.
    *   **Unique Key**: Unique, Can allow one Null (depending on DB), Multiple per table.

---

## 5. Advanced Database Concepts

### The N+1 Query Problem
**Problem:** Making N additional queries to fetch related data.

**Example (Bad):**
```sql
-- 1 query to get users
SELECT * FROM users;

-- Then N queries (one per user)
SELECT * FROM posts WHERE user_id = 1;
SELECT * FROM posts WHERE user_id = 2;
-- ... N times
```

**Solution - Use JOINs:**
```sql
-- Single query with JOIN
SELECT users.*, posts.*
FROM users
LEFT JOIN posts ON users.id = posts.user_id;
```

**Solution - Eager Loading (ORM):**
```javascript
// Sequelize example
const users = await User.findAll({
  include: [Post] // Automatically does JOIN
});
```

---

### Database Transactions
A sequence of operations performed as a single logical unit.

**Example: Bank Transfer**
```sql
BEGIN TRANSACTION;

-- Deduct from account A
UPDATE accounts SET balance = balance - 100 WHERE id = 1;

-- Add to account B
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If both succeed
COMMIT;

-- If any fails
ROLLBACK;
```

**In Node.js with PostgreSQL:**
```javascript
const client = await pool.connect();

try {
  await client.query('BEGIN');
  await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [100, 1]);
  await client.query('UPDATE accounts SET balance = balance + $1 WHERE id = $2', [100, 2]);
  await client.query('COMMIT');
} catch (e) {
  await client.query('ROLLBACK');
  throw e;
} finally {
  client.release();
}
```

---

### Connection Pooling
Reusing database connections instead of creating new ones for each request.

**Without pooling (Bad):**
```javascript
// Creates new connection every time - SLOW!
app.get('/users', async (req, res) => {
  const connection = await createConnection();
  const users = await connection.query('SELECT * FROM users');
  await connection.close();
  res.json(users);
});
```

**With pooling (Good):**
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'mydb',
  max: 20, // Maximum connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

app.get('/users', async (req, res) => {
  const client = await pool.connect(); // Gets from pool
  try {
    const result = await client.query('SELECT * FROM users');
    res.json(result.rows);
  } finally {
    client.release(); // Returns to pool (not closed!)
  }
});
```

**Benefits:**
- Much faster (connections are pre-created)
- Limits total database connections
- Handles connection lifecycle automatically

---

### Query Optimization Tips

1. **Use Indexes on WHERE clauses:**
```sql
-- Without index - Full table scan
SELECT * FROM users WHERE email = 'test@example.com';

-- Create index
CREATE INDEX idx_users_email ON users(email);
-- Now query is much faster
```

2. **Avoid SELECT * (select only needed columns):**
```sql
-- Bad
SELECT * FROM users WHERE id = 1;

-- Good
SELECT id, name, email FROM users WHERE id = 1;
```

3. **Use LIMIT for large datasets:**
```sql
-- Pagination
SELECT * FROM posts 
ORDER BY created_at DESC 
LIMIT 20 OFFSET 40; -- Page 3 (20 items per page)
```

4. **Analyze queries with EXPLAIN:**
```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';
-- Shows execution plan and performance metrics
```

# Database Interview Questions and Answers

---

## Question 1: Difference between JOINs

**INNER JOIN:** Returns only matching rows from both tables.

```sql
SELECT Users.name, Orders.id
FROM Users
INNER JOIN Orders ON Users.id = Orders.user_id;
```

**LEFT JOIN:** Returns all rows from left table + matching rows from right table.

```sql
SELECT Users.name, Orders.id
FROM Users
LEFT JOIN Orders ON Users.id = Orders.user_id;
```

**RIGHT JOIN:** Returns all rows from right table + matching rows from left table.

```sql
SELECT Users.name, Orders.id
FROM Users
RIGHT JOIN Orders ON Users.id = Orders.user_id;
```

**FULL OUTER JOIN:** Returns all rows from both tables, with NULLs if no match.

```sql
SELECT Users.name, Orders.id
FROM Users
FULL OUTER JOIN Orders ON Users.id = Orders.user_id;
```

---

## Question 2: Keys

* **Primary Key:** Unique identifier for a row. Cannot be NULL.
* **Foreign Key:** References a primary key in another table.
* **Unique Key:** Ensures column values are unique but can be NULL.

```sql
CREATE TABLE Users (
    id INT PRIMARY KEY,
    email VARCHAR(50) UNIQUE
);

CREATE TABLE Orders (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
```

---

## Question 3: Normalization

**1NF:** Atomic values, no repeating groups.
**2NF:** 1NF + all non-key columns fully depend on primary key.
**3NF:** 2NF + no transitive dependency.

Example: Users table with `id, name, address, city` → normalized by separating address table.

---

## Question 4: Index

**Index:** Data structure to speed up queries.

* Use for columns frequently used in `WHERE`, `JOIN`, `ORDER BY`.
* Drawbacks: slower `INSERT/UPDATE/DELETE` and uses extra memory.

```sql
CREATE INDEX idx_user_email ON Users(email);
```

---

## Question 5: SQL vs NoSQL

* **SQL:** Structured, relational, uses tables, schema enforced.
* **NoSQL:** Unstructured, flexible schema, document/key-value/graph.
* **Use MongoDB:** Dynamic schema, hierarchical JSON-like documents, fast prototyping.

---

## Question 6: MongoDB findOne() vs find()

* **findOne():** Returns single document.
* **find():** Returns cursor with multiple documents.

```js
// findOne
db.users.findOne({email: "test@example.com"});

// find
db.users.find({active: true});
```

---

## Question 7: Transactions & ACID

**Transaction:** Group of operations executed as one unit.

**ACID:**

* **Atomicity:** All or nothing.
* **Consistency:** DB remains valid.
* **Isolation:** Parallel transactions do not interfere.
* **Durability:** Changes persist after commit.

```sql
BEGIN;
UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
UPDATE Accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

---

## Question 8: Query Optimization

* Create indexes on frequently searched columns.
* Avoid `SELECT *`, fetch only needed columns.
* Use joins wisely, avoid nested queries if possible.
* Analyze query with `EXPLAIN`.

```sql
EXPLAIN SELECT * FROM Orders WHERE user_id = 5;
```

---

## Question 9: Total Orders per User

**SQL:**

```sql
SELECT Users.id, Users.name, COUNT(Orders.id) AS total_orders
FROM Users
LEFT JOIN Orders ON Users.id = Orders.user_id
GROUP BY Users.id, Users.name;
```

**MongoDB:**

```js
db.orders.aggregate([
  { $group: { _id: "$user_id", total_orders: { $sum: 1 } } }
]);
```

---

## Question 10: Database Design (E-commerce)

**Relational (SQL):**

```sql
Users(id PK, name, email)
Products(id PK, name, price)
Orders(id PK, user_id FK, total)
OrderItems(id PK, order_id FK, product_id FK, quantity)
```

**Document (MongoDB):**

```json
{
  "_id": 1,
  "name": "John",
  "orders": [
    {"order_id": 101, "products": [{"id": 1, "qty": 2}]}
  ]
}
```

* SQL: Good for transactional consistency, normalized data.
* MongoDB: Good for hierarchical, flexible, nested data, faster reads for aggregated documents.

---

**End of Document**
