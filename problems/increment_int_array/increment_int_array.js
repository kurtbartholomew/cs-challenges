/*
  Given an integer array, increment the final integer of the array
  and reflect that throughout the array.

  Example: [1,2,3,4]
  Returns [1,2,3,4,5]

  Example: [2,0,9,0,9]
  Returns [2,0,9,1,0]

  Example: [9,9,9,9,9]
  Returns [1,0,0,0,0,0]
 */

var integerArrayIncrement = function(intArray){
  for(var i = intArray.length; i >= 0; i--){
    if(i === (intArray.length-1)) {
      intArray[i]++;
    }
    if(intArray[i] > 9) {
      intArray[i] = 0;
      if(intArray[i-1] !== undefined){
        intArray[i-1]++;
      } else {
        intArray.unshift(1);
      }
    }
  }
  return intArray;
};
