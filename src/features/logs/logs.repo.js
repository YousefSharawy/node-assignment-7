const db = require("../../common/db/mongo");
async function createCappedCollection() {
    return await db.createCollection("logs", {
        capped: true,
        size: 1048576,
    });
}
module.exports = {
    createCappedCollection,
}