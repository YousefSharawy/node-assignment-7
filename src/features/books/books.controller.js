const booksService = require("./books.service");


const createExplicitCollection = async (req,res,next)=>{
    try {
        await booksService.createExplicitCollection();
        res.status(201).json({message:"Collection created successfully",success:true});
    } catch (error) {
        next(error);
    }
}
module.exports={
    createExplicitCollection
}