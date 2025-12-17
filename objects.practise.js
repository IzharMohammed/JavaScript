/*
============================================================
 OBJECTS / HASHMAP PRACTICE — SDE 1
============================================================
FOCUS:
- Frequency counting
- O(1) lookup using objects
- Grouping data

INSTRUCTIONS:
- Write ONLY logic inside functions
- DO NOT modify test cases
- Run file and verify output
============================================================
*/

// -----------------------------------------------------------
// Q1. Count Frequency of Elements
// Description:
// Given an array, return an object with frequency of each element.
// Input: [1, 2, 2, 3, 3, 3]
// Output: { 1:1, 2:2, 3:3 }
// Edge case: empty array → {}
// -----------------------------------------------------------
function countFrequency(arr) {
    // TODO
}

console.log("Q1:", countFrequency([1, 2, 2, 3, 3, 3]));
console.log("Q1 Edge:", countFrequency([]));


// -----------------------------------------------------------
// Q2. Find Duplicates Using Object
// Description:
// Return array of elements that appear more than once.
// Input: [1,2,3,2,4,1]
// Output: [1,2]
// Edge case: no duplicates → []
// -----------------------------------------------------------
function findDuplicates(arr) {
    // TODO
}

console.log("Q2:", findDuplicates([1, 2, 3, 2, 4, 1]));
console.log("Q2 Edge:", findDuplicates([1, 2, 3]));


// -----------------------------------------------------------
// Q3. Group Words by Anagram
// Description:
// Group words that are anagrams of each other.
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// Edge case: single word
// -----------------------------------------------------------
function groupAnagrams(words) {
    // TODO
}

console.log("Q3:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("Q3 Edge:", groupAnagrams(["abc"]));


// -----------------------------------------------------------
// Q4. Two Sum Using HashMap
// Description:
// Return indices of two numbers such that they add up to target.
// Input: [2,7,11,15], target = 9
// Output: [0,1]
// Edge case: negative numbers
// -----------------------------------------------------------
function twoSum(arr, target) {
    // TODO
}

console.log("Q4:", twoSum([2, 7, 11, 15], 9));
console.log("Q4 Edge:", twoSum([-3, 4, 3, 90], 0));


// -----------------------------------------------------------
// Q5. Most Frequent Element
// Description:
// Return the element with highest frequency.
// Input: [1,3,2,1,4,1]
// Output: 1
// Edge case: multiple max frequency → return any
// -----------------------------------------------------------
function mostFrequent(arr) {
    // TODO
}

console.log("Q5:", mostFrequent([1, 3, 2, 1, 4, 1]));
console.log("Q5 Edge:", mostFrequent([5, 5, 6, 6]));


/*
============================================================
 EXPECTED OUTPUT (Order may vary where noted)
============================================================
Q1: { 1:1, 2:2, 3:3 }
Q1 Edge: {}

Q2: [1,2]
Q2 Edge: []

Q3: [ [ 'eat','tea','ate' ], [ 'tan','nat' ], [ 'bat' ] ]
Q3 Edge: [ [ 'abc' ] ]

Q4: [0,1]
Q4 Edge: [0,2]

Q5: 1
Q5 Edge: 5 or 6
============================================================
*/
