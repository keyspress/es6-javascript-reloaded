// function createUser(firstname, lastname) {
//   let fullName = firstname + ' ' + lastname;
//   return {
//     firstname,
//     lastname,
//     fullName
//   };
// }

// let user = createUser('Jim', 'Jones');

// console.log(user.firstname, user.lastname, user.fullName);

// let obj = {
//   x: 7,
//   y: 8,
//   z: 9
// };

// let x = obj.x,
//   y = obj.y,
//   z = obj.z;

// let { x, y, z } = obj;

// console.log(x, y, z);

let myObj = {
  prop1: 'hello',
  prop2: 'world',
  fullName(firstname, lastname) {
    let fullName = firstname + ' ' + lastname;
    return fullName;
  }
};

console.log(myObj.fullName('Homey', 'McComey'));
