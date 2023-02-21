var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('respond with a resource');
  });

router.get('/login', (req, res, next) => {
	res.send('hospital');
  });
  
router.post('/login', (req, res, next) => {
	console.log('hospital ID: ', req.body.hospId);
	console.log('hospital password: ', req.body.password);
	if(req.body.hospId == req.body.password && typeof(req.body.hospId) != 'undefined') {
	  res.send({status: 'ok', msg: 'success'});
	}else{
	  res.send({status: 'fail', msg: 'Hospital ID or Password is incorrect'});
	}
  });

module.exports = router;