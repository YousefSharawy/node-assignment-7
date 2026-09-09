const booksService = require("./books.service");


const createExplicitCollection = async (req,res,next)=>{
    try {
        await booksService.createExplicitCollection();
        res.status(201).json({message:"Collection created successfully",success:true});
    } catch (error) {
        next(error);
    }
}
const createIndexOnTitle = async (req,res,next)=>{
    try {
        await booksService.createIndexOnTitle();
        res.status(201).json({title:1});
    } catch (error) {
        next(error);
    }
}
module.exports={
    createExplicitCollection,
    createIndexOnTitle
}