var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/clboTest';


MongoClient.connect(url, function (err , db) {
	console.log('Connected to db');

	db.close();
});