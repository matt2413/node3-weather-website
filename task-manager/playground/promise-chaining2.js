require('../src/db/mongoose.js');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5cf7388f2ce4084d982a92f1')
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
