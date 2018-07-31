var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definitions:
 *  Tags:
 *   required:
 *    - type
 *    - title
 *   properties:
 *    type:
 *     type: string
 *    title:
 *     type: string
 *  Login:
 *   required:
 *    - username
 *    - password
 *   properties:
 *    username:
 *     type: string
 *    password:
 *     type: string
 *    path:
 *     type: string
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management and login tags
 */

/**
 * @swagger
 * tags:
 *  - name: Login
 *    description: Login
 *  - name: Accounts
 *    description: Accounts
 */

/**
 * @swagger
 * /users:
 *  get:
 *   description: Returns users
 *   tags:
 *    - Users
 *   produces:
 *    - application/json
 *   responses:
 *    200:
 *     description: users
 */

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
