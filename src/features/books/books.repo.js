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

async function insertDoc(title, author, year, genres) {
    return await db.collection('books').insertOne({
        "title": title,
        author: author,
        year: year,
        genres: genres
    })
}

async function insertCollection(collection) {
    return await db.collection("books").insertMany(collection);
}
async function updateBookYear() {
    return await db.collection("books").updateOne(
        { title: "Future" },
        { $set: { year: 2022 } }
    );
}

async function getBookByTitle(title) {
    return await db.collection("books").findOne(
        { title: title }
    );
}
async function getBooksByYear(from,to) {
    return await db.collection("books").find(
        {year:{$gte:from,$lte:to}}
    ).toArray();
}

module.exports = {
    createExplicitCollection,
    createIndexOnTitle,
    insertDoc,
    insertCollection,
    updateBookYear,
    getBookByTitle,
    getBooksByYear
};