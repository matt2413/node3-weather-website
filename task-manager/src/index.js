const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled!');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('This site is currently under maintenance!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const bcrypt = require('bcryptjs');

// const testFunction = async () => {
//   const txtPassword = 'Red12345!';
//   const hashPassword = await bcrypt.hash(txtPassword, 8);

//   console.log('txtPassword: ' + txtPassword);
//   console.log('hashPassword: ' + hashPassword);

//   const isMatch = await bcrypt.compare('password123', hashPassword);
//   console.log('isMatch: ' + isMatch);
// };

// testFunction();

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '1 days' });
//   console.log(token);
// };

// myFunction();
