/*
setters and getters in js 
we can define a variable as private by using # keyword
we can use set keyword for setters and get keyword for getters
*/
class product{
    #name; // private variables
    #price;
    //description;

    constructor(n , p , d){
        this.#name=n;
        this.#price=p;
        this.description=d;
    }

    //setters
    set name(n){
        if(typeof(n) != 'string'){
            console.log('invaled name passed');
            return;
        }

        this.#name = n;
    }
    //Getters
    get name() {
        return this.#name;
    }

    display(){
        console.log(this.#name , this.#price , this.description);
    }

}

const p = new product('bag', 100 , 'something .....');
console.log(p);
//p.name = -1;  // invalid name passed
p.name = "izhar";
console.log(p);
p.display()
console.log(p.name); // izhar