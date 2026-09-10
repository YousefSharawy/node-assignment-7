const db = require("../../common/db/mongo");
async function createCappedCollection() {
    return await db.createCollection("logs", {
        capped: true,
        size: 1048576,
    });
}
async function insertNewLog(log) {
    return await db.collection("logs").insertOne(log);
}
module.exports = {
    createCappedCollection,
    insertNewLog
}