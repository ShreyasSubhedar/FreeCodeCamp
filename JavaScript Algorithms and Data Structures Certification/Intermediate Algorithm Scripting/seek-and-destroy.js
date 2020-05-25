function destroyer(arr,...arr1) {
  var qw = arr1;
  console.log(qw);
  for(var j =0;j<5;j++){
  for (var i=0;i<arr.length;i++){
    if(qw.indexOf(arr[i])>=0){
      arr.splice(arr.indexOf(arr[i]),1);
    }
  }
  }
  return arr;
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
