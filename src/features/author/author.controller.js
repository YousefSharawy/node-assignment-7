const authorService = require("./author.service");


const createImplicitCollection = async (req, res, next) => {
    try {
        const { name, nationality } = req.body;
        const response = await authorService.createImplicitCollection(name, nationality);
        res.status(201).json({
            iinsertedId: response.insertedId,
            acknowledged: response.acknowledged
        });
    } catch (error) {
        next(error);
    }
}
module.exports = {
    createImplicitCollection,
} 