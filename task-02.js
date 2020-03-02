function countNumbers(n) {
  let orig = n
  let c = ''
  let d = ''
  if (n>0) {c='положительное число'}
 else {c='отрицательное число'}
   for(var i = 0; Math.abs(n) > 1; i++) {
         if (i>2) { 
         return "Ошибка"
       ; break;}   
          n /= 10;
   }
   switch(i) {
   case(1): d = "однозначное";
  break;
   case(2): d = "двузначное";
  break;
   case(3): d = "трехзначное";
  break;
   }
  return (orig +" - "+ d + " "+c )
}

  module.exports = countNumbers