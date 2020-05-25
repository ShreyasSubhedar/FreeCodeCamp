function palindrome(str) {
  str = str.split("");
  for(let i in str){
    if(str[i]==','|| str[i]=='.' || str[i]=='_'||str[i]=='-'||str[i]=='('||str[i]==')')
    str.splice(i,1);
  }
  str = str.join("")
  console.log(str)
  str = str.toLowerCase()
  str = str.split(" ");
  str =str.join("")
  var strrev = str.split("");
  strrev.reverse();
  strrev= strrev.join("");

  console.log(strrev);
  if(strrev==str)
  return true;
  return false;
}


palindrome("0_0 (: /-\ :) 0-0");
