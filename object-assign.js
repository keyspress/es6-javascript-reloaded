let item = {
  id: 1,
  content: 'Learn es6',
  completed: false
};

// let newItem = Object.assign({}, item, { completed: true });
let newItem = { ...item, completed: true };
console.log(newItem);

console.log('Item', item);
