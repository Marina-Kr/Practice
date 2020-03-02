 function Power (x, n) {
   if (typeof(x) ==='number' && typeof(x) ==='number') {
 if (n>0) {
 return x * Power(x, n-1)
 }
  else return 1;
 }}

  module.exports = Power