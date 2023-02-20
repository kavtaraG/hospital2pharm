var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hospital', { title: 'Express' });
});

router.get('/pharmacy', function(req, res, next) {
  res.render('pharm-module', { title: 'Express' });
});

module.exports = router;
