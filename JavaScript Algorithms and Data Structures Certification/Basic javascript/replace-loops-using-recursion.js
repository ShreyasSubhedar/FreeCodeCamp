function sum(arr, n) {
  // Only change code below this line
if(n!=0){
  return arr[n-1]+sum(arr,n-1);
}
else
return 0;
  // Only change code above this line
}
