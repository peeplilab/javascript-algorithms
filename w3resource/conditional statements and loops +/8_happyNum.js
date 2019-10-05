function happy_number(num) {
  var m, n;
  var c = [];

  while (num != 1 && c[num] !== true) {
    c[num] = true;
    m = 0;
    while (num > 0) {
      n = num % 10;
      m += n * n;
      num = (num - n) / 10;
    }
    num = m;
  }
  return (num == 1);
}

var cnt = 5;
var num = 1;
var f5 = '';
while (cnt-- > 0) {
  while (!happy_number(num))
    num++;
  f5 = f5 + (num + ", ");

  num++;
}
console.log('First 5 happy numbers are : ' + f5);
//7
//49
//16 + 81 = 97
//81 + 49 = 130
// 1 + 9 + 0 = 10
//1 + 0 = 1

let hapNum = (num) => {
  let m, n, c = [];

  while(num != 1 && c[num] !== true) {
    c[num] = true;
    m = 0;
    while (num > 0) {
      n = num % 10;
      m += n * n;
    }
  }
}