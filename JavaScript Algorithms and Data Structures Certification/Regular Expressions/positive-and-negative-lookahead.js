// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /^(?!=\D*)(?=[a-zA-Z])(?=\w*[0-9]{2,}\w*){5,}/; // Change this line
let result = pwRegex.test(sampleWord);
