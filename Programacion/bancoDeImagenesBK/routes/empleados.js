var express = require('express');
var router = express.Router();
const pool = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hola empleados');
});

router.get('/add', function(req, res, next) {
    res.send('Form');
});

module.exports = router;