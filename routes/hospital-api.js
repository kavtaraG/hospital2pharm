var express = require('express');
var app = express.Router();
var {getData, getDatByID, createData} = require('../controller/app.controller');

const pharmacy = [
	{id: '1', name: 'dude', surname: 'dude', age: 23, mounth: 1, year: 1990, ID: '12345678910', prescreption: 'sdfdsgsd', drugs: 'sgds'}
];

app.get('/', (req, res) => {
	res.send(getData());
});

app.get('/:id', (req, res) => {
	console.log(`object ID: ${req.params.id}`);
	res.send(getDatByID(req.params.id));
});

app.post('/', (req, res) => {
	// let record = req.body;
	// record.id = Date.now();
	// pharmacy.push(record);
	createData(req.body);
	res.send({status: 'ok', msg: 'record added success'});
});

app.put('/', (req, res) => {
	let record = req.body;
	pharmacy.map((item, index) => {
		if(record.ID == item.ID) {
			pharmacy[index] = record;
		}
	});
	console.log(rec);
	// res.send(rec);
	res.send({status: 'ok', msg: 'data is edited'});
});

app.delete('/', (req, res) => {
	let temp = pharmacy.filter((item) => (item.ID != req.body.ID));
	pharmacy = temp;
	res.send({status: 'ok', msg: 'record deleted'});
});

module.exports = app;