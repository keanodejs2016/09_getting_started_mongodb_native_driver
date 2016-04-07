var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID; // for use when dealing with the auto generated _id in the mogodb

var url = 'mongodb://localhost:27017/clboTest';

// this could also come from a form on a website
var updatedObj = {
	name : 'Ole'
};

MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');

	collection.update({'_id' : 6}, {$set : updatedObj}, function (err, result) {
		console.log(result.result);
		db.close();
	});
});