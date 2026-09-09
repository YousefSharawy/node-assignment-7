const db = require('../../common/db/mongo');

async function createExplicitCollection() {
    return await db.createCollection("books", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["title"],
                properties: {
                    title: {
                        bsonType: "string",
                        description: "must be a string and is required"
                    },
                }
            }
        },
        validationLevel: "strict",
        validationAction: "error"
    });
}
async function createIndexOnTitle() {
    return await db.collection("logs").createIndex({
        title: 1,
    })
}
module.exports = { createExplicitCollection ,createIndexOnTitle};