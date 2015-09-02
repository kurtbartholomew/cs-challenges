/*
  Put element pairs in their own list. 
  If you have an odd number of elements, add a zero.

  Example: [2,7,8,3,1,4]
  Returns [[2,7], [8,3], [1,4]]

  Example: [3,6,8,1,5]
  Returns [[3,6],[8,1],[5,0]]

*/

(function(CSC){

CSC.iterativePairSeparate = function(arr) {
  // Not sure how to do this with other higher order functions
  // without making it near unintelligible (reduce turned out messy)
  var result = [];
  arr.forEach(function(element,index,array){
    if(index % 2 !== 0) { result.push([array[index-1],element]); }
    if(array.length % 2 !== 0 && (array.length-1) === index) {
      result.push([element,0]);
    }
  });
  return result;
};

CSC.recursivePairSeparate = function(arr) {
  if(!arr.length) { return arr; }
  return arr.length % 2 === 0 ? 
    CSC.recursivePairSeparate(arr.slice(0,-2)).concat([[arr[arr.length-2],arr[arr.length-1]]]) :
    CSC.recursivePairSeparate(arr.slice(0,-1)).concat([[arr[arr.length-1],0]]);
};

})(CSC);