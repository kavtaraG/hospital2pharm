var express = require('express');
var app = express.Router();
const pharmacy = [
	{id: '1', name: 'dude', surname: 'dude', age: 23, mounth: 1, year: 1990, ID: '12345678910', prescreption: 'sdfdsgsd', drugs: 'sgds'}
];

app.get('/', (req, res) => {
	res.send(pharmacy);
});

app.get('/:id', (req, res) => {
	let rec = pharmacy.filter((item) => item.id);
	console.log(rec);
	// res.send(req.params.id);
	res.send({status: 'ok', msg: 'filtered by ID'});
});

app.post('/', (req, res) => {
	let record = req.body;
	pharmacy.push(record);
	res.send({status: 'ok', msg: 'record added success'});
});

app.put('/', (req, res) => {
	let record = req.body;
	let rec = pharmacy.map((item) => item == record);
	console.log(rec);
	// res.send(rec);
	res.send({status: 'ok', msg: 'data is edited'});
});


module.exports = app;