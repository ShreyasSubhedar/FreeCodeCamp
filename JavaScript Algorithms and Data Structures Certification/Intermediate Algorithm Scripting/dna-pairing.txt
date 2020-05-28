function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
 
  var paired = [];
    for(let i in str){
      if(str[i]=='A')
      paired.push(["A","T"]);
    else if(str[i]=='T')
      paired.push(["T","A"]);
      if(str[i]=='C')
      paired.push(["C","G"]);
    else if(str[i]=='G')
      paired.push(["G","C"]);

}
return paired;
}
pairElement("GCG");
