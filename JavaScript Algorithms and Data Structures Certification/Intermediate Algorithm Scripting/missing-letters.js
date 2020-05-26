function fearNotLetter(str) {
  var prefixArr=[]
  for(let i in str)
    prefixArr[str[i].charCodeAt()-97]=1;

  for (let i=str[0].charCodeAt()-97;i<26;i++)
    if(prefixArr[i]==null)
    return String.fromCharCode(i+97);
}

console.log(fearNotLetter("abce"));
