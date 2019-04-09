let objEqual = (obj1, obj2) => 
  Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key])

  console.log(objEqual({ age: 25, hair: 'long', beard: true }, { age: 25,hair: 'long', beard: true }))