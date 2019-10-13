//what the hell are promises???
// a promise is a proxy for a value not necessarily known when the promise is created.

//what is their relation to callback?
//Remember how we use callback-functions to listen and return asynchronous data?
//Promises are kind of design patterns to remove the usage of unintuitive callbacks.

//example 1
// simplest way to create promise 
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(50)
  }, 2000);
})

p.then((x) => console.log(x)) //will return 50
//Take a moment to see a funny thing - which is why I love javascript. Not only a function, 
//but a humble variable has enough abstraction to execute asynchronous tasks and 
// also return values. Quite cool, in my opinion.

//example 2
let userDetails;

function initialise() {
  return new Promise((resolve, reject) => { //creating promise using constructor
    setTimeout(() => {
      resolve('AA GAYA DATA YAY') //using resolve instead of return or callback
    }, 2000); //after 2 sec
  })
}
//Initialise function returns a promise - Whenever a function returns 
// a promise - it can be awaited using async -await .


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
//Blocking ofcourse - we are waiting for data to arrive - typically from databases - remember? 
//lets also see a practical example to understand this concept.

async function main() {
  let initP = await initialise();
  console.log(initP);
  console.log('after');
}
main()

//Explanation: Had the promises been non-blocking after would 
// have been printed before "AA GAYA DATA YAY". 

//Power of promises in writing clean and manageable code
function getData() {
    return Promise.resolve('Do some stuff');
}

function changeDataFormat(){
    // ...
}

function storeData(){
    // ...
}

getData()
    .then(changeDataFormat)
    .then(storeData)
    .catch((e) => {
        // Handle the error!
    })
 