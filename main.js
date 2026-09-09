const express = require("express");
const app = express();
app.use(express.json());
const booksRouter = require("./src/features/books/books.route");

app.use('/collection/books',booksRouter);


app.use((req,res)=>{
    res.status(404).json({message:"Invalid route"});
})
app.use((err,req,res,next)=>{
    res.status(400).json(
        {
            errorMessage:err.message,
            stack:err.stack
        });
})
app.listen(3000, () => {
    console.log("server is on port:3000");
});