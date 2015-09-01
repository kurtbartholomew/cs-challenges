/*
  Count the occurences of an element inside a list.
  Example: [2,7,4,4,1,4] for 4
  Returns 3

*/

(function(CSC){

CSC.iterativeTimes = function(arr, element) {
  return arr.reduce(function(count,currentElement){
    return element === currentElement ? count + 1 : count;
  },0);
};

CSC.recursiveTimes = function(arr,element) {
  if(!arr.length) { return 0; }
  return arr[0] === element ? recursiveTimes(arr.slice(1),element)+1 : recursiveTimes(arr.slice(1),element);
};

})(CSC);