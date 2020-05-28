var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort();
  // Only change code above this line
}
nonMutatingSort(globalArray);
