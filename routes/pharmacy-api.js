var express = require('express');
var app = express.Router();

const pharmacy = [
	{id: '1', name: 'dude', surname: 'dude', age: 23, mounth: 1, year: 1990, ID: '12345678910', prescreption: 'sdfdsgsd', drugs: 'sgds'}
];

app.get('/', (req, res) => {
	res.send(pharmacy);
});

app.get('/:ID', (req, res) => {
	let rec = pharmacy.filter((item) => item.ID);
	console.log(rec);
	// res.send(req.params.ID);
	res.send({status: 'ok', msg: 'data filtered by ID'});
});



module.exports = app;