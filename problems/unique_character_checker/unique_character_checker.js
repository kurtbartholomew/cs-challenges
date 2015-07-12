/*
  Design a solution to find if a string has all unique characters.

  Example: 'nodachi'
  Returns true

  Example: 'flamberge'
  Returns false

  Constraints:
  All characters are ASCII.
  There are only 128 unique characters in ASCII.
  
*/

var uniqueChecker = function(string) {
  if(string.length > 128) { return false; }

  var wordHash = {};
  for(var i = 0,max=string.length;i < max;i++) {
    if(wordHash[string[i]] !== undefined){ return false; }
    else {
      wordHash[string[i]] = true;
    }
  }
  return true;
};

// Alternate solution using a single integer as a bit array
// This only works for lowercase characters unless using 64 bit integers
// var uniqueChecker = function(string) {
//   if(string.length > 128) { return false; }

//   var trackingInt = 0;
//   var charVal = 0;

//   for(var i = 0,max=string.length;i < max;i++) {
//     charVal = string.charCodeAt(i) - 96;
//     // if trackingInt and bitshifted value are compared using a bitwise and
//     // any value returned larger than 0 means they share bits in the same spot
//     if((trackingInt & ( 1 << charVal)) > 0) { return false; }
//     trackingInt |= (1 << charVal);
//   }
//   return true;
// };