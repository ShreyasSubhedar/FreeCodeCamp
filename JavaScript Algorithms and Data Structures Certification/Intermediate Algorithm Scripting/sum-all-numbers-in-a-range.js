function sumAll(arr) {
  var a ,b;
  (arr[0]>arr[1])?(a=arr[1],b=arr[0]):(b=arr[1],a=arr[0]);
  console.log(a);
  return (((b*(b+1))/2)-(((a-1)*(a))/2));
}
console.log(sumAll([10,5]));
