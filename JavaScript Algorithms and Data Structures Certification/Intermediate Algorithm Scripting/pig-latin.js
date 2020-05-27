function translatePigLatin(str) {
  if(str.match(/^[^aeiou]+/)!=null)
  str=str.slice(str.match(/^[^aeiou]+/)[0].length)+str.match(/^[^aeiou]+/)[0]+"ay";
  else
  str=str+"way";
  return str;
}

console.log(translatePigLatin("eight"));
