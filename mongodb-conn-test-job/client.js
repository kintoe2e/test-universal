const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();
const test = require('assert');

// Connection url
const url = process.env.MONGODB_CONNECTION_STRING

// Database Name
const dbName = process.env.MONGODB_DATABASE_NAME
// Connect using MongoClient

MongoClient.connect(url, function (err, client) {

  if (err) {
    throw err
  }
  // Use the admin database for the operation

  const adminDb = client.db(dbName).admin();
  // List all the available databases

  adminDb.listDatabases(function (err, dbs) {

    test.equal(null, err);

    test.ok(dbs.databases.length > 0);
    client.close();
  });
});
