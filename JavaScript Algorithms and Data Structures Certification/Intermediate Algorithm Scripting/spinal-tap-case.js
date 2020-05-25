function spinalCase(str) {
  var arr=[]
  for(let i in str){
    if(arr.length==0)
    arr.push(str[i].toLowerCase())
  else if(str[i]>='A'&& str[i]<='Z' && arr[arr.length-1]!='-')
  {
    arr.push('-');
    arr.push(str[i].toLowerCase());
  }
else if(str[i]>='A'&& str[i]<='Z' && arr[arr.length-1]=='-')
arr.push(str[i].toLowerCase());
  else if(str[i]==' ' ||str[i]=='_')
  arr.push('-');
  else
  arr.push(str[i].toLowerCase());

  }
  return arr.join("")
}

console.log(spinalCase('AllThe-small Things'));
