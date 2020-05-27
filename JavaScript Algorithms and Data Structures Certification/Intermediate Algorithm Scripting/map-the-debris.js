function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(let i in arr){
    var avgAlt=arr[i]['avgAlt'];
    var preMain=earthRadius+avgAlt;
    var mai= (Math.pow(preMain,3)/(GM)); 
    var orbPer = (2*3.141593)*(Math.sqrt(mai));
    delete arr[i]['avgAlt'];
     arr[i]['orbitalPeriod']=Math.round(orbPer);
  }
  return arr;
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))