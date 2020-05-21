function reverseString(str) {
  var str1="";
  for(var i =str.length-1;i>=0;i--){
    str1+=(str[i]);
  }
  return str1;

}

reverseString("hello");
