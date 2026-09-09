const {MongoClient} = require("mongodb");
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
const db = mongoClient.db("mongo-assignment-2")

module.exports =db;