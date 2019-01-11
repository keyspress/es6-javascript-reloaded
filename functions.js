// function setHeight(value) {
//   return value * 10;
// }

// function box(height = setHeight(10), color = 'green', url = 'google.com') {
//   console.log(height, color, url);
// }

// box();

// function multiply(num = 2, numTwo = num) {
//   return num * numTwo;
// }

// console.log(multiply(3, 10));

// function sum(...numbers) {
//   var result = 0;

//   numbers.forEach(function(number) {
//     result += number;
//   });

//   return result;
// }

// console.log(sum(3, 5, 7, 9));

// let numbers = [1, 2, 3];

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// console.log(sum(...numbers));

// let a = [2, 3, 4];
// let b = [1, ...a, 5];

// console.log(b);

// let foo = (a, b) => {
//   let counter = 0;

//   for (let i = 0; i < b; i++) {
//     counter += a;
//   }
//   return counter;
// };

// console.log(foo(1, 5));

var person = {
  firstname: 'Jim',
  lastname: 'Jones',
  getFullName: function() {
    var name = () =>
      console.log(console.log(this.firstname + ' ' + this.lastname));
    return name();
  }
};

person.getFullName();
