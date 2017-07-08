/*eslint-disable camelcase*/
const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3000;

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.listen(PORT, () => {
  console.log('Server listening on Port: ', PORT);
});



app.use(express.static(path.join(__dirname, '..', 'client/public/')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client/public/index.html'));
});

//Error Handler
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});
