function titleCase(str) {
  str=str.split(" ");
  let str1=[]
  for(let i in str){
    str[i]=str[i].toLowerCase()
  str1.push(str[i].charAt(0).toUpperCase()+str[i].slice(1,str[i].length));
  }
  return str1.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));
