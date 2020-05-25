function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { 
Dog.prototype.bark = function(){console.log("Woof!");};
}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


// Only change code above this line

let beagle = new Dog();
beagle.bark();