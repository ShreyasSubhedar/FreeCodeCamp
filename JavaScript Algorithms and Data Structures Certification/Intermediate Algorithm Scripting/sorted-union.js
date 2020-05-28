function uniteUnique(...arr) {
  var mySet= [];
  for(let i in arr){
    for(let j =0;j<arr[i].length;j++){
          if(mySet.indexOf(arr[i][j])<0)
      mySet.push(arr[i][j]);
    }
  }
  return mySet;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
