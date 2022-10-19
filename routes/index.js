var express = require('express');
const {  loginWithEmailPassword } = require('../controllers/account.controller');
const { ensureAuthenticated } = require('../middleware/auth');
const { Customer } = require("../models/index");
var router = express.Router();

/* GET home page. */
router.get('/',[ensureAuthenticated], async (req, res, next) => {

  try {
    // find customers

    let customers = await Customer.findAll()

 
    res.render('index',{
      customerList: customers
    });

  } catch (error) {
    console.log(error)
  }
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', loginWithEmailPassword)


module.exports = router;
