// your code goes here
function largestOfFour(arr) {
  var index=0;
  var max=0;
  var arr1=[];
  for(var i =0;i<arr.length;i++){
    arr1.push(Math.max.apply(null,arr[i]));

  }
  return arr1;
}



