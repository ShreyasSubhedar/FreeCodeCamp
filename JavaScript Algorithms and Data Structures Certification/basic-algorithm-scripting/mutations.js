function mutation(arr) {
  arr[0]= arr[0].toLowerCase();
  arr[1]= arr[1].toLowerCase();
for(var i =0;i<arr[1].length;i++){
   var b=false;
for (var j =0;j<arr[0].length;j++){
  if(arr[1].charAt(i)==arr[0].charAt(j)){
    b=true;
    break;
  }
}
if(b==false)
return false;
}
  

    return true;
}

console.log(mutation(["hello", "hey"]));
