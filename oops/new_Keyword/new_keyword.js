/*
when we write new it creates an plain object and when we call constructor by product()  then new keyword doesnt point to product 
class instead it points to  this which is inside constructor and the sole purose of constructor is to return an empty object if we 
manually returns any primitive types like 10 , "10" then it doesnt get effected instead if we return an object whether its empty or
not then it returns that object to P and in js there is no concept of constructor overloading because we cant declare constructor 
keyword more than twice it will gives us an error , in languages like java and c++ it is allowed but in JS it will throw an error if 
we have called constructor more than once . This same thing we can achieve without using of class , constructor , we can use 
function constructor before the introduction of classes in JS , we achieve this blueprinting using function constructor . see function_constructor.js 
*/

class product{
    name;
    price;
    description;

    constructor(n , p , d){
        this.name=n;
        this.price=p;
        this.description=d;
        // return "10";
        // return {} ; // it will returns an empty object in p
        //return this; // if we dont return anything it is equivalent to returning of this 
    }

}

const p = new product('bag', 100 , 'something .....');
console.log(p);
//{ name: 'bag', price: 100, description: 'something .....' }