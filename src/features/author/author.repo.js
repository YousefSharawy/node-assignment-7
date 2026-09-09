const db = require('../../common/db/mongo');

async function createImplicitCollection(name, nationality) {
    const response = await db.collection("authors").insertOne({
        name: name,
        nationality: nationality
    });
    return response;
}

module.exports = {
    createImplicitCollection,
}