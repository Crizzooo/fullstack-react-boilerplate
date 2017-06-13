const db = require('./_db');
const User = require('./models/user');

// this is where we set associations and export our final models

module.exports = {
  db,
  User
};
