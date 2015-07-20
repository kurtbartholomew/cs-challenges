/*
  Given an potentially unbalanced matrix ( m x n ), if a zero exists,
  replace every value in its row and column with zeroes.

  Example: [[5,3,8],
            [2,7,1],
            [0,9,4]]
  Returns  [[0,3,8],
            [0,7,1],
            [0,0,0]]
*/



var matrixBomberman = function(matrix) {
  var zeroArr = [];

  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix.length; j++){
      if(matrix[i][j] === 0) {
        zeroArr.push([i,j]);
      }
    }
  }

  zeroArr.forEach(function(element){
    for(var k = 0; k < matrix.length; k++){
      matrix[k][element[1]] = 0;
    }

    for(var l = 0; l < matrix[0].length; l++){
      matrix[element[0]][l] = 0;
    }
  });
  return matrix;
};

// ===== Alternate Implementation ( O(1) Space Complexity) =====

// var matrixBomberman = function(matrix) {

//   var columnZeroed = false;
//   var rowZeroed = false;

//   // find if the outermost column has a zero
//   for(var row = 0; row < matrix.length; row++){
//     if(matrix[row][0] === 0){
//       columnZeroed = true;
//       break;
//     }  
//   }

//   // find if the outermost row has a zero
//   for(var col = 0; col < matrix[0].length; col++){
//     if(matrix[0][col] === 0){
//       rowZeroed = true;
//       break;
//     }
//   }

//   // Add zeroes to the outermost row and column
//   // to tell which rows and columns must be zeroed
//   for(var i = 1; i < matrix.length; i++){
//     for(var j = 1; j < matrix[0].length; j++){
//       if(matrix[i][j] === 0) {
//         matrix[i][0] = 0;
//         matrix[0][j] = 0;
//       }
//     }
//   }

//   // Zero out rows
//   for(var k = 1; k < matrix.length; k++){
//     if(matrix[k][0] === 0) {
//       for(var a = 0; a < matrix[0].length; a++) {
//         matrix[k][a] = 0;
//       }
//     }
//   }

//   // Zero out columns
//   for(var l = 1; l < matrix[0].length; l++){
//     if(matrix[0][l] === 0) {
//       for(var b = 0; b < matrix.length; b++) {
//         matrix[b][l] = 0;
//       }
//     }
//   }

//   if(rowZeroed){
//     matrix[0].forEach(function(element){ element = 0; });
//   }
//   if(columnZeroed){
//     matrix.forEach(function(element){ element[0] = 0; });
//   }
//   console.log(matrix);
//   return matrix;
// };
