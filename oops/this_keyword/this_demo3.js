/*
 this keyword doesnt work in arrow functions and it follows lexical scoping if the arrow function is inside of  named function
then then it will take properties of that scope related properties of named function , otherwise in case of namless function it is undefined
and lexicaal scoping continues ...... 
*/

var obj = {
    name: "izhar",
    location: "kurnool",
    display: () => {
        console.log(`${this.name} location in ${this.location}`);
    }
}

var obj1 = {
    name: "izhar",
    location: "kurnool",
    display: () => {
        setTimeout(() => {
            console.log(`${this.name} location in ${this.location}`);
        }, 3000)
    }
}

var obj2 = {
    name: "izhar",
    location: "kurnool",
    display: function () {
        setTimeout(() => {
            console.log(`${this.name} location in ${this.location}`);
        }, 3000)
    }
}

obj.display(); /// undefined location in undefined
obj1.display(); // undefined location in undefined
obj2.display(); // izhar location in kurnool