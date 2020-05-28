function nonMutatingSplice(cities) {
  // Only change code below this line
  cities = cities.slice(0,3);
  console.log(cities)
  return cities;

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
