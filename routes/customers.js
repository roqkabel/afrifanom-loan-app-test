var express = require("express");
const { cardType } = require("../config/variables");
var router = express.Router();

/* GET users listing. */
router.get("/new", function (req, res, next) {
  res.render("newCustomer", {
    cardTypeList: cardType,
  });
});

module.exports = router;
