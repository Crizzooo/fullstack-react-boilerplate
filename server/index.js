const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'development') {
  require('../secrets');
}

const db = require('../db').db;

const PORT = process.env.PORT || 3000;

const app = express();


//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// sync database, then start server
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server listening on Port: ', PORT);
    });
  })
  .catch(err => console.error(err));

//redirect api routes
app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'client/src/public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client/src/public/index.html'));
});

//Error Handler
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});
