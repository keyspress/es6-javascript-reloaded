// function setHeight(value) {
//   return value * 10;
// }

// function box(height = setHeight(10), color = 'green', url = 'google.com') {
//   console.log(height, color, url);
// }

// box();

function multiply(num = 2, numTwo = num) {
  return num * numTwo;
}

console.log(multiply(3, 10));
