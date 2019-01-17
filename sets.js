// let cars = ['Audi', 'Ford', 'Audi', 'Mercedes', 'VW'];

// console.log(cars.length);

let cars = new Set();

cars.add('Audi');
cars.add('Ford');
cars.add('Mercedes');
cars.add('Audi');

for (let car of cars) {
  console.log(car);
}
