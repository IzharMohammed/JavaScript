/**
 * ==========================================
 * 🧩 COMMON CODING PATTERNS (MUST KNOW)
 * ==========================================
 * These are high-probability questions for SDE-1 rounds.
 */

// ==========================================
// 1. VALID ANAGRAM (Frequency Counter Pattern)
// ==========================================
// Q: Check if two strings have the same characters.
// Input: "anagram", "nagaram" -> true

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of t) {
        if (!map[char]) return false; // Char not found or count is 0
        map[char]--;
    }

    return true;
}
console.log("Anagram:", isAnagram("anagram", "nagaram")); // true


// ==========================================
// 2. VALID PALINDROME (Two Pointer Pattern)
// ==========================================
// Q: Check if string reads same forwards and backwards (ignoring non-alphanumeric).
// Input: "A man, a plan, a canal: Panama" -> true

function isPalindrome(s) {
    // Regex to remove non-alphanumeric and convert to lower case
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log("Palindrome:", isPalindrome("A man, a plan, a canal: Panama")); // true


// ==========================================
// 3. FIBONACCI (Recursion vs Iteration)
// ==========================================
// Sequence: 0, 1, 1, 2, 3, 5, 8...

// Iterative (Better for performance O(n))
function fibIterative(n) {
    if (n < 2) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Recursive (Good for theory O(2^n))
function fibRecursive(n) {
    if (n < 2) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log("Fib(6):", fibIterative(6)); // 8


// ==========================================
// 4. FLATTEN NESTED ARRAY (Recursion)
// ==========================================
// Input: [1, [2, [3, 4], 5]] -> [1, 2, 3, 4, 5]

function flatten(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            // If item is array, recurse and push spread results
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

// Using built-in (Interviewers might ask to implement polyfill above)
// const flat = arr.flat(Infinity);

console.log("Flatten:", flatten([1, [2, [3, 4], 5]])); 
