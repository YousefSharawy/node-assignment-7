const booksRepo = require("./books.repo");


async function createExplicitCollection() {
    return await booksRepo.createExplicitCollection();
}
async function createIndexOnTitle() {
    return await booksRepo.createIndexOnTitle();
}
async function insertDoc(title, author, year, genres) {
    return await booksRepo.insertDoc(title, author, year, genres);
}
async function insertCollection(collection) {
    return await booksRepo.insertCollection(collection);
}
async function updateBookYear() {
    return await booksRepo.updateBookYear();
}
module.exports = {
    createExplicitCollection,
    createIndexOnTitle,
    insertDoc,
    insertCollection,
    updateBookYear
}