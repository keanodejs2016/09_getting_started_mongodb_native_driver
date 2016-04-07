var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/clboTest';


MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');

	collection.find({}).toArray(function (err, data) {
		console.log(data);
		db.close();
	});


});