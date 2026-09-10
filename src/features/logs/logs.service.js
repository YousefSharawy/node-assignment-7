const logsRepo = require('./logs.repo');

async function createCappedCollection() {
    return await logsRepo.createCappedCollection(); 
}
async function insertNewLog(log) {
    return await logsRepo.insertNewLog(log); 
}
module.exports = {
    createCappedCollection,
    insertNewLog
}