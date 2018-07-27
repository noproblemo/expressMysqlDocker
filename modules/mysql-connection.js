var mysql = require('mysql');

var dbConnection = require('express-myconnection');
var dbConfig = {
	host:'db',
	user:'express',
	password:'secret',
	database:'node'
};

module.exports = dbConnection(mysql, dbConfig, 'single');