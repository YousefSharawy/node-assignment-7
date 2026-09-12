const { Router } = require("express");
const booksRouter = Router();
const booksController = require('./books.controller');

booksRouter.post('/create', booksController.createExplicitCollection);
booksRouter.post('/index', booksController.createIndexOnTitle)
booksRouter.post('', booksController.insertDoc)
booksRouter.post('/batch', booksController.insertCollection)
booksRouter.patch('/Future',booksController.updateBookYear);
booksRouter.get('/title',booksController.getBookByTitle);
booksRouter.get('/year',booksController.getBooksByYear);
booksRouter.get('/genre',booksController.getBooksByGenre);
booksRouter.get('/skip-limit',booksController.getFirstTwoBooks);
booksRouter.get('/year-integer',booksController.getBooksByIntegerYear);


module.exports = booksRouter;
