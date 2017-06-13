const Sequelize = require('sequelize');

const databaseName = process.env.DATABASE_NAME || require('../package.json').name;

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, { logging: false });

module.exports = db;
