/**
 * ==========================================
 * 🌐 FULL STACK INTERVIEW CONCEPTS
 * ==========================================
 *
 * 1. AUTHENTICATION & AUTHORIZATION
 * ---------------------------------
 * Q: Difference between Authentication (AuthN) and Authorization (AuthZ)?
 * A:
 * - AuthN: Verifying WHO you are (Login, Password, OTP).
 * - AuthZ: Verifying WHAT you can do (Admin, User, Read-only).
 *
 * Q: How does JWT (JSON Web Token) work?
 * A:
 * 1. Client logs in with credentials.
 * 2. Server verifies and signs a token (Header + Payload + Signature).
 * 3. Server sends token to Client.
 * 4. Client stores token (LocalStorage / Cookie).
 * 5. Client sends token in 'Authorization' header for subsequent requests.
 * 6. Server verifies signature.
 *
 * Q: Session vs Token-based Auth?
 * - Session: State stored on server (needs memory/DB). Client has a Session ID.
 * - Token (JWT): Stateless. All info is in the token. Server just verifies signature.
 */

// ==========================================
// 2. REST API DESIGN
// ==========================================
/*
 * HTTP METHODS:
 * - GET: Fetch data (Idempotent - calling multiple times has same effect).
 * - POST: Create new resource.
 * - PUT: Update/Replace entire resource.
 * - PATCH: Partial update.
 * - DELETE: Remove resource.
 *
 * HTTP STATUS CODES:
 * - 200 OK: Success.
 * - 201 Created: Resource created (POST).
 * - 400 Bad Request: Client error (Invalid input).
 * - 401 Unauthorized: Not logged in (Missing/Invalid Token).
 * - 403 Forbidden: Logged in, but no permission (Admin only).
 * - 404 Not Found: Resource doesn't exist.
 * - 500 Internal Server Error: Server crashed/Bug.
 */

// ==========================================
// 3. DATABASE CONCEPTS (SQL vs NoSQL)
// ==========================================
/*
 * SQL (Relational): MySQL, PostgreSQL
 * - Structure: Tables with Rows and Columns.
 * - Schema: Strict (Must define columns beforehand).
 * - Relations: Foreign Keys (One-to-One, One-to-Many).
 * - ACID Properties: Atomicity, Consistency, Isolation, Durability (Transactions).
 * - Use case: Financial apps, complex relationships.
 *
 * NoSQL (Non-Relational): MongoDB, Firebase
 * - Structure: Collections with Documents (JSON-like).
 * - Schema: Flexible (Dynamic fields).
 * - Scaling: Horizontal (Sharding) is easier.
 * - Use case: Real-time apps, Big Data, Rapid prototyping.
 */

// ==========================================
// 4. WEB SECURITY BASICS
// ==========================================
/*
 * 1. CORS (Cross-Origin Resource Sharing):
 *    - Browser blocks requests from Domain A to Domain B by default.
 *    - Server must send 'Access-Control-Allow-Origin' header to allow it.
 *
 * 2. XSS (Cross-Site Scripting):
 *    - Attacker injects malicious scripts into your web page.
 *    - Prevention: Sanitize inputs, use React (auto-escapes), Content Security Policy (CSP).
 *
 * 3. CSRF (Cross-Site Request Forgery):
 *    - Attacker tricks user into performing action on a site they are logged into.
 *    - Prevention: CSRF Tokens, SameSite Cookies.
 */

// ==========================================
// 5. SYSTEM DESIGN BASICS (Low Level)
// ==========================================
/*
 * Q: How to handle file uploads?
 * A: Use 'multipart/form-data'. In Node, use 'multer' middleware.
 *    Store file in Cloud (AWS S3, Cloudinary) and save URL in Database.
 * 
 * Q: How to scale a Node.js app?
 * A: 
 * 1. Clustering: Use all CPU cores (Node is single-threaded).
 * 2. Load Balancing: Nginx to distribute traffic across multiple servers.
 * 3. Caching: Use Redis to cache frequent DB queries.
 * 4. Database Indexing: Optimize query performance.
 */
