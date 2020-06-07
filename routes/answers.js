const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Answer = require("../model/Answers");

// to get the list of answers
// get questions list
router.get("/", (req, res) => {
  Answer.findAll()
    .then((answers) => {
      console.log(answers);
      res.sendStatus(200);
    })
    .catch((err) => console.log("Error" + err));
});

// adding answers to the db
router.get("/add", (req, res) => {
  const data = {
    answer_id: "2",
    answer_text: "Java, Python, C/C++, Javascript",
  };

  let { answer_id, answer_text } = data;
  // insert into db
  Answer.create({
    answer_id,
    answer_text,
  })
    .then((answers) => res.redirect("/answers"))
    .catch((err) => console.log(err));
});

module.exports = router;
