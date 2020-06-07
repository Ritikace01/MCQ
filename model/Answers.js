const Sequelize = require("sequelize");
const db = require("../config/database");

const Answer = db.define("answer", {
  answer_id: {
    type: Number,
    allowNull: false,
  },
  answer_text: {
    type: String,
    allowNull: false,
  },
});

module.exports = Answer;
