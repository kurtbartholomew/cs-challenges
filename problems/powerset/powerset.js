/*
  Given a collection of unique characters, provide all subsets
  of this set of characters (all combinations, not permutations).

  Example: []
  Returns null

  Example: ['5','8','3']
  Returns ["5", "58", "8", "53", "583", "83", "3"]
  
*/

var powerSet = function(integerSet){
  var results = [];
  results.push('');
  for(var i = 0,max=integerSet.length; i < max;i++){
    for(var j = 0,max2=results.length; j < max2;j++){
      results.push(results[j]+integerSet[i]);
    }
  }
  return results;
};