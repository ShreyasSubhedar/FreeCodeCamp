function diffArray(arr1, arr2) {
  for(let i =0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i])<0)
      arr2.push(arr1[i]);
      else
      arr2.splice(arr2.indexOf(arr1[i]),1);    

  }
  return arr2;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
