const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const db = require("./config/database");

const app = express();

app.use(express.json());

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//testing the db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error" + err));

//question routes
app.use("/questions", require("./routes/questions"));

//answer routes
app.use("/answers", require("./routes/answers"));

const PORT = process.env.port || 5432;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
