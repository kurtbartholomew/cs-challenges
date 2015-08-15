/*
  Given an integer n, generate a list of primes from 2 to n.

  Example: 67
  Returns: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]

  Example: 1
  Returns null

*/

// ---------------------- Naive Solution ---------------------

// var listOfPrimes = function(integer){
//   if(!integer || integer < 2){ return null; } 
//   var results = [];
//   var isPrime = true;

//   for(var i = 2; i <= integer; i++){
//     for(var j = 2; j < i; j++){
//       if(i % j === 0){
//         isPrime = false;
//         break;
//       }
//     }
//     if(isPrime){
//       results.push(i);
//     }
//     isPrime = true;
//   }
//   return results;
// };

// ---------------------- Less Naive Solution ----------------

// var listOfPrimes = function(integer){
//   if(!integer || integer < 2){ return null; } 
//   var results = [];
//   var isPrime = true;

//   for(var i = 2; i <= integer; i++){
//     var sqrt = Number(Math.sqrt(i));
//     for(var j = 2; j <= sqrt; j++){
//       if(i % j === 0){
//         isPrime = false;
//         break;
//       }
//     }
//     if(isPrime){
//       results.push(i);
//     }
//     isPrime = true;
//   }
//   return results;
// };

// ---------------- Sieve of Eratosthenes ----------------

var removePrimes = function(primesArray, currentPrime) {
  for(var i = currentPrime*currentPrime; i < primesArray.length; i += currentPrime) {
    primesArray[i] = false;
  }
};

var findNextPrime = function(primesArray, currentPrime){
  var nextPrime = currentPrime+1;
  while(nextPrime < primesArray.length && !primesArray[nextPrime]){
    nextPrime++;
  }
  return nextPrime;
};

var listOfPrimes = function(n){
  if(!n || n < 2){ return null; } 
  var results = Array.apply(null, Array(n+1)).map(function(){return true;});
  results[0] = false;
  results[1] = false;
  var prime = 2;
  while (prime <= Math.sqrt(n)) {
    removePrimes(results,prime);
    prime = findNextPrime(results,prime);
  }
  return results.reduce(function(primes,currentPrime,index){
    if(currentPrime){
      primes.push(index);
    }
    return primes;
  },[]);
};

