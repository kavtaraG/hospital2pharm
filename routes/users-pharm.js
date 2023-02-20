var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/singup', (req, res, next) => {
  res.send('pharmacy');
});

router.post('/singup', (req, res, next) => {
  console.log('pharmacy ID', req.body.pharmId);
  console.log('pharmacy password', req.body.password);
  if(req.body.pharmId == req.body.password && typeof(req.body.pharmId) !== 'undefined') {
    res.send({status: 'ok', msg: 'success'});
  }else{
    res.send({status: 'fail', msg: 'Pharmacy ID or Password is incorrect'});
  }
});

module.exports = router;
