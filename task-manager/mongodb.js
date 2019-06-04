const { MongoClient, ObjectID } = require('mongodb');

// create mongodb connection
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

// connect to DB
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.....');
  }
  console.log('Connected to MongoDB!');

  const db = client.db(databaseName);

  db.collection('users')
    .deleteMany({
      age: 40
    })
    .then(result => {
      console.log(result.deletedCount);
    })
    .catch(error => {
      console.log(error);
    });

  // // query one record from mongodb
  // db.collection('tasks').findOne({ _id: new ObjectID('5cdcd3fc7af7054084e2629e') }, (err, res) => {
  //   if (err) {
  //     return console.log(err);
  //   }

  //   console.log(res);
  // });

  // //query multiple records from mongodb
  // db.collection('tasks')
  //   .find({ completed: true })
  //   .toArray((err, res) => {
  //     if (err) {
  //       return console.log(err);
  //     }

  //     console.log(res);
  //   });

  client.close();
});
