var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bottleSchema = new Schema({
	name: String,
	count: Number,
	date: { type: Date, default: Date.now },
});

var Bottle = mongoose.model('Botellas', bottleSchema);
module.exports = Bottle;
