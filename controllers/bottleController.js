var mongoose = require('mongoose');
let Bottle = require('../models/bottleModel');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PetCollector', { useNewUrlParser: true });
let db = mongoose.connection;

exports.updateData = function (req, res) {
	// var myquery = { name: 'ITESCO' };
	// var newvalues = { $set: { count: req.body.count } };

	db.collection('Botellas').updateOne({ name: req.body.name }, { $inc: { count: req.body.count } });

	// db.collection('Botellas').updateOne(myquery, newvalues, function (err, res) {
	// 	if (err) throw err;
	// 	console.log('1 document updated');
	// });
};

exports.addData = function (req, res) {
	const newBottle = {
		name: req.body.name,
		count: req.body.count,
	};
	let bottle = new Bottle(newBottle);
	db.collection('Botellas').insertOne(bottle, (err, res) => {
		if (err) throw err;
		console.log('1 document inserted');
	});
};

exports.search = function (name, callback) {
	console.log(name);
	db.collection('Botellas')
		.find({ name: name.toUpperCase }, { projection: { _id: 0, count: 1 } })
		.toArray(function (err, result) {
			if (err) throw err;
			if (result === undefined) throw new Error('No hay un elemneto con ese ID');
			else callback(result);
		});
};
