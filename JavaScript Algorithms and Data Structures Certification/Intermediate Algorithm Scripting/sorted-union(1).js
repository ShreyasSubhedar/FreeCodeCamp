function uniteUnique(...arr) {
  const flatArray = [].concat(...arr);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
