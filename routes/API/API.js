var express = require('express');
var router = express.Router();
var BottleController = require('../../controllers/bottleController');

router.post('/Botellas', function (req, res) {
	console.log(req.body);
	try {
		BottleController.addData(req, res);
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.put('/Botellas', function (req, res) {
	console.log(req.body);
	try {
		BottleController.updateData(req, res);
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get('/Botellas/:id', function (req, res, next) {
	BottleController.search(req.params.id, function (count) {
		console.log(count[0]);
		if (count[0] !== undefined) res.status(200).send(count[0]);
		else res.sendStatus(404);
	});
});

module.exports = router;
