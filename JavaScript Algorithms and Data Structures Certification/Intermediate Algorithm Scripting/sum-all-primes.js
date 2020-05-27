function sieve(num){
  var isPrime=[];
  for(var i =0;i<=num;i++)
  isPrime[i]=true;
  isPrime[0]=false;
  isPrime[1]=false;
  for(var i =2;i*i<=num;i++){
    if(isPrime[i]==true){
      for(var j =i*i;j<=num;j+=i)
      isPrime[j]=false;
    }
  }
  return isPrime;
}
function sumPrimes(num) {
  var primeSieve= sieve(num);
  var count=0;
for(var i =0;i<=num;i++)
if(primeSieve[i]==true)
count+=i;
return count;
}

sumPrimes(10);
