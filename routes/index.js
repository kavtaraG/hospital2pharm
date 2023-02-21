var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hospital', function(req, res, next) {
  res.render('hospital', { title: 'Express' });
});

router.get('/pharmacy', function(req, res, next) {
  res.render('pharm-module', { title: 'Express' });
});

router.get('/order', function(req, res, next) {
  res.render('hospital-order', { title: 'Express' });
});

router.get('/order/add', function(req, res, next) {
  res.render('hospital-order', { title: 'Express' });
});

router.get('/order/edit/:ID', function(req, res, next) {
  res.render('hospital-order', { title: 'Express' });
});

router.get('/pharm_auth', function(req, res, next) {
  res.render('pharmacy-auth', { title: 'Express' });
});

module.exports = router;
