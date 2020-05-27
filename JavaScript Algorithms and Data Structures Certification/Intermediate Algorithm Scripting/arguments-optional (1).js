function addTogether(...arr) {
var len = arguments.length;
  var a1 = arguments[0];
  var b1 = arguments[1];
  var isNum = function(arg) { return Number.isFinite(arg); };
  if (len === 1 && isNum(a1)) {
    return function(x) {
      if (isNum(x)) {
        return a1 + x;
      }
    };
  }
  else if (len === 2 && isNum(a1) && isNum(b1)) {
    return a1 + b1;
  }
}

console.log(addTogether(2,3));
