const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const bcrypt = require('bcryptjs');

const testFunction = async () => {
  const txtPassword = 'Red12345!';
  const hashPassword = await bcrypt.hash(txtPassword, 8);

  console.log('txtPassword: ' + txtPassword);
  console.log('hashPassword: ' + hashPassword);

  const isMatch = await bcrypt.compare('password123', hashPassword);
  console.log('isMatch: ' + isMatch);
};

testFunction();
