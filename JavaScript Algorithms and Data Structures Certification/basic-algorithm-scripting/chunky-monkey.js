function chunkArrayInGroups(arr, size) {
  let newArr=[];
var i =0,j=size;
  while(j<arr.length){
    
    newArr.push(arr.slice(i,j));
    i=j;
    j=j+size;
  }
  if(j>arr.length)
    j=arr.length;
  newArr.push(arr.slice(i,j));
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
