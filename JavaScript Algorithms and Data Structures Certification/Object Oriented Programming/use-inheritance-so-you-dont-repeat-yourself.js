//constructor
function Cat(name) {
  this.name = name;
}
//Prototype
Cat.prototype = {
  constructor: Cat,
  
};
//constructor
function Bear(name) {
  this.name = name;
}
//Prototype
Bear.prototype = {
  constructor: Bear,
  
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
   eat: function() {
    console.log("nom nom nom");
  }
};
