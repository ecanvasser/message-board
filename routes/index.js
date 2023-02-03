var express = require("express");
var router = express.Router();

const messages = [
  { text: "Howdy partner", user: "John", added: new Date() },
  { text: "Chalom", user: "Ben", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});

module.exports = router;
