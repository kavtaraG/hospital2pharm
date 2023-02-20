var express = require('express');
var router = express.Router();

router.post('/singup', (req, res, next) => {
	res.send('hospital');
  });
  
router.post('/singup', (req, res, next) => {
	console.log('hospital ID', req.body.pharmId);
	console.log('hospital password', req.body.password);
	if(req.body.pharmId == req.body.password && typeof(req.body.pharmId) !== 'undefined') {
	  res.send({status: 'ok', msg: 'success'});
	}else{
	  res.send({status: 'fail', msg: 'Hospital ID or Password is incorrect'});
	}
  });

module.exports = router;