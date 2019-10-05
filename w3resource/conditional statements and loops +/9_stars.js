var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + ("*");
  }
  console.log(chr);
  chr = '';
}

let x, y, chr;
for( x = 1; x <= 6; x++) {
  console.log('first')
  for( y = 1; y < x ; y++) {
    console.log('second');
    
    cht += ("*")
  }
  console.log(chr);
  chr = '';
}