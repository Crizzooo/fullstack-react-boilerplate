/* eslint-disable camelcase */
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const db = require('../_db');

const setEmailAndPassword = (user) => {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) return Promise.resolve(user);
  return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash))
    .catch(err => console.error(err));
};

module.exports = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password_digest: Sequelize.STRING,
  password: Sequelize.VIRTUAL // value won't be stored in the database
}, {
  indexes: [ { fields: ['email'], unique: true } ],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword
  },
  instanceMethods: {
    authenticate: (text) => {
      return bcrypt.compare(text, this.password_digest);
    }
  }
})
