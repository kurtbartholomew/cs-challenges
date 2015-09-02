/*
  Create a new list with a given value and length.
  
  Example: 0, 5
  Returns [0,0,0,0,0]
  
  Example: 7, 3
  Returns [7,7,7]

*/

(function(CSC){

CSC.iterativeListCreator = function(number, numberOfElements) {
  return Array.apply(null,{length:numberOfElements}).map(function(){
    return number;
  });
};

CSC.recursiveListCreator = function(number, numberOfElements) {
  if(numberOfElements === 0) { return []; }
  return CSC.recursiveListCreator(number,numberOfElements-1).concat(number);
};

})(CSC);