function sumFibs(num) {
  var f=[];   // 1 extra to handle case, n = 0 
  var i; 
  
  /* 0th and 1st number of the series are 0 and 1*/
  f[0]=1; 
  f[1] = 1; 
 var a=0;
  if(num>=1)
  a+=2;
  for (var i = 2; i < num; i++) 
  { 
      f[i] = f[i-1] + f[i-2];
      if(f[i]%2==1 && f[i]<=num)
        a+=f[i];
  } 
  
  return a; 
} 

console.log(sumFibs(10));
