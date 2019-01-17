// let carOne = {
//   make: 'Audi'
// };

// let carTwo = {
//   make: 'Ford'
// };

// let carAge = new Map();

// carAge.set(carOne, 3);
// carAge.set(carTwo, 5);

// console.log(carAge);

// let cars = new Map();

// cars.set('CarOne', 'Audi');
// cars.set('CarTwo', 'Ford');
// cars.set('CarThree', 'GM');
// cars.set('CarFour', 'BMW');

// for (let [key, value] of cars) {
//   console.log(`${key} = ${value}`);
// }

// let person = {
//   name: 'Abdi',
//   address: '123 Js Street',
//   occupation: 'JS Dev'
// };

// let numbers = [1, 2, 3];

// console.log(typeof person[Symbol.iterator]);

let personOne = {};
let personTwo = {};

let people = new WeakMap();

people.set(personOne, 'Dave');
people.set(personTwo, 'Alfi');

console.log(people.get(personOne));
console.log(people.get(personTwo));
