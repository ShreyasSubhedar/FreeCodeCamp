var convertToRoman = function(num) {
  var decVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romVal = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

  var rom = "";

  for (var index = 0; index < decVal.length; index++) {
    while (decVal[index] <= num) {
      rom += romVal[index];
      num -= decVal[index];
    }
  }

  return rom;
};
console.log(convertToRoman(3999));
