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
module.exports = {
    createExplicitCollection,
    createIndexOnTitle,
    insertDoc
}