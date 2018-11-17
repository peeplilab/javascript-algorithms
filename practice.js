//let person = new Object();
//console.log(typeof person);
//console.log(person.constructor);
let x = {a:'b'};

var number = new Object(12),
anotherNumber = new Object(3*2),
string = new Object("test"),
person = new Object({name: "John", surname: "Smith"});
//console.log(x);

function Alpa(name,age) {
    this.name = name,
    this.age = age
}
Alpa.prototype.introduction = function() {
    return(this.name + this.age);
    
}
Alpa.prototype.sayHello = function() {
    return('HELLO')
}
let b = new Alpa('kitty',23);
//console.log( b.name + ' says ' + b.sayHello())

//factorialize
let f = (n) => {
    if(n===1) {
        return n
    } else {
        return n * f(n -1)
    }
}
//console.log(f(4));


//longestWord
let longestWord = (str) => {
    let words = str.split(' ');
    let biggest = 0;
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > biggest) {
            biggest = words[i].length
        }
    }
    return biggest;

}
//console.log(longestWord('hello wmoomof fdfdfd '));

//largest Num Array

let largestNum = (arr) => {
    let biggest = 0;
    return arr.reduce((x,y) => {
        return Math.max(x,y)
    })
}

//console.log(largestNum([3,4,5,6,7]));

//largest in 2d arr
let largestNInArr = (arr) => {
    let biggestNums = [];
    for(let i = 0; i < arr.length; i++) {
        let biggest = arr[i][0];
        for(let j = 1; j < arr[i].length; j++) {
            if(arr[i][j] > biggest) {
                biggest = arr[i][j]
            }
        }
        biggestNums[i] = biggest
    }
    return biggestNums;
}

//console.log(largestNInArr([[4,4,4,55],[33,4444,44444,44444],[4535345,345345345345345345,345]]));

//endswith
let strEndCheck = (str1,str2) => {
    let endCheck = str1.slice(-(str2.length)); //str ending
    if(endCheck === str2) {
        return true
    }
    return false;
}
//console.log(strEndCheck('heeelo','lo'));

//returnStrNTimes
let repeat = (str,n) => {
    let final = ''
    for(let i = 0; i < n; i++) {
         final += str;
    }
    return final
}
console.log(repeat('fck', 4));
