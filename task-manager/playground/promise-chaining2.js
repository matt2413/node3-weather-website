require('../src/db/mongoose.js');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5cf7388f2ce4084d982a92f1')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5d0173c093d44b30b89ea1ff')
  .then(result => {
    console.log('result: ' + result);
  })
  .catch(e => {
    console.log(e);
  });
