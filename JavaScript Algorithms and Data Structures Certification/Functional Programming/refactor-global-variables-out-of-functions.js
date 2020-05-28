// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
let bookList1;
function add (bookList,bookName) {
  let newArr = [...bookList];
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove (newArr,bookName) {
  let arr = [...newArr];
  var book_index = arr.indexOf(bookName);
  if (book_index >= 0) {

    arr.splice(book_index, 1);
    return arr;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList)
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
