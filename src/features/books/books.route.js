const { Router } = require("express");
const booksRouter = Router();
const booksController = require('./books.controller');

booksRouter.post('/', booksController.createExplicitCollection);
booksRouter.post('/index',booksController.createIndexOnTitle)


module.exports = booksRouter;
