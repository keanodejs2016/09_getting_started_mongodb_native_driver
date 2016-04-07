var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/clboTest';

// this could have comed from a form from the browser
var objToInsert = {
	_id: 7,
    name: 'Tine',
    age: 82,
    schoolID: { name: 'RUC', address: 'Roskilde', country: 'Denmark' }
};

MongoClient.connect(url, function (err, db) {
	
	var collection = db.collection('persons');

	collection.insert(objToInsert, function (err, result) {
		console.log(result);
		db.close();
	});
	
});