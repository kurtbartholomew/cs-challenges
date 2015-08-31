/*
  Create a range list counting from a start to an end. Excluding the end.
  
  Example: 2,5
  Returns [2,3,4]
  
  Example: 8,1
  Returns [8,7,6,5,4,3,2]
  
  Example: 3,3
  Returns []

*/

(function(CSC){

CSC.iterativeCountingList = function(start, exclusiveEnd) {
  return Array.apply(null,{length:(Math.abs(exclusiveEnd-start))}).map(function(_element,index){
    return exclusiveEnd-start > 0 ? start+index : start-index;
  });
};

CSC.recursiveCountingList = function(start, exclusiveEnd) {
  if(start === exclusiveEnd) { return []; }
  return exclusiveEnd-start > 0 ?
    recursiveCountingList(start, exclusiveEnd-1).concat(exclusiveEnd-1) :
    recursiveCountingList(start, exclusiveEnd+1).concat(exclusiveEnd+1);
};

})(CSC);