function quickCheck(arr, elem) {
  // Only change code below this line
var b=false;
arr.indexOf(elem) >= 0 ? b= true:b= false;
return b;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
