const logsService = require('./logs.service');

const createCappedCollection = async (req, res, next) => {
    try {
        await logsService.createCappedCollection();
        res.status(201).json({
            ok: 1
        });
    } catch (err) {
        next(err)
    }
}
const insertNewLog = async (req, res, next) => {
    try {
        const log = req.body; 
        const response = await logsService.insertNewLog(log);
        res.status(201).json({
            acknowledged:response.acknowledged,
            insertedId:response.insertedId
        });
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createCappedCollection,
    insertNewLog
}