const booksRepo = require("./books.repo");


async function createExplicitCollection() {
    return  await booksRepo.createExplicitCollection();
}

module.exports = {
    createExplicitCollection
}