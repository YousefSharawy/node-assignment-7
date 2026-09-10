const { Router } = require("express");
const booksRouter = Router();
const booksController = require('./books.controller');

booksRouter.post('/create', booksController.createExplicitCollection);
booksRouter.post('/index', booksController.createIndexOnTitle)
booksRouter.post('', booksController.insertDoc)
booksRouter.post('/batch', booksController.insertCollection)

module.exports = booksRouter;
