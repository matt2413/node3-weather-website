// create mongodb connection

// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;
// const objectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

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

  // insert a single document
  // db.collection('users').insertOne(
  //   {
  //     name: 'Matt Lui',
  //     age: 40
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert user');
  //     }

  //     console.log(result.ops);
  //   }
  // );

  // insert multiple documents
  // db.collection('users').insertMany([{ name: 'Jayden', age: 8 }, { name: 'Justin', age: 3 }], (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert user');
  //   }
  //   console.log('Number of documents inserted is ' + res.insertedCount);
  // });

  // insert multiple documents
  // db.collection('tasks').insertMany(
  //   [
  //     { description: 'Make bed', completed: true },
  //     { description: 'Brush teeth', completed: true },
  //     { description: 'Have breakfast', completed: false }
  //   ],
  //   (err, res) => {
  //     if (err) {
  //       console.log('Unable to insert documents...');
  //     }

  //     console.log('Number of documents inserted is ' + res.insertedCount);
  //   }
  // );

  client.close();
});
