let services = [
  { name: 'nails', activated: false },
  { name: 'haircut', activated: true },
  { name: 'feet therapy...yuck', activated: true }
];

let activated = services.find(service => service.activated);
console.log(activated);
