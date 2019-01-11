// function showLength(array) {
//   if (array.length > 5) {
//     var greater = 'Greater than 5';
//     console.log(greater);
//   } else {
//     let lessThan = 'less than 5';
//     console.log(lessThan);
//     console.log(greater);
//   }
// }

// showLength([1, 2, 3]);

var funcs = [];

for (let i = 0; i < 5; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

funcs[0]();
funcs[1]();
funcs[4]();
