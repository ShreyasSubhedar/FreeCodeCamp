function sentensify(str) {
  // Only change code below this line
  var pattern = /\s|-|,|\./;
  
  return str.split(pattern).join(" ");
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
