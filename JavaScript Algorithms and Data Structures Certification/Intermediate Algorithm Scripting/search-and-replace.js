function myReplace(str, before, after) {
  if(before[0].toUpperCase()==before[0]){
    after=after.split("");
    after[0]=after[0].toUpperCase();
    after=after.join("");
  }
  str=str.split(" ")
  str[str.indexOf(before)]=after;
  str =str.join(" ");
  return str;
}

myReplace("His name is Tom", "Tom", "john");
