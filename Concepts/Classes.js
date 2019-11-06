// Classes are an disasterous attempt by java developers to make javascript class
// based.js is not class based, its functional - hence powerful for the purpose it was built.
// let us look closer at the disasterous attempt

//Parent class
class Human {
  //no need to use constructor

  gender = "male";
  printGender() {
    console.log(this.gender);
    
  }
}

class Woman extends Human {
  gender = "female";
  isEvil = true;

}

let jyoti = new Woman();
jyoti.printGender();

//would this run? 
// Nopes, any guesses??????

//this way of defining class is es 7 . We high high tech
//gotta go lowkey and transpile - for which we use babel.
