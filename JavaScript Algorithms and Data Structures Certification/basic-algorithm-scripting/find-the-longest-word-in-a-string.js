function findLongestWordLength(str) {
  var splitted = str.split(" ");
  var max=0
  for(var i =0;i<splitted.length;i++){
    if(max<splitted[i].length)
    max=splitted[i].length;
  }
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
