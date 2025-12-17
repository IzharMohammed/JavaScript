/*
============================================================
  STRINGS PRACTICE — SDE 1 (INTERVIEW PREP)
============================================================
 INSTRUCTIONS:
 1. Write the logic inside each function.
 2. Run the file using `node string.practise.js` to test.
 3. Compare your output with the expected output provided.
============================================================
*/

// -----------------------------------------------------------
// Q1. Reverse a String
// Description: Return the reverse of the given string.
// Input: "hello"
// Output: "olleh"
// -----------------------------------------------------------
function reverseString1(str) {
  let arr = str.split("");
  console.log(arr);

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }

  return arr.join("");
}

function swap(arr, left, right) {
  let something = arr[left];
  arr[left] = arr[right];
  arr[right] = something;
}

// M-2 Built in
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Q1 Output:", reverseString("hello"));
console.log("Q1 Expected: olleh");
console.log("-".repeat(30));

// -----------------------------------------------------------
// Q2. Check Palindrome
// Description: Check if a string reads the same backward as forward.
// Input: "racecar" -> true, "hello" -> false
// -----------------------------------------------------------
// M-1 uses extra space
function isPalindrome1(str) {
  const arr = str.split("");
  let left = 0,
    right = arr.length - 1;

  //   str.toLowerCase().replace(/[^a-z0-9]/g, ""); // if asked ignore and spaces

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// M-2 efficient
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log("Q2 Output:", isPalindrome("racecar"));
console.log("Q2 Expected: true");
console.log("-".repeat(30));

// -----------------------------------------------------------
// Q3. Count Character Frequency
// Description: Return an object with the count of each character.
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
// -----------------------------------------------------------

// M-1 object approach
function charFrequency1(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }
  return freq;
}

// M-2 Map approach
function charFrequency(str) {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return Object.fromEntries(map);
}

console.log("Q3 Output:", charFrequency("hello"));
console.log("Q3 Expected: { h: 1, e: 1, l: 2, o: 1 }");
console.log("-".repeat(30));

// -----------------------------------------------------------
// Q4. First Non-Repeating Character
// Description: Find the first character that does not repeat.
// Input: "aabbcdd"
// Output: "c"
// -----------------------------------------------------------
function firstNonRepeatingChar(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  for (let key of str) {
    if (freq[key] === 1) return key;
  }

  return null;
}

console.log("Q4 Output:", firstNonRepeatingChar("aabbcdd"));
console.log("Q4 Expected: c");
console.log("-".repeat(30));

// -----------------------------------------------------------
// Q5. Check Anagram
// Description: Check if two strings contain the same characters.
// Input: "listen", "silent"
// Output: true
// -----------------------------------------------------------
// M-1
function isAnagram1(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for (let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for (let char of str1) {
    if (freq1[char] !== freq2[char]) return false;
  }

  return true;
}

// M-2 (optimized)
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = {};

  for (let ch of str1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch of str2) {
    if (!freq[ch]) return false;
    freq[ch]--;
  }

  return true;
}

console.log("Q5 Output:", isAnagram("listen", "silent"));
console.log("Q5 Expected: true");
console.log("-".repeat(30));

// -----------------------------------------------------------
// Q6. Longest Word in a Sentence
// Description: Return the longest word in the given sentence.
// Input: "I love JavaScript programming"
// Output: "programming"
// -----------------------------------------------------------
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log("Q6 Output:", longestWord("I love JavaScript programming"));
console.log("Q6 Expected: programming");
console.log("-".repeat(30));

// -----------------------------------------------------------
// Q7. Remove Duplicate Characters
// Description: Remove duplicate characters from the string.
// Input: "programming"
// Output: "progamin" (order may vary based on implementation, usually first occurrence kept)
// -----------------------------------------------------------
// M-1
function removeDuplicates1(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }

  return Object.keys(freq).join("");
}

// M-2

function removeDuplicates(str) {
  let freq = {};
  let result = "";
  for (let ch of str) {
    if (!freq[ch]) {
      freq[ch] = 1;
      result += ch;
    }
  }

  return result;
}

// using set
function removeDuplicates2(str) {
  return [...new Set(str)].join("");
}

console.log("Q7 Output:", removeDuplicates("programming"));
console.log("Q7 Expected: progamin");
console.log("-".repeat(30));
