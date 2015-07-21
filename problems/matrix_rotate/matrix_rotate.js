/*
  Given a square matrix ( m x m ), rotate its values 90 degrees clockwise

  Example: [[1,  2,  3,  4 ],
            [5,  6,  7,  8 ],
            [9,  10, 11, 12],
            [13, 14, 15, 16]]
  Returns: [[13, 9,  5,  1],
            [14, 10, 6,  2],
            [15, 11, 7,  3],
            [16, 12, 8,  4]]

  Constraints:
    Do not create another array.

*/

var matrixRotate = function(matrix) {
  var numberOfLayers = matrix.length / 2;
  var temp = 0;
  var arrLength = matrix.length-1;
  var end;

  for(var layer = 0; layer < numberOfLayers; layer++) {
    end = arrLength - layer;
    for(var j = layer; j < end; j++) {
      temp = matrix[layer][j];

      // Left to Top
      matrix[layer][j] = matrix[arrLength-j][layer];
      // Bottom to Left
      matrix[arrLength-j][layer] = matrix[end][arrLength-j];
      // Right to Bottom
      matrix[end][arrLength-j] = matrix[j][end];
      // Top to Right
      matrix[j][end] = temp;
    }
  }
  return matrix;
};