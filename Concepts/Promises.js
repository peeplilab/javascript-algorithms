//what the hell are promises???
// a promise is a proxy for a value not necessarily known when the promise is created.

//what is their relation to callback?
//remember handlers that are executed when value is returned, like we did in callback - well similarly you can get a cached value of result in 

//Always remember : Promises are kind of design patterns to remove the usage of unintuitive callbacks.

// simplest way to create promise 
let p = new Promise((resolve, reject) => {

})

//example 2
let userDetails;

function initialise() {
  return new Promise((resolve, reject) => { //creating promise using constructor
    setTimeout(() => {
      resolve('AA GAYA DATA YAY') //using resolve instead of return or callback
    }, 2000); //after 2 sec
  })
}
//Initialise function returns a promise - Whenever a function returns a promise - it can be awaited using async -await .


// function main() {
//   let initP = initialise();
//   initP
//   .then((x) => {
//     userDetails = x;
//     console.log(userDetails);
//     return userDetails
//   })
//   .then((x) => {
//     console.log(x, 'ast');

//   })
// }
// main()

//in abv example 
// line 26 - we initialise promise to a variable which holds the methods of the promise
// line 31 - i am returning promise because I would like to use the value in next "then" method

//Ask yourself - Are promises blocking or non-blocking?
//Blocking ofcourse - lets prove it

async function main() {
  let initP = await initialise();
  console.log(initP);
  console.log('after');
}
main()

//Explanation
//had the promises been non-blocking after would have been printed before "AA GAYA DATA YAY". 
