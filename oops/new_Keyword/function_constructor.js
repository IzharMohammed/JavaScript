/*
These are function constructors if we create new then it will create a brand new plain JS object and add on vales to it
if we havent used new keyword then it will return undefined we have to manually return this and this it will return a total 
object including the values which we have added because we havent used new keyword( brand new plain JS object)
*/

//with new keyword
function product(n , p , d){
    this.name = n;
    this.price = p;
    this.description = d;
}
const p = new product('izhar', 10000 , 'something .....');
console.log(p);
//{ name: 'izhar', price: 10000, description: 'something .....' }


//without new keyword 
function product1(n , p , d){
    this.name = n;
    this.price = p;
    this.description = d;
}
const p1 =  product1('izhar', 10000 , 'something .....');
console.log(p1); // undefined


function product2(n , p , d){
    this.name = n;
    this.price = p;
    this.description = d;
    return this;
}
const p2 =  product2('izhar', 10000 , 'something .....');
console.log(p2); 
/*
Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter],

  name: 'izhar',
  price: 10000,
  description: 'something .....'
}
*/