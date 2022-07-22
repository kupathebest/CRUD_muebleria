var express = require('express');
var router = express.Router();
let {index, prueba} = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.post('/', prueba)

module.exports = router;
