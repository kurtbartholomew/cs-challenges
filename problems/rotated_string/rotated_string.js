/*
  Given a two strings, check if the second is a rotated version
  of the first.

  Example: 'anthropomorphic', 'phicanthropomor'
  Returns true

  Example: 'geriatric', 'cirtaireg'
  Returns false

*/

var rotatedStringLocator = function(string1,string2){
  if(string1.length !== string2.length) { return false; }
  if((string1 + string1).indexOf(string2) > -1) { return true; }
  return false;
};
