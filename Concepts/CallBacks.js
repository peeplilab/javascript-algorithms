//what the hell are callbacks
//to understand callbacks we have to understand 
//a basic  feature of javascript, i.e. javascript is event driven
//let me explain through an example
function one() {
  setTimeout(() => {
    console.log('one')
  }, 1000);
}

function two() {
  console.log('two')
}

//one();
//two();

//even though i am calling function "one()" first its
//response comes last? 
//It’s not that JavaScript didn’t execute our functions in the order we wanted it to,
// it’s instead that JavaScript didn’t wait for a response from one() before moving on to execute two().

//simple callback
/**First, open up your Chrome Developer Console (Windows: Ctrl + Shift + J)(Mac: Cmd + Option + J) and type the following function declaration into your console:
*/
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework`);
  callback();
}

//callback can be anon

doHomework('history', function() {
  console.log('finished')
})

//or pass it separately
let bioHandler = () => {
  console.log('finshed ke baad')
}

doHomework('Biology', bioHandler)