const {Router} = require('express');
const logsRouter = Router();
const logsController = require('./logs.controller');


logsRouter.post('/capped',logsController.createCappedCollection);
logsRouter.post('',logsController.insertNewLog);

module.exports = logsRouter;