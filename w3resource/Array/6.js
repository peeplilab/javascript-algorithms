
var num = 3232323;
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(''));
