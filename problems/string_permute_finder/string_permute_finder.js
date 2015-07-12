/*
  Supplied with two strings, find if second string is
  a permutation of the first string.

  Constraints:
  Whitespace is significant
  Capital letters are considered different letters

  Example: 'supreme' and 'presume'
  Returns true

  Example: 'macguffin' and 'macmuffin'
  Returns false

  Example: 'taco' and '   coat     '
  Returns false

  Example: 'grandiose' and 'Organised'
  Returns false

*/

var stringPermuteFinder = function(string1, string2) {
  if(string1.length !== string2.length) { return false; }
  var charHash1 = {};
  var charHash2 = {};
  for(var i = 0, max = string1.length; i < max; i++) {
    if(charHash1[string1[i]] === undefined) {
      charHash1[string1[i]] = 1;
    } else {
      charHash1[string1[i]]++;
    }
    if(charHash2[string2[i]] === undefined) {
      charHash2[string2[i]] = 1;
    } else {
      charHash2[string1[i]]++;
    }
  }
  for(var character in charHash1) {
    if(charHash1[character] !== charHash2[character]){
      return false;
    }
  }
  return true;
};

// Alternate solution avoiding the third loop
// var stringPermuteFinder = function(string1, string2) {
//   if(string1.length !== string2.length) { return false; }
//   var charHash = {};
//   for(var i = 0, max = string1.length; i < max; i++) {
//     if(charHash[string1[i]] === undefined) {
//       charHash[string1[i]] = 1;
//     } else {
//       charHash[string1[i]]++;
//     }
//   }
//   for(var s = 0, maxi = string2.length; s < maxi; s++) {
//     if(charHash[string2[s]] === undefined) { return false; }
//     charHash[string2[s]]--;
//     if(charHash[string2[s]] < 0) { return false; }
//   }
//   return true;
// };