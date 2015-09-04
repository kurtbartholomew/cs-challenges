/*
  Given a string, replace all the spaces with '%20'.

  Example: 'The woman had a refined palate'
  Returns 'The%20woman%20had%20a%20refined%20palate'
  
*/

(function(CSC){

CSC.stringToURL = function(string) {
  return string.replace(/\s/g,'%20');
};

// Alternate solution not using regex
// CSC.stringToURL = function(string) {
//   var spaceCount = 0;
//   for(var i = 0, max = string.length; i < max; i++) {
//     if(string[i] === ' '){ spaceCount++; }
//   }
//   var newStringLength = max + (spaceCount * 2);
//   var newCharArray = [];
//   for(var j = (max-1); j >= 0; j--) {
//     if(string[j] === ' ') {
//       newCharArray[--newStringLength] = '0';
//       newCharArray[--newStringLength] = '2';
//       newCharArray[--newStringLength] = '%';
//     } else {
//       newCharArray[--newStringLength] = string[j];
//     }
//   }
//   return newCharArray.join('');
// };

})(CSC);