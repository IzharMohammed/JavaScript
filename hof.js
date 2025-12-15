// map, filter, reduce

// what is map() ?

const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {
  console.log([i, arr]);

  return num * 3;
});

console.log(multiplyThree);

//  what is filter() ??
const moreThanTwo = nums.filter((num) => {
  return num > 2;
});

console.log(moreThanTwo);

console.log("=".repeat(30));

//  what is reduce() ??
const sum = nums.reduce((acc, curr) => {
  console.log([acc, curr]);
  return acc + curr;
}, 0);
