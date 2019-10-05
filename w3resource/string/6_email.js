let emailHider = (email) => {
  let emailArr = email.split('@');
  let firstPart = emailArr[0];
  let hide = firstPart.length / 2
  let first = firstPart.substring(0, (firstPart.length - hide))
  let last = emailArr[1]
  return first + '...' + last
}

console.log(emailHider('axcck@gmail.com'));
