// let cars = ['Audi', 'Ford', 'Audi', 'Mercedes', 'VW'];

// console.log(cars.length);

// let cars = new Set();

// cars.add('Audi');
// cars.add('Ford');
// cars.add('Mercedes');
// cars.add('Audi');

// let [a, b, c] = cars;

// console.log(a, b, c);

let weakCars = new WeakSet();

weakCars.add({ driver: 'Alf' });
let passenger = { passenger: 'Sarah' };
weakCars.add(passenger);
weakCars.delete(passenger);

console.log(weakCars.has(passenger));
