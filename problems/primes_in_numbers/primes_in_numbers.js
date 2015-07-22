/*
  Given a positive number n (n > 0) find the prime factor decomposition of n.
  The result will be a string with the following form :

  "(p1**n1)(p2**n2)...(pk**nk)"
  with the p(i) in increasing order and n(i) empty if n(i) is 1.

  Example: n = 86240
  Return "(2**5)(5)(7**2)(11)"
  
*/

var primeFactors = function(n){

  var retrievePrimes = function(number){
    if(number < 2) { return [[number,1]]; }
    var factors = [];
    var currentPrimeCounter;
    for(var i = 2; i <= number; i++){
      currentPrimeCounter = 0;
      while(number % i === 0) {
        number /= i;
        currentPrimeCounter++;
      }
      if(currentPrimeCounter) { factors.push([i,currentPrimeCounter]); }
    }
    return factors;
  };

  var displayPrimes = function(primeArray){
    return "("  + primeArray[0] + 
            (primeArray[1] > 1 ? "**" + primeArray[1] : '') + ")";
  };

  return retrievePrimes(n).map(displayPrimes).join('');

};