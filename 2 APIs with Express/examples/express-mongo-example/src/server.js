const express = require('express');
const bodyParser = require('body-parser');

const { connectDatabase } = require('./database');
const usersController = require('./controllers/users');

connectDatabase();
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/users', usersController);

app.get('/', (req, res) => {
  res.send({dog: 'django'});
});

app.listen(port, () => {
  console.log(`Listening at localhost:${port}...`);
});
