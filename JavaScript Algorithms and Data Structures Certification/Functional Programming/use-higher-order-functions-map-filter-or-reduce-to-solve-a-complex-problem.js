const squareList = (arr) => {
  // Only change code below this line
  arr=arr.filter(a=>(a==parseInt(a) && a>0)).map(a=>(a*a));
  console.log(arr)
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
