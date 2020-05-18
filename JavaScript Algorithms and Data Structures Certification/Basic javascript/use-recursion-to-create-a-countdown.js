// Only change code below this line
var op=[];
function countdown(n){
  if(n>0){
  op.push(n);
  countdown(n-1);
  }
  return op;
}
// Only change code above this line
