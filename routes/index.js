var express = require("express");
var router = express.Router();
const fs = require("fs");
var path = require("path");

/* GET home page + load 3 pictures */
router.get("/", function (req, res, next) {
  const pictures = fs
    .readdirSync(path.join(__dirname, "../pictures/"))
    .slice(0, 3);
  res.render("index", { pictures: pictures, title: "Express" });
});

module.exports = router;
