var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.getConnection(function(err, connection){

  		if(err) return next(err);

  		connection.query('select CURDATE() as now', [], function(err, results){

  			if(err) return next(err);

  			console.log(results[0]);
  			res.send('response with a resource'+results[0].now);

  			
  		})
  	})
});

module.exports = router;
