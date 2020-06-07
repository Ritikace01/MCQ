const Sequelize = require("sequelize");

module.exports = new Sequelize(
  "postgres://postgres:ishapostgres@050401@localhost:3001/mcq"
);
