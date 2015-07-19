/*
  Given a string, compress the string to replace
  instances of a repeated character past one with
  the count of the concurrent instances of the string

  Example: bbbbaaaannnnaaaannnnaaa
  Returns b4a4n4a4n4a3

*/

var stringCompress = function(string) {
  if(!string || !string.length || string.constructor !== String) {
    return null;
  }
  var compressedString = '';
  var charCount = 0;

  for(var i = 0; i < string.length; i++) {
    charCount++;

    if((i+1) >= string.length || string[i] != string[i+1]) {
      compressedString += (string[i] + charCount);
      charCount = 0;
    }
  }

  return compressedString.length < string.length ? compressedString : string;
};