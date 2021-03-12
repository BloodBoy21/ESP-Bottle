var express = require('express');
var router = express.Router();
var BottleController = require('../controllers/bottleController');
var app = express();
app.io = require('socket.io');

/* GET home page. */
router.get('/', function (req, res, next) {
	BottleController.search('itesco', function (count) {
		console.log(count);
		res.render('index', { bottleCount: count[0] });
	});
});

router.get('/newPost', function (req, res) {
	res.render('createPost/createPost');
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
