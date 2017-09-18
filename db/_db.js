const Sequelize = require('sequelize');

const databaseName = process.env.DATABASE_NAME || require('../package.json').name;

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/cryptoapp`, {
    logging: false,
    dialect: 'postgres'
});

module.exports = db;