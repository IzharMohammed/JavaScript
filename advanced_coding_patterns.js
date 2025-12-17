/**
 * ==========================================
 * 🚀 ADVANCED CODING PATTERNS (SDE-1)
 * ==========================================
 * Slightly harder but very common questions.
 */

// ==========================================
// 1. SLIDING WINDOW (Max Sum Subarray of size K)
// ==========================================
// Q: Find max sum of a contiguous subarray of size k.
// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9 (5+1+3)

function maxSubarraySum(arr, k) {
    if (arr.length < k) return null;

    let maxSum = 0;
    let tempSum = 0;

    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        tempSum = tempSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}
console.log("Max Subarray Sum:", maxSubarraySum([2, 1, 5, 1, 3, 2], 3));


// ==========================================
// 2. MERGE TWO SORTED ARRAYS (Two Pointers)
// ==========================================
// Input: [1, 3, 5], [2, 4, 6] -> [1, 2, 3, 4, 5, 6]

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    // Push remaining elements
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}
console.log("Merged:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));


// ==========================================
// 3. VALID PARENTHESES (Stack)
// ==========================================
// Q: Check if brackets are balanced.
// Input: "{[]}" -> true, "{[}]" -> false

function isValidParentheses(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // If open bracket, push corresponding close bracket to stack
            stack.push(map[char]);
        } else {
            // If close bracket, check if it matches top of stack
            if (stack.pop() !== char) return false;
        }
    }

    return stack.length === 0;
}
console.log("Valid Parentheses:", isValidParentheses("{[]}")); // true


// ==========================================
// 4. GROUP ANAGRAMS (Hash Map)
// ==========================================
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

function groupAnagrams(strs) {
    const map = {};

    for (let str of strs) {
        // Sort string to use as key: "eat" -> "aet"
        const key = str.split('').sort().join('');

        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }

    return Object.values(map);
}
console.log("Group Anagrams:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
