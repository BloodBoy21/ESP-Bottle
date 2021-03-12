var express = require('express');
var router = express.Router();
var BottleController = require('../controllers/bottleController');
var app = express();
app.io = require('socket.io');

/* GET home page. */
router.get('/', function (req, res, next) {
	BottleController.search(function (count) {
		console.log(count);
		res.render('index', { bottleCount: count[0] });
	});
});

// router.get('/getBotellas', (req, res) => {
// 		BottleController.search(function (count) {
// 			console.log(count);
// 			res.send(count[0]);
// 		});
// });

router.post('/addBotellas', function (req, res) {
	console.log(req.body);
	try {
		BottleController.updateData(req);
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get('/getBotellas', function (req, res, next) {
	BottleController.search(function (count) {
		console.log(count[0]);

		res.status(200).send(count[0]);
	});
});

module.exports = function (io) {
	//Socket.IO
	io.on('connection', function (socket) {
		console.log('User has connected to Index');
		//ON Events
		socket.on('admin', function () {
			console.log('Successful Socket Test');
		});

		//End ON Events
	});
	return router;
};
