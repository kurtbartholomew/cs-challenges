/*
  Given a monthly allotment of n hamburgers, you can potentially 
  consume a hamburger at breakfast, lunch, and dinner each day.
  You must, however, consume n hamburgers each month to
  continue getting the allotment in further months.

  Create an algorithm to find all possible meal plans to
  consume exactly n hamburgers.

  Example: 72 hamburgers
  Returns 

  Example: 15 hamburgers
  Returns 

*/

// --------------- Memoization Solution ----------------------

var memoHelper = function(numberOfHamburgers,memoizeArray){
  if(numberOfHamburgers < 0) { return 0; }
  if(numberOfHamburgers === 0) { return 1; }
  if(memoizeArray[numberOfHamburgers] === undefined) {
    memoizeArray[numberOfHamburgers] = memoHelper(numberOfHamburgers-1,memoizeArray) +
    memoHelper(numberOfHamburgers-2,memoizeArray) + memoHelper(numberOfHamburgers-3,memoizeArray);
  } else {
    return memoizeArray[numberOfHamburgers];
  }
};

var mealPlanner = function(numberOfHamburgers){
  return memoHelper(numberOfHamburgers,[]);
};

// ---------------- Naive Recursive Solution ------------------------

var mealPlanner = function(numberOfHamburgers){
  if(numberOfHamburgers < 0) { return 0; }
  if(numberOfHamburgers === 0) { return 1; }

  return mealPlanner(numberOfHamburgers-1) + mealPlanner(numberOfHamburgers-2) +
         mealPlanner(numberOfHamburgers-2);
};