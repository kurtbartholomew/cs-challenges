/*
  Given the available currency of 25, 10, 5, and 1 cent pieces,
  create a function that returns the number of ways the sum
  can be reached.

  Example: 62
  Returns 

  Example: 27
  Returns

  Example: 2
  Returns 1

*/

(function(CSC){

CSC.coinSums = function(totalSum){
  if(totalSum === undefined || totalSum.constructor !== Number){
    throw new Error('Pass an integer please');
  }
  if(totalSum === 0 || totalSum < 0) { return 0; }
  var coins = [25,10,5,1];
  cache = {};
  return CSC.coinSumsHelper(coins,totalSum,0,cache);
};

CSC.coinSumsHelper = function(coins,totalSum,index) {
  if(cache[totalSum] !== undefined) { return cache[totalSum]; }
  if(index >= coins.length) { return 1; }
  ways = 0;
  for(var i = 0; i * coins[index] < totalSum; i++){
    ways += CSC.coinSumsHelper(coins,totalSum-(i * coins[index]),index+1,cache);
  }
  cache[totalSum] = ways;
  return ways;
};

})(CSC);