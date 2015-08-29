(function(){
  'use strict';

  var root = this;

  var CSC = {};

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = CSC;
    }
    exports.CSC = CSC;
  } else {
    root.CSC = CSC;
  }


}).call(this);