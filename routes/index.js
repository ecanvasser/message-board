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

router.get("/new", function (req, res, next) {
  res.render("newmessage");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
