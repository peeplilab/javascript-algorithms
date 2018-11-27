//using slice
let add = (str) => {
    let char = str.slice(0,1);
   
   console.log(char, 'char');
    return char + str + char;
}
console.log(add('hello'));

//using substring
let addFrontAndBack = (str) => {
    let  char = str.substring(0,1);
    return char + str + char;
}
console.log(addFrontAndBack('billa'));
