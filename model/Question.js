const Sequelize = require("sequelize");
const db = require("../config/database");

const Question = db.define("question", {
  question_id: {
    type: Number,
    primaryKey: true,
    allowNull: false,
  },
  question_text: {
    type: String,
    allowNull: false,
  },
  question_type: {
    type: String,
    allowNull: true,
  },
});

module.exports = Question;
