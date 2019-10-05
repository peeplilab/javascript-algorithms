let signOfProduct = (x, y, z) => {
  if (x > 0 && y > 0 && z > 0) { //check any negative
    console.log('+')
  } else if (x < 0 && y < 0 && z > 0) {  //check for two negatives. here the negtives are x and y
    console.log('+')
  } else if (x > 0 && y < 0 && z < 0) { //check for two negatives. here the negtives are y and z
    console.log('+')
  } else if (x < 0 && y > 0 && z < 0) {  //check for two negatives. here the negtives are x and z
    console.log('+')
  }
  else {
    console.log('-')
  }
}

signOfProduct(-2, -2, 3)
