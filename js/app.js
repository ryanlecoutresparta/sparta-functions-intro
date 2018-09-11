
// ======= FUNCTIONS =======

// Named Function:

// function addNumbers() {
//   var result = 10 + 5;
//   console.log(result);
// }
// addNumbers();

// Anonymous Function (saved as a variable):

// var addNumbers = function() {
//   var result = 10 + 5;
//   console.log(result);
// }
// addNumbers();

// Saved as a property of an object (becomes a method):

// var obj = new Object();
//
// obj.addNumbers = function() {
//   var result = 10 + 5;
//   console.log(result);
// }
// obj.addNumbers();

// Arrow Functions:

var addNumbers = (num1, num2) => {
  return num1 + num2;
  // var result = num1 + num2;
  // console.log(result);
}
addNumbers(1, 5);
addNumbers(5, 7);
addNumbers(5.7, 3);
addNumbers(67.44, 5);
console.log(addNumbers(1, 5));
console.log(addNumbers(5, 7));
console.log(addNumbers(5.7, 3));
console.log(addNumbers(67.44, 5));
