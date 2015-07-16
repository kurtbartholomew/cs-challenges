/*
  Given two potentially different strings, check if the first provided string 
  is one change ( a character is replaced, inserted, or removed) away
  from being the same as the second string. If not, return false.

  Example: "monkey" , "money"
  Returns true

  Example: "monkey" , "mooney"
  Returns false

  Example: "monkey" , "monkey"
  Returns true

*/

// ========= Ugly Brute Force Method  ========= 

// var oneChangeAwayCheck = function(stringToMatch, editedString) {
//   if(Math.abs(stringToMatch.length - editedString.length) > 1) { return false; }
//   if(stringToMatch === editedString) { return true; }

//   for(var i = 0; i < stringToMatch.length; i++) {
//     if(checkForInsertion(stringToMatch,editedString,i) ||
//     checkForDeletion(stringToMatch,editedString,i) ||
//     checkForReplacement(stringToMatch,editedString,i)) {
//       return true;
//     }
//   }

//   return false;
// };

// var checkForInsertion = function(stringToMatch, editedString, index){
//   var stringToMatchArray = stringToMatch.split('');
//   stringToMatchArray.splice(index,0,'');
//   for(var i = 97; i <= 122; i++) {
//     stringToMatchArray[index] = String.fromCharCode(i);
//     if(stringToMatchArray.join('') === editedString) { return true; }
//   }
//   return false;
// };

// var checkForDeletion = function(stringToMatch, editedString, index) {
//   var stringToMatchArray = stringToMatch.split('');
//   stringToMatchArray.splice(index,1);
//   return stringToMatchArray.join('') === editedString;
// };

// var checkForReplacement = function(stringToMatch, editedString, index){
//   var stringToMatchArray = stringToMatch.split('');
//   for(var i = 97; i <= 122; i++) {
//     stringToMatchArray[index] = String.fromCharCode(i);
//     if(stringToMatchArray.join('') === editedString) { return true; }
//   }
//   return false;
// };

// ========= More Declarative Single Pass Method ========= 

// var oneChangeAwayCheck = function(stringToMatch, editedString) {
//   if( Math.abs( stringToMatch.length - editedString.length ) > 1 ) {
//    return false; 
//   }
//   if( stringToMatch === editedString ) { return true; }
//   if( stringToMatch.length === editedString.length ) {
//     return checkForReplacement( stringToMatch, editedString );
//   } else if ( stringToMatch.length > editedString.length ) {
//     return checkForInsertRemoval( stringToMatch, editedString );
//   } else {
//     return checkForInsertRemoval( editedString, stringToMatch );
//   }
// };

// var checkForReplacement = function( string1, string2 ) {
//   var differenceCounter = 0;
//   for(var i = 0; i < string1.length; i++) {
//     if(string1[i] !== string2[i]) {
//       differenceCounter++;
//       if(differenceCounter > 1) { return false; }
//     }
//   }
// };

// var checkForInsertRemoval = function( string1, string2 ) {
//   var indexCounter1 = 0;
//   var indexCounter2 = 0;

//   while(indexCounter1 < string1.length && indexCounter2 < string2.length) {
//     if(string1[indexCounter1] !== string2[indexCounter2]) {
//       if(indexCounter1 !== indexCounter2) {
//         return false;
//       } else {
//         indexCounter1++;
//       }
//     } else {
//       indexCounter1++;
//       indexCounter2++;
//     }
//   }
//   return true;
// };

// ========= Combined Single Pass Method ========= 

var oneChangeAwayCheck = function(stringToMatch, editedString) {
  if( Math.abs( stringToMatch.length - editedString.length ) > 1 ) {
    return false; 
  }

  var largerString = stringToMatch.length >= editedString.length ?
                     stringToMatch : editedString;
  var smallerString = stringToMatch.length >= editedString.length ?
                      editedString : stringToMatch;

  var indexCounter1 = 0;
  var indexCounter2 = 0;
  var differenceCounter = 0;

  while(indexCounter1 < largerString.length && indexCounter2 < smallerString.length) {
    if(smallerString[indexCounter2] !== largerString[indexCounter1]) {
      if( differenceCounter > 1 ) {
        return false;
      }
      differenceCounter++;

      if(smallerString.length < largerString.length) {
        indexCounter1++;
      }
    } else {
      indexCounter1++;
      indexCounter2++;
    }
  }
  return true;
};