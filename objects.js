function createUser(firstname, lastname) {
  let fullName = firstname + ' ' + lastname;
  return {
    firstname,
    lastname,
    fullName
  };
}

let user = createUser('Jim', 'Jones');

console.log(user.firstname, user.lastname, user.fullName);
