// Ployfill for map()
//  Array.map((num,i,arr)=>{ })

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4, 5];
let MultiplyByTwo = nums.myMap((num, i) => num * 2);
console.log(MultiplyByTwo);
// [ 2, 4, 6, 8, 10 ]

// polyfill for filter()
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const moreThanTwo = nums.myFilter((num) => num > 3);
console.log(moreThanTwo);
// [4,5]

// Polyfill for reduce
// arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum); // 15
