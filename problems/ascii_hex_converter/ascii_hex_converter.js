/*
  Write a module Converter that can take ASCII text and convert it to hexadecimal. The class should also be able to take hexadecimal and convert it to ASCII text.

  Example :
  Converter.toHex("Look mom, no hands")
  Returns "4c6f6f6b206d6f6d2c206e6f2068616e6473"

  Example :
  Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
  Returns "Look mom, no hands"

*/
(function(CSC){

CSC.Converter = function(){ };

CSC.Converter.toAscii = function ( hex ) {
  return hex.replace(/../g, function(h) {
    return String.fromCharCode(parseInt(h,16));
  });
};
CSC.Converter.toHex = function ( ascii ) {
  return ascii.replace(/./g, function(a) {
    return a.charCodeAt().toString(16);
  });
};

})(CSC);