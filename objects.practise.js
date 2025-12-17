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
  if (arr.length === 0) return {};

  let ans = {};
  //   M-1
  //   for (let i = 0; i < arr.length; i++) {
  //     let current = arr[i];

  //     if (ans[current] === undefined) {
  //       ans[current] = 1;
  //     } else {
  //       ans[current] = ans[current] + 1;
  //     }
  //   }

  //   M-2
  for (let num of arr) {
    ans[num] = (ans[num] || 0) + 1;
  }

  return ans;
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
function findDuplicates1(arr) {
  let freq = {};
  const duplicates = [];
  // Step 1: Build frequency map
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Step 2: Collect duplicates
  for (let key in freq) {
    if (freq[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

// M-2
function findDuplicates(arr) {
  const freqMap = new Map();
  const duplicates = [];

  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let [key, value] of freqMap) {
    if (value > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
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
// M-1 Object version
function groupAnagrams(words) {
  // console.log(words);
  const map = {};
  for (let word of words) {
    // 1. sort the letters
    const key = word.split("").sort().join();

    //   2. group by key
    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  return Object.values(map);
}

// M-2 Map version
function groupAnagrams1(words) {
  const map = new Map();
  for (let word of words) {
    const key = word.split("").sort().join();

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
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
  let ans = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = target - current;

    if (ans[remaining] === undefined) {
      ans[current] = i;
    } else {
      return [ans[remaining], i];
    }
  }

  return ans;
}

// Map version
function twoSum1(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const remaining = target - arr[i];
    if (map.has(remaining)) {
      return [map.get(remaining), i];
    }

    map.set(arr[i], i);
  }
  return [];
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
  let freq = {};
  let maxCount = 0;
  let maxElement = null;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > maxCount) {
      maxCount = freq[key];
      maxElement = Number(key);
    }
  }

  return maxElement;
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
