var express = require('express');
var router = express.Router();
var BottleController = require('../controllers/bottleController');

/* GET home page. */
router.get('/', function (req, res, next) {
	BottleController.search(function (count) {
		console.log(count);
		res.render('index', { bottleCount: count[0] });
	});
});

router.get('/newBlog', (req, res) => {
	res.render('./createPost/createPost');
});

router.post('/addBotellas', function (req, res, next) {
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
		res.send(count[0]);
	});
});


module.exports = router;
