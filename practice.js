'use strict'
var person = {
  name: 'akhilesh',
  hello: function(thing) {
    console.log(this.name + 'says hello ' + thing);
    
  }
}

let boundHello = function(thing) {
  return person.hello.call(person, thing)
}

boundHello('amazing')