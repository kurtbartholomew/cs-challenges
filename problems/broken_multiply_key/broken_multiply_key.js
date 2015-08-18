/*
  Your (*) key doesn't work anymore! Use subtraction, addition and
  bit shifting recursively to deliver the product of two given integers.

  Example: 2,2
  Returns 4

  Example: 43 * 62
  Returns 2604

*/

// ---------------- Naive implementation --------------------

// var brokenMultiply = function(integer1,integer2){
//   if(arguments.length !== 2 ||
//      integer1.constructor !== Number ||
//      integer1.constructor !== Number){ throw new Error('Incorrect parameters'); }
  
//   var smaller = integer1 < integer2 ? integer1 : integer2;
//   var bigger = integer1 < integer2 ? integer2 : integer1;
//   return findMultiply(smaller,bigger);
// };

// var findMultiply = function(smaller, bigger){
//   if(smaller === 0){ return 0; }
//   return findMultiply(smaller-1,bigger)+bigger;
// };

// ----------------- Naive Implementation (Dividing in half) -----------------

// var brokenMultiply = function(integer1,integer2){
//   if(arguments.length !== 2 ||
//      integer1.constructor !== Number ||
//      integer1.constructor !== Number){ throw new Error('Incorrect parameters'); }
  
//   var smaller = integer1 < integer2 ? integer1 : integer2;
//   var bigger = integer1 < integer2 ? integer2 : integer1;
//   return findMultiply(smaller,bigger);
// };

// var findMultiply = function(smaller, bigger){
//   if(smaller === 0){ return 0; }
//   if(smaller === 1){ return bigger; }
  
//   var half = smaller >> 1;
//   var firstHalf = brokenMultiply(half,bigger);
//   var secondHalf = firstHalf;
//   if(smaller % 2 === 1) {
//     secondHalf = findMultiply(smaller - half,bigger);
//   }
//   return firstHalf + secondHalf;
// };

// --------------------------- Cache Implementation ---------------------

// var brokenMultiply = function(integer1,integer2){
//   if(arguments.length !== 2 ||
//      integer1.constructor !== Number ||
//      integer1.constructor !== Number){ throw new Error('Incorrect parameters'); }
  
//   var smaller = integer1 < integer2 ? integer1 : integer2;
//   var bigger = integer1 < integer2 ? integer2 : integer1;
//   var cache = [];
//   return findMultiply(smaller,bigger,cache);
// };

// var findMultiply = function(smaller, bigger,cache){
//   if(smaller === 0){ return 0; }
//   if(cache[smaller] !== undefined) { return cache[smaller]; }
//   if(smaller === 1){ return bigger; }
  
//   var half = smaller >> 1;
//   var firstHalf = findMultiply(half,bigger,cache);
//   var secondHalf = firstHalf;
//   if(smaller % 2 === 1) {
//     secondHalf = findMultiply(smaller - half,bigger,cache);
//   }
//   cache[smaller] = firstHalf + secondHalf;
//   return cache[smaller];
// };

// --------------------- No Cache Split (Deals with odds better) --------------

var brokenMultiply = function(integer1,integer2){
  if(arguments.length !== 2 ||
     integer1.constructor !== Number ||
     integer1.constructor !== Number){ throw new Error('Incorrect parameters'); }
  
  var smaller = integer1 < integer2 ? integer1 : integer2;
  var bigger = integer1 < integer2 ? integer2 : integer1;
  return findMultiply(smaller,bigger);
};

var findMultiply = function(smaller, bigger){
  if(smaller === 0){ return 0; }
  if(smaller === 1){ return bigger; }
  
  var half = smaller >> 1;
  var firstHalf = findMultiply(half,bigger);
  var secondHalf = firstHalf;
  if(smaller % 2 === 1) {
    return firstHalf + secondHalf + bigger;
  }
  return firstHalf + secondHalf;
};