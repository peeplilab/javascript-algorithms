//list all keys of object

//we check if arg is object
let isObject = (obj) => {
  let type = typeof obj;
  return (type === 'object' || type === 'function' && !!obj)
}
//algo to list objs
let kiss = (obj) => {
  if (!isObject(obj)) return [];
  return (Object.keys(obj));
}
console.log(kiss({
  a: 1,
  b: 2
}));

//alternative examples
function ObjChecker(obj) {
  let type = typeof obj;
  return (type === 'object' || type === 'function' && !!obj)
}

let listKeys = (obj) => {
  let keys = [];
  if (ObjChecker(obj)) {
    for (let i in obj) {
      keys.push(i)
    }
    console.log(keys)
  } else {
    console.log([])
  }
}

listKeys({ a: 2, v: 2 })
