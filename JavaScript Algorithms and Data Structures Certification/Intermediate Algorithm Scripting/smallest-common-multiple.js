function gcd(a,b){ 
    if (a == 0) 
        return b;  
    return gcd(b % a, a);  
 } 
function smallestCommons(arr) {
  if(arr[0]>arr[1]){
  var temp=arr[0];
  arr[0]=arr[1];
  arr[1]=temp;
  }
  for(var i =arr[0]+1;i<arr[1];i++){
    arr.push(i);
  }
  var ans=arr[0];
  for (var i = 1; i < arr.length; i++) 
        ans = (((arr[i] * ans)) / 
                (gcd(arr[i], ans))); 
                return ans;
}

console.log(smallestCommons([1,5]));
