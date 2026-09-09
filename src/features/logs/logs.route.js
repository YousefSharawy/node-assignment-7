const {Router} = require('express');
const logsRouter = Router();
const logsController = require('./logs.controller');


logsRouter.post('/capped',logsController.createCappedCollection);

module.exports = logsRouter;