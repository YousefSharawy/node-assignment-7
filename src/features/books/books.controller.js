const booksService = require("./books.service");


const createExplicitCollection = async (req, res, next) => {
    try {
        await booksService.createExplicitCollection();
        res.status(201).json({ message: "Collection created successfully", success: true });
    } catch (error) {
        next(error);
    }
}
const createIndexOnTitle = async (req, res, next) => {
    try {
        await booksService.createIndexOnTitle();
        res.status(201).json({ title: 1 });
    } catch (error) {
        next(error);
    }
}
const insertDoc = async (req, res, next) => {
    try {
        const { title, author, year, genres } = req.body;
        const response = await booksService.insertDoc(title, author, year, genres);
        res.status(201).json({ acknowledged: response.acknowledged, id: response.insertedId });
    } catch (error) {
        next(error);
    }
}
const insertCollection = async (req, res, next) => {
    try {
        const collection = req.body;
        const response = await booksService.insertCollection(collection);
        res.status(201).json({ acknowledged: response.acknowledged, id: response.insertedIds });
    } catch (error) {
        next(error);
    }
}
const updateBookYear = async (req, res, next) => {
    try {
        const response = await booksService.updateBookYear();
        res.status(201).json({ acknowledged: response.acknowledged, matchedCount: response.matchedCount, modifiedCount: response.modifiedCount });
    } catch (error) {
        next(error);
    }
}
const getBookByTitle = async (req, res, next) => {
    try {
        const title = req.query.title
        const response = await booksService.getBookByTitle(title);
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const getBooksByYear = async (req, res, next) => {
    try {
        const from = Number(req.query.from);
        const to = Number(req.query.to);
        const response = await booksService.getBooksByYear(from, to);
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const getBooksByGenre = async (req, res, next) => {
    try {
        const genre = req.query.genre;
        const response = await booksService.getBooksByGenre(genre);
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const getFirstTwoBooks = async (req, res, next) => {
    try {
        const response = await booksService.getFirstTwoBooks();
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const getBooksByIntegerYear = async (req, res, next) => {
    try {
        const response = await booksService.getBooksByIntegerYear();
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const getBooksExcludeingGenres = async (req, res, next) => {
    try {
        const response = await booksService.getBooksExcludeingGenres();
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const deleteBooksBeforeYear = async (req, res, next) => {
    try {
        const year = Number(req.query.year);
        const response = await booksService.deleteBooksBeforeYear(year);
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const aggregateOne = async (req, res, next) => {
    try {
        const response = await booksService.aggregateOne();
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
const aggregateTWo = async (req, res, next) => {
    try {
        const response = await booksService.aggregateTWo();
        res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}
module.exports = {
    createExplicitCollection,
    createIndexOnTitle,
    insertDoc,
    insertCollection,
    updateBookYear,
    getBookByTitle,
    getBooksByYear,
    getBooksByGenre,
    getFirstTwoBooks,
    getBooksByIntegerYear,
    getBooksExcludeingGenres,
    deleteBooksBeforeYear,
    aggregateOne,
    aggregateTWo
}