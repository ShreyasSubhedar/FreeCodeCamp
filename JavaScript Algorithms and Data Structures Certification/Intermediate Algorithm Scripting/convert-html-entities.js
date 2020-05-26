  let arr={
      '&': "&amp;",
      "<": "&lt;",
      '"': "&quot;",
      "'": "&apos;",
      ">": "&gt;",

  };
function convertHTML(str) {
var str1=""
for(let i in str){
  if(arr[str[i]]==undefined)
  str1+=str[i];
  else
  str1+=arr[str[i]];
}
  return str1;
}

console.log(convertHTML("Dolce & Gabbana"));
