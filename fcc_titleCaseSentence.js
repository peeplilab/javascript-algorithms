let title = (str) => {
    let newStr = [];
    let words = str.split(' ')
    for(let i = 0 ; i < words.length; i++) {
      newStr.push( words[i].slice(0).toUpperCase() + words[i].slice(1,-1).toLowerCase())
    }
    return newStr.join(' ')
}
console.log(title('hell howw rreeer reere'));
