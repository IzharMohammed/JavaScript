                      /*This inside a arrow function */
const iphone = {
    name: 'iphone',
    category: 'electronics',
    price: 10000,
    rating: 4.4,
    display: () => {
        console.log(this);
    }
}

const macbook = {
    name: 'macbook',
    category: 'electronics',
    price: 10000,
    rating: 4.4,
    display: function () {
        console.log(this);
    }
}

macbook.display();
/*
{
  name: 'macbook',
  category: 'electronics',
  price: 10000,
  rating: 4.4,
  display: [Function: display]
}
*/
iphone.display();
// OUTPUT :- {} 
//Reason :- because of arrow function , inside arrow functions this does not refer to calling context except this case this refer to calling context of objects
// How can we resolve this issue ?? using lexical scoping 
//this follows lexical scoping 

const iphone1 = {
    name: 'iphone',
    rating: 4.4,
    display: () => {
        let innerIphone = {
            name: 'inner iphone',
            rating: 5,
            print: function () {
                console.log('inner', this);
            }
        }
        innerIphone.print();
    }
}

iphone1.display();
//OUTPUT :- inner { name: 'inner iphone', rating: 5, print: [Function: print] }

const iphone2 = {
    name: 'iphone',
    rating: 4.4,
    display: function () {
        let innerIphone = {
            name: 'inner iphone',
            rating: 5,
            print: () => {
                console.log('inner', this);
            }
        }
        innerIphone.print();
    }
}

iphone2.display();
//OUTPUT : - inner { name: 'iphone', rating: 4.4, display: [Function: display] }


const iphone3 = {
    name: 'iphone',
    rating: 4.4,
    display:  () => {
        let innerIphone = {
            name: 'inner iphone',
            rating: 5,
            print: () => {
                console.log('inner', this);
            }
        }
        innerIphone.print();
    }
}

iphone3.display();
//OUTPUT :- inner {}