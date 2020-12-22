var express = require('express');
var router = express.Router();
var cotroller = require('../controllers/index')

/* GET home page. */
router.get('/', cotroller.index)

module.exports = router;
