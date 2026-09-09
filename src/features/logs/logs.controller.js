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

module.exports = {
    createCappedCollection,
}