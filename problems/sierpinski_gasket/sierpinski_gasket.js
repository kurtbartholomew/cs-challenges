/*
Write a function that takes an integer n and returns the nth iteration of the fractal known as Sierpinski's Gasket.

Here are the first few iterations. The fractal is composed entirely of L and white-space characters;
each character has one space between it and the next (or a newline).

0

L

1

L
L L

2

L
L L
L   L
L L L L

3

L
L L
L   L
L L L L
L       L
L L     L L
L   L   L   L
L L L L L L L L

*/

function sierpinski(n) {
  var m = Math.pow(2,n), s = ['L'];
  
  for (var i = 1; i < m; i++){
    s.push('L');
    for (var j = 2, l = i * 2; j < l; j +=2 ){
      s[i] += ' ' + (s[i-1][j]===s[i-1][j-2]? ' ': 'L');
    }
    s[i] += ' L';
  }
  
  return s.join('\n');
}