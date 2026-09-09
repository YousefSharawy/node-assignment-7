const { Router } = require("express");
const booksRouter = Router();
const booksController = require('./books.controller');

booksRouter.post('/', booksController.createExplicitCollection);


module.exports = booksRouter;
