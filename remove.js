var MongoClient = require('mongo').MongoClient;

var url = 'mongodb://localhost:27017/clboTest';

MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');

	colection.remove({}, function (err, result) {
		console.log(result);
		db.close();
	});
});