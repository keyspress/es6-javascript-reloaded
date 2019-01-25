// let url = 'http://data-api/data';

// let data = getdata(url, function(response) {});

// console.log('data:', data);

// console.log('I am running after the Ajax call');

// data: undefined

// function waitingFor(name, done) {
//   console.log('Waiting for ' + name)

//   setTimeout(function() {
//     if(name === 'Mike') {
//       done('Mike is always late')
//     } else {
//       done(null, name)
//     }
//   }, 3000)
// }

// let Promise = {
//   then() {},
//   catch() {},
//   all() {},
// }

function waitingFor(name) {
  console.log(`Waiting for ${name}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'Mike') {
        reject(Error('Mike is always late.'));
      } else {
        resolve(name);
      }
    }, 2000);
  });
}

waitingFor('Abdi').then(name => {
  console.log(`Great we got ${name}`);
});
