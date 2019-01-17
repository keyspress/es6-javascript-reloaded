function Car(carSpec) {
  this.name = carSpec.name;
  this.model = carSpec.model;
  this.description = carSpec.description;
}

Car.prototype.drive = function() {
  console.log('Driving...');
};

function Audi(carSpec) {
  Car.call(this, carSpec);
  this.engine = carSpec.engine;
  this.audiDrive = function() {
    console.log('Driving but in a more European way...');
  };
}

Audi.prototype = Object.create(Car.prototype);

Audi.prototype.constructor = Audi;

const myAudi = new Audi({
  name: 'My Audi',
  model: 'Audi',
  description: 'Great car if you can get past the whole Nazi thing',
  engine: 'A313'
});

console.log(myAudi.description);
