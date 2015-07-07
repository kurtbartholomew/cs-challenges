/*
  Write a function that calculates the least common multiple of its arguments. 
  Each argument is assumed to be a non-negative integer.

  Example: leastCommonMultiple(2,3,4)
  Returns 12

*/

var greatestCommonDivisor = function(a,b) {
  var temp;
  while (b !== 0) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

var leastCommonMultiple = function(a,b) {
  return (a * b / greatestCommonDivisor(a,b));
};

var leastCommonMultiples = function(){
  var args = Array.prototype.slice.call(arguments);

  return args.reduce(leastCommonMultiple);
};