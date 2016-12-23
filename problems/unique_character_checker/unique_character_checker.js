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

// var uniqueChecker = function(string) {
//   var checker = {};
//   for(var i = 0; i < string.length; i++) {
//     if(checker[string[i]]) {
//       return false;
//     }
//     checker[string[i]] = true;
//   }
//   return true;
// };

// Alternate solution using bit arrays
var uniqueChecker = function(string) {
    var checker = 0;
    var aCharCode = "a".charCodeAt(0);
    for(var i = 0; i < string.length; i++) {
        var shiftValue = string.charCodeAt(i) - aCharCode;
        if(checker !== 0) {
            if((checker & (1 << shiftValue)) > 0) { return false; }
        }
        checker = checker | (1 << shiftValue);
    }
    return true;
};