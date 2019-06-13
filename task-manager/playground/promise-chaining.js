require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5cf98c104c56fe3738d7f726', { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5cf98c104c56fe3738d7f726', 10)
  .then(result => {
    console.log('count: ' + result);
  })
  .catch(e => {
    console.log(e);
  });
