const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

// create User model
const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

// const me = new User({
//   name: 'Matt Lui',
//   age: 40
// });

// me.save()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log('Error!', error);
//   });

// create Task model
const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const task = new Task({
  description: 'Wash the dishes',
  completed: false
});
