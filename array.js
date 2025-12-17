/*
============================================================
 ARRAYS PRACTICE — SDE 1 (EASY → MEDIUM)
============================================================
INSTRUCTIONS:
- Write ONLY logic inside functions
- DO NOT change test cases
- Run file & compare output
- Focus on approach + explanation
============================================================
*/

// -----------------------------------------------------------
// Q1. Find Maximum and Minimum in an Array
// Input: [3, 5, 1, 8, 2]
// Output: { max: 8, min: 1 }
// Concepts: Traversal
// -----------------------------------------------------------
function findMaxMin(arr) {
  let ans = { max: -Infinity, min: Infinity };

  for (const a of arr) {
    if (a > ans.max) ans.max = a;
    if (a < ans.min) ans.min = a;
  }
  return ans;
}

console.log("Q1:", findMaxMin([3, 5, 1, 8, 2]));

// -----------------------------------------------------------
// Q2. Reverse an Array
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
// Concepts: Two pointers
// -----------------------------------------------------------
function reverseArray(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    swap(left, right, arr);
    left++;
    right--;
  }

  return arr;
}

function swap(left, right, arr) {
  let something = arr[left];
  arr[left] = arr[right];
  arr[right] = something;
}

console.log("Q2:", reverseArray([1, 2, 3, 4]));

// -----------------------------------------------------------
// Q3. Remove Duplicates from Sorted Array
// Input: [1, 1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]
// Concepts: Two pointers
// -----------------------------------------------------------
function removeDuplicates(arr) {
  if (arr.length === 0) return;
  let idx = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[idx] = arr[i];
      idx++;
    }
  }
  return arr.slice(0, idx);
}

console.log("Q3:", removeDuplicates([1, 1, 2, 2, 3, 4, 4]));

// -----------------------------------------------------------
// Q4. Find Missing Number (1 to n)
// Input: [1, 2, 4, 5], n = 5
// Output: 3
// Concepts: Prefix Sum / Math
// -----------------------------------------------------------
function missingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log("Q4:", missingNumber([1, 2, 4, 5], 5));

// -----------------------------------------------------------
// Q5. Rotate Array by k (Right Rotation)
// Input: [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Concepts: Modulo, slicing
// -----------------------------------------------------------
function rotateArray(arr, k) {
  const n = arr.length - 1;
  k = k % n;

  // Step 1: Reverse whole array
  reverse(arr, 0, n);

  // Step 2: Reverse first k elements
  reverse(arr, 0, k - 1);

  // Step 3: Reverse remaining elements
  reverse(arr, k, n);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    let something = arr[start];
    arr[start] = arr[end];
    arr[end] = something;
    start++;
    end--;
  }
}

console.log("Q5:", rotateArray([1, 2, 3, 4, 5], 2));

// -----------------------------------------------------------
// Q6. Two Sum
// Input: [2,7,11,15], target = 9
// Output: [0,1]
// Concepts: Hash Map
// -----------------------------------------------------------
// Not optimal
function twoSum_1(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === target) return [left, right];
    if (arr[left] + arr[right] < target) left++;
    if (arr[left] + arr[right] > target) right--;
  }
}

function twoSum(arr, target) {
  const seen = {}; // stores number -> index

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const needed = target - current;

    // If we already saw the required number
    if (seen[needed] !== undefined) {
      return [seen[needed], i];
    }

    // Store current number with its index
    seen[current] = i;
  }
}

console.log("Q6:", twoSum([2, 7, 11, 15], 9));

// -----------------------------------------------------------
// Q7. Move All Zeros to End
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Concepts: Two pointers
// -----------------------------------------------------------
function moveZeros(arr) {
  let idx = 0; // position to place next non-zero

  // Step 1: Move all non-zero elements forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[idx] = arr[i];
      idx++;
    }
  }

  // Step 2: Fill remaining positions with zero
  while (idx < arr.length) {
    arr[idx] = 0;
    idx++;
  }

  return arr;
}

console.log("Q7:", moveZeros([0, 1, 0, 3, 12]));
// Output: [1, 3, 12, 0, 0]

// -----------------------------------------------------------
// Q8. Find Second Largest Element
// Input: [10, 5, 8, 20]
// Output: 10
// Concepts: Traversal
// -----------------------------------------------------------
function secondLargest(arr) {
  // TODO
}

console.log("Q8:", secondLargest([10, 5, 8, 20]));

/*
============================================================
 EXPECTED OUTPUT
============================================================
Q1: { max: 8, min: 1 }
Q2: [4,3,2,1]
Q3: [1,2,3,4]
Q4: 3
Q5: [4,5,1,2,3]
Q6: [0,1]
Q7: [1,3,12,0,0]
Q8: 10
============================================================
*/
