var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var firstName = firstAndLast.split(" ")[0];
  var lastName = firstAndLast.split(" ")[1]; 
this.getFirstName= ()=>{ return firstName;}
this.getLastName= ()=>{ return lastName;}
this.setFirstName= (first)=>{firstName=first;}
this.setLastName=(last)=>{lastName=last;}
this.setFullName=(full) =>{
  firstName = full.split(" ")[0];
  lastName = full.split(" ")[1];
}
  this.getFullName = function() {
    return firstName+" "+lastName;
  };
};

var bob = new Person('Bob Ross');
console.log();

console.log(bob.getFirstName())