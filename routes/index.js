var express = require('express');
var router = express.Router();
let {index, prueba, indice} = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.post('/', prueba)
router.get('/indice', indice)

module.exports = router;
