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
module.exports = {
    createExplicitCollection,
    createIndexOnTitle,
    insertDoc,
    insertCollection,
    updateBookYear
}