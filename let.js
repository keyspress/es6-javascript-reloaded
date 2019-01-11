function showLength(array) {
  if (array.length > 5) {
    var greater = 'Greater than 5';
    console.log(greater);
  } else {
    let lessThan = 'less than 5';
    console.log(lessThan);
    console.log(greater);
  }
}

showLength([1, 2, 3]);
