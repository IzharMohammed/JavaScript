/**
 * ==========================================
 * 📅 JAVASCRIPT DATE OBJECT - REAL WORLD GUIDE
 * ==========================================
 * The native Date object is powerful but has some quirks (0-indexed months!).
 * Here are the most useful patterns for SDE-1 interviews and real-world apps.
 */

// ==========================================
// 1. CREATING DATES (The Right Way)
// ==========================================

// A. Current Date & Time
const now = new Date();
console.log("Current:", now.toISOString()); // Best for logging/DB (UTC)

// B. Specific Date (ISO String - Recommended)
// Format: YYYY-MM-DDTHH:mm:ss.sssZ
const specificDate = new Date("2025-12-25T10:00:00Z");
console.log("Specific (UTC):", specificDate.toISOString());

// C. Timestamps (Unix Epoch - Milliseconds since 1970)
// Great for calculations and storing in databases (lightweight).
const timestamp = Date.now();
console.log("Timestamp:", timestamp);

// ==========================================
// 2. FORMATTING DATES (Intl.DateTimeFormat)
// ==========================================
// Don't use .toString() for UI. Use Intl for localization.

const date = new Date();

// Option 1: .toLocaleDateString()
const usDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
console.log("US Format:", usDate); // e.g., "Monday, December 15, 2025"

// Option 2: .toLocaleString() (Date + Time)
const inTime = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
console.log("India Time:", inTime);

// ==========================================
// 3. DATE ARITHMETIC (Adding/Subtracting)
// ==========================================

const today = new Date();
const tomorrow = new Date(today);

// Add 1 Day
tomorrow.setDate(today.getDate() + 1);
console.log("Tomorrow:", tomorrow.toDateString());

// Subtract 1 Month
const lastMonth = new Date(today);
lastMonth.setMonth(today.getMonth() - 1);
console.log("Last Month:", lastMonth.toDateString());

// Calculate Difference (in Days)
const start = new Date("2025-01-01");
const end = new Date("2025-01-10");
const diffTime = Math.abs(end - start); // Result in milliseconds
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log("Difference (Days):", diffDays); // 9

// ==========================================
// 4. COMMON PITFALLS (Watch out!)
// ==========================================

// A. Months are 0-indexed (0 = Jan, 11 = Dec)
const badDate = new Date(2025, 1, 15); // This is Feb 15th, NOT Jan 15th!
console.log("Month Check:", badDate.toDateString());

// B. Date Mutability
// Methods like .setDate() modify the object IN PLACE.
const d1 = new Date();
const d2 = d1; // d2 references the SAME object
d2.setFullYear(2030);
console.log("d1 changed too:", d1.getFullYear()); // 2030 (Oops!)
// Fix: Clone it -> const d2 = new Date(d1);

// ==========================================
// 5. MODERN ALTERNATIVES (Libraries)
// ==========================================
/*
 * Native Date is clunky. In real-world apps, we often use libraries:
 * 
 * 1. date-fns (Recommended): Lightweight, modular, functional.
 *    import { format, addDays } from 'date-fns';
 * 
 * 2. Day.js: Tiny (2kB), API similar to Moment.js.
 * 
 * 3. Luxon: Great for Timezones and Internationalization.
 * 
 * 4. Temporal API (Future): The new native standard coming to JS.
 *    Fixes all the issues of Date object. (Keep an eye on this!)
 */