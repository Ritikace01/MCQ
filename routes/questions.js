const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Question = require("../model/Question");

// get questions list
router.get("/", (req, res) => {
  Question.findAll()
    .then((questions) => {
      res.render("questionss", {
        questions,
      });
    })
    .catch((err) => console.log("Error" + err));
});

// add a question to the db
router.post("/add", (req, res) => {
  const data = {
    question_id: "2",
    question_text: "what all languages do you know ?",
    question_type: "Multiple answer correct",
  };

  let { question_id, question_text, question_type } = data;
  // insert into db
  Question.create({
    question_id,
    question_text,
    question_type,
  })
    .then((questions) => res.redirect("/questions"))
    .catch((err) => console.log(err));
});

module.exports = router;
