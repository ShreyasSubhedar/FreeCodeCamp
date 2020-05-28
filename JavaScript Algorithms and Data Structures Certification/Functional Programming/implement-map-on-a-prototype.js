// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
  // for(let i in s){
  //   if(callback(s[i]))
  //   newArray.push(callback(s[i]));
  // }
  // Only change code above this line
  // return newArray;
   this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};
  
var new_s = s.myMap(function(item){
  return item * 2;
});
