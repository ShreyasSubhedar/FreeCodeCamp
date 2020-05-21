function confirmEnding(str, target) {
  var i=str.length-1;
  for(var j =target.length-1;j>=0;j--,i--)
  if(target[j]!=str[i])
  return false;
  return true;
}

confirmEnding("Bastian", "n");
