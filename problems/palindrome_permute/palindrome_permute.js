/*
  Given a random string, create a function that checks if a
  palindrome can be created by rearranging the characters in the
  string. The words do not necessarily have to make sense.

  Example: "ceararc"
  Returns true
  (Palindrome is racecar)

  Example: "helicop"
  Returns false

  Constraints: Do not permute every permutation

*/

var palindromicPermuter = function(string) {

  var stringContents = {};
  var currentLetter = '';

  for(var i = 0, max = string.length; i < max; i++ ) {
    currentLetter = string[i];
    if(stringContents[currentLetter]) { stringContents[currentLetter]++; }
    else { stringContents[currentLetter] = 1; }
  }

  var oddCountLetters = 0;
  for(var letter in stringContents){
    if(stringContents[letter] % 2 !== 0) {
      oddCountLetters++;
    }
    if(oddCountLetters > 1) { return false; }
  }

  return true;
};

// Alternate solution using a bit array (a single int)
// var palindromicPermuter = function(string) {
//   var bitStringContents = 0;
//   var charVal = 0;

//   for(var i = 0, max = string.length; i < max; i++ ) {
//     charVal = string.charCodeAt(i) - 96;
//     bitStringContents ^= (1 << charVal);
//   }

//   return ((bitStringContents - 1) & bitStringContents) === 0;
// };