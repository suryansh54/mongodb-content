var MongoClient = require('mongodb').MongoClient;

var url = '<MONGO_DB_CONNECTION_URL>';
var collectionName = 'customers'; // Collection name

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test"); // Select Database
    dbo.createCollection(collectionName, function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });