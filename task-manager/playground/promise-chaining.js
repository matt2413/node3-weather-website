require('../src/db/mongoose');
const User = require('../src/models/User');

User.findByIdAndUpdate('5cf98c104c56fe3738d7f726', { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
