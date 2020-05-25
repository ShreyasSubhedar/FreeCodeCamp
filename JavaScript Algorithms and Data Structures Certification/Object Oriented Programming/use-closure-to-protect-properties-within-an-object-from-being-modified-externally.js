function Bird() {
  let weight = 15;
  this.getWeight= function(){
    return weight;
  }

}
let all = new Bird()
all.getWeight();
