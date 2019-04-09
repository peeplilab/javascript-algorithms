//Write a JavaScript program to get the length of an JavaScript object.
let objSize = (obj) => {
    let size = 0;
    for (let key in obj) {
        if(obj.hasOwnProperty(key) ) size++;
    }
    return size;
}
let person = {
    name:'aki',
    age:22
}
console.log(objSize(person))