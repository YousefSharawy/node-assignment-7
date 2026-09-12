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
async function getBookByTitle(title) {
    return await booksRepo.getBookByTitle(title);
}
async function getBooksByYear(from, to) {
    return await booksRepo.getBooksByYear(from, to);
}
async function getBooksByGenre(genre) {
    return await booksRepo.getBooksByGenre(genre);
}
async function getFirstTwoBooks() {
    return await booksRepo.getFirstTwoBooks();
}
async function getBooksByIntegerYear() {
    return await booksRepo.getBooksByIntegerYear();
}
async function getBooksExcludeingGenres() {
    return await booksRepo.getBooksExcludeingGenres();
}
async function deleteBooksBeforeYear(year) {
    return await booksRepo.deleteBooksBeforeYear(year);
}
async function aggregateOne() {
    return await booksRepo.aggregateOne();
}
module.exports = {
    createExplicitCollection,
    createIndexOnTitle,
    insertDoc,
    insertCollection,
    updateBookYear,
    getBookByTitle,
    getBooksByYear,
    getBooksByGenre,
    getFirstTwoBooks,
    getBooksByIntegerYear,
    getBooksExcludeingGenres,
    deleteBooksBeforeYear,
    aggregateOne
}