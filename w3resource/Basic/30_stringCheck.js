let stringCheck = (str) => {
  if(str.slice(5,-1) === 'script') {
    return str.slice(0,5)
  } else {
    return str
  }
}