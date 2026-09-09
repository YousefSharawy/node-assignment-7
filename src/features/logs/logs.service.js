const logsRepo = require('./logs.repo');

async function createCappedCollection() {
    return await logsRepo.createCappedCollection(); 
}
module.exports = {
    createCappedCollection
}