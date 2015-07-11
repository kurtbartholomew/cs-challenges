/*
In this kata you have to correctly return who is the "survivor",
ie: the last element of a Josephus permutation (https://en.wikipedia.org/wiki/Josephus_problem).

Basically you have to assume that n people are put into a circle 
and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation,
but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful,
but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow.
You may assume that both n and k will always be >=1.

*/

var josephusSurvivor = function(n, k){
  var survivors = Array.apply(null,{length:n}).map(function(element,index){
    return index+1;
  });
  var counter = 0;
  while(survivors.length > 1) {
    counter += (k-1);
    if(counter > survivors.length) {
      counter = counter % survivors.length;
    }
    survivors.splice(counter,1);
  }
  return survivors[0];
};

// var josephusSurvivor = function(n, k) {
//   var survivors = Array.apply(null,{length:n}).map(function(element,index){
//      return index+1;
//   });
//   var counter = 0;
//   var removeSurvivor = function(survivorArray){
//     if(survivorArray.length === 1) { return survivorArray[0]; }
//     counter += (k-1);
//     if(counter > survivorArray.length) {
//       counter = counter % survivorArray.length;
//     }
//     console.log(survivorArray,counter+1);
//     console.log(survivorArray.splice(counter,1));
//     return removeSurvivor(survivorArray);
//   };

//   return removeSurvivor(survivors);
// };