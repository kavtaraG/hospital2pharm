var express = require('express');
var app = express.Router();

const pharmacy = [
	{id: '1', name: 'dude', surname: 'dude', age: 23, mounth: 1, year: 1990, ID: '12345678910', prescreption: 'sdfdsgsd', drugs: 'sgds'}
];

const getData = () => (pharmacy);

const getDatByID = (ID) => {
	let temp = pharmacy.filter((item) => (item.ID == ID));
	if(temp.length > 0) {
		return temp[0];
	}else{
		return temp[{}];
	};
};

const createData = (record) => {
	record.id = Date.now();
	pharmacy.push(record);
};

const updateData = (record) => {
	pharmacy.map((item, index) => {
		if(record.ID == item.ID) {
			return pharmacy[index] == record;
		}
	})
};

const deleteData = (ID) => {
	let temp = pharmacy.filter((record)=>(record.ID != ID));
    pharmacy = temp;
};

module.exports = { 
	getData, 
	getDatByID, 
	createData, 
	updateData, 
	deleteData 
};
