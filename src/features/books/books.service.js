const booksRepo = require("./books.repo");


async function createExplicitCollection() {
    return  await booksRepo.createExplicitCollection();
}
async function createIndexOnTitle() {
    return  await booksRepo.createIndexOnTitle();
}

module.exports = {
    createExplicitCollection,createIndexOnTitle
}