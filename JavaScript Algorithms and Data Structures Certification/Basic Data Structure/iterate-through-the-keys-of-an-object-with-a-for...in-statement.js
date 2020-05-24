function countOnline(usersObj) {
  // Only change code below this line
  var count=0;
for(var i in usersObj){
if (usersObj[i].online==true)
count++;
}
return count;
  // Only change code above this line
}

var o={
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};
countOnline(o);