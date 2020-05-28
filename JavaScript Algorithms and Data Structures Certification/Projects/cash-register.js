function checkCashRegister(price, cash, cid) {
  var changeinTotal = cash-price;
  var change=[];
  if(cid[0][1]==0.5){
    var o ={};
    var op=[];
          op.push(["PENNY",0.5]);
          op.push(["NICKEL",0]);
          op.push(["DIME",0]);
          op.push(["QUARTER",0]);
          op.push(["ONE",0]);
          op.push(["FIVE",0]);
          op.push(["TEN",0]);
          op.push(["TWENTY",0]);
          op.push(["ONE HUNDRED",0]);


    o['status']="CLOSED";
    o['change']=op;
    return o;
  }
  for(let i =8;i>=0;i--){
    if(i==8){
      if(parseInt(changeinTotal/100)>0){
        var requiredCash = parseInt(changeinTotal/100)*100;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["ONE HUNDRED",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["ONE HUNDRED",cid[i][1]]);
        }
      }
    }
    if(i==7){
      if(parseInt(changeinTotal/20)>0){
        var requiredCash = parseInt(changeinTotal/20)*20;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["TWENTY",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["TWENTY",cid[i][1]]);
        }
      }
    }
    if(i==6){
      if(parseInt(changeinTotal/10)>0){
        var requiredCash = parseInt(changeinTotal/10)*10;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["TEN",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["TEN",cid[i][1]]);
        }
      }
    }
    if(i==5){
      if(parseInt(changeinTotal/5)>0){
        var requiredCash = parseInt(changeinTotal/5)*5;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["FIVE",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["FIVE",cid[i][1]]);
        }
      }
    }
    if(i==4){
      if(parseInt(changeinTotal/1)>0){
        var requiredCash = parseInt(changeinTotal/1)*1;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["ONE",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["ONE",cid[i][1]]);
        }
      }
    }
     if(i==3){
      if(parseInt(changeinTotal/0.25)>0){
        var requiredCash = parseInt(changeinTotal/0.25)*0.25;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["QUARTER",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["QUARTER",cid[i][1]]);
        }
      }
    }
         if(i==2){
      if(parseInt(changeinTotal/0.1)>0){
        var requiredCash = parseInt(changeinTotal/0.1)*0.1;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["DIME",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["DIME",cid[i][1]]);
        }
      }
    }
    if(i==1){
      if(parseInt(changeinTotal/0.05)>0){
        var requiredCash = parseInt(changeinTotal/0.05)*0.05;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["NICKEL",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["NICKEL",cid[i][1]]);
        }
      }
    }
    if(i==0){
      if(parseInt(changeinTotal/0.01)>0){
        var requiredCash = parseInt(changeinTotal/0.01)*0.01;
        if(cid[i][1]>=requiredCash){
        changeinTotal-=requiredCash;
        change.push(["PENNY",requiredCash]);
        }
        else{
          changeinTotal-=cid[i][1];
          change.push(["PENNY",cid[i][1]]);
        }
      }
    }
  }
change.sort(function(a,b) {
    return b[1]-a[1]
});
var finalChange={}
if(changeinTotal==0){  
  finalChange['status']="OPEN";
  finalChange['change']=change;
  //console.log(finalChange)
    return finalChange;

}
else if(changeinTotal<0.09){
  change[6][1]+=0.01;
  finalChange['status']="OPEN";
  finalChange['change']=change;
  //console.log(finalChange)
  return finalChange;
}
else if(changeinTotal>0) {
  finalChange['status']="INSUFFICIENT_FUNDS";
  finalChange['change']=[]
    return finalChange;

}
else if(changeinTotal>0 && change.length>0)
  return finalChange;
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
