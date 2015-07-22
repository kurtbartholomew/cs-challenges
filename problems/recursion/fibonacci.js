/*
  Given an integer n, calculate the nth number in a fibonacci sequence

  Example: 5
  Returns 

  Example: 1
  Returns 1

*/

var fibonacci = function(number) {

  var fibonacciMemoize = function(num, memoArray){
    if(num === 0 ||num === 1) { return num; }

    if(memoArray[num] === undefined){
      memoArray[num] = (fibonacciMemoize(num-1, memoArray) +
                        fibonacciMemoize(num-2,memoArray));    
    }
    return memoArray[num];
  };

  return fibonacciMemoize(number,[]);
};

// ======== Alternate Recursive Implementation ( O(2^n) ) =========

// var fibonacci = function(number) {
//   if(number === 0 ||number === 1) { return number; }
//   return (fibonacci(number-1) + fibonacci(number-2));
// };

// ======== Alternate Dynamic Programming Implementation ( O(n) ) =========

// var fibonacci = function(number) {
//   if(number === 0 || number === 1) { return number; }
//   var memoizeArray = [];
//   memoizeArray[0] = 0;
//   memoizeArray[1] = 1;

//   for(var i = 2; i <= number; i++) {
//     memoizeArray[i] = memoizeArray[i-1] + memoizeArray[i-2];
//   }
//   return memoizeArray[number];
// };

// ======== Alternate Dynamic Programming Implementation ===========
 
// var fibonacci = function(number) {
//   if(number === 0) { return number; }
//   var a = 0;
//   var b = 1;
//   var c;
//   for(var i = 2; i < number; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return a + b;
// }