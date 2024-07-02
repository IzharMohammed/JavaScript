/*
What are prototypes??
It is a mechanism way which js objects inherits features from one another

see screenshot 2024-07-03 in this folder to understand this explanation :-
There is a object function(upper) which is in JS runtime which is connected to a namesless JS 
objects by prototype and the nameless JS object is conected to the object by constructor.

If we have created any function(lower)  and when we have used new keyword then a new
 plain JS object is created and points to the nameless JS object . This nameless Js object comes
from the function object which we have used new keyword for it (Product) and the nameless (product) 
  Js object and the upper nameless JS object have an hidden connection between them

  __proto__  --> dunder    proto
*/

function product1(n) {
    this.name = n;
}

const d4 = new product1("izhar");
product1.prototype.display = () => console.log("name of product is :-", this.name);
console.log(d4);