/*this  keyword */
const iphone1 = {
    name: 'iphone pro max',
    price: 1000000,
    rating: 2.2,

    display() {
        console.log('this :- ', this);
    }
}

console.log(iphone1);
/* {
  name: 'iphone pro max',
  price: 1000000,
  rating: 2.2,
  display: [Function: display]
}
*/
iphone1.display();
/*
this :-  {
  name: 'iphone pro max',
  price: 1000000,
  rating: 2.2,
  display: [Function: display]
}
*/
