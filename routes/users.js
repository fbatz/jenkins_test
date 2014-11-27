var db = require('../mongodb/db');
var express = require('express');
var router = express.Router();

/* GET users. It is bellow /users/ see app.js for the routing. */
router.get('/', function(req, res) {
	var collection = db.get('usercollection');
	collection.find({}, {}, function(e, docs) {
		res.render('users', {
			title: docs.length + ' Users',
			"users": docs
		});
	});
});


module.exports = router;