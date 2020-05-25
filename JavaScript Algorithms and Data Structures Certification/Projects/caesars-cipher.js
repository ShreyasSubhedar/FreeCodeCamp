function rot13(str) {
var o="";
for(var i=0;i<str.length;i++){
  if(str[i].charCodeAt(0)>=65 && str[i].charCodeAt(0)<=90){
  var q =str[i].charCodeAt(0)+13;
 if(q>90)
  q = q%90+64;
  console.log(String.fromCharCode(q));
  o+=String.fromCharCode(q);
}
else{
  o+=str[i];
}
}
console.log(o)
  return o;
}

rot13("SERR CVMMN!");
