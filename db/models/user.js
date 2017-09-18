/* eslint-disable camelcase */
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

const db = require("../_db");

const setEmailAndPassword = user => {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) return Promise.resolve(user); // google OAuth means user may not have a password
  return bcrypt
    .hash(user.get("password"), 10)
    .then(hash => user.set("password_digest", hash))
    .catch(err => console.error(err));
};

const User = db.define(
  "users",
  {
    name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    google_id: Sequelize.STRING,
    password_digest: Sequelize.STRING,
    password: Sequelize.VIRTUAL // value won't be stored in the database
  },
  {
    indexes: [{ fields: ["email"], unique: true }],
    hooks: {
      beforeCreate: setEmailAndPassword,
      beforeUpdate: setEmailAndPassword
    },
    classMethods: {
	    authenticate(text) {
        return new Promise((resolve, reject) => {
           bcrypt.compare(text, this.password_digest, (err, result) => {
              if (err) reject(err);
             else resolve(result);
           })
        });    
      }
	  }
  }
);

module.exports = User;
