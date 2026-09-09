const { Router } = require('express');
const authorRouter = Router();
const authorController = require('./author.controller')

authorRouter.post('/',authorController.createImplicitCollection);


module.exports =  authorRouter;