const authorRepo = require("./author.repo");

async function createImplicitCollection(name,nationality) {
    return await authorRepo.createImplicitCollection(name,nationality);
}
module.exports = {
    createImplicitCollection,
}