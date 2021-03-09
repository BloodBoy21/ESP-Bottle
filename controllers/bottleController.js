var mongoose = require('mongoose');
let Bottle = require('../models/bottleModel');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Botellas', { useNewUrlParser: true });
let db = mongoose.connection;

exports.updateData = function (res) {
	// const newBottle = {
	// 	name: req.body.name,
	// 	count: req.body.nBottle,
	// };
	// let bottle = new Bottle(newBottle);
	// var myquery = { name: 'ITESCO' };
	// var newvalues = { $set: {"$inc": { count: req.body.nBottle } } };

	db.collection('botellas').updateOne({ name: res.body.name }, { $inc: { count: res.body.count } });
	//error handling

	// db.collection('botellas').updateOne(myquery, newvalues, function (err, res) {
	// 	if (err) throw err;
	// 	console.log('1 document updated');
	// });
	// bottle.save(function (err) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log('Botella contada');
	// 	}
	// });
};

exports.search = function (callback) {
	db.collection('botellas')
		.find({ name: 'ITESCO' }, { projection: { _id: 0, count: 1 } })
		.toArray(function (err, result) {
			if (err) throw err;
			// db.close();
			callback(result);
		});
};
