var op=[];
function rangeOfNumbers(startNum, endNum) {
  if(startNum!=endNum+1){
  op.push(startNum);
  rangeOfNumbers(startNum+1, endNum);
  }
  return op;
};
