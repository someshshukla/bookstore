const router = require("express").Router();
const bookModel = require("../models/booksModel");

//post request

router.post("/add", async(req, res) => {
    try{
        const newBook = new bookModel(data);
        await newBook.save().then((res) => {
            res.status(200).json({message : "Book Added Successfully"});
        });
    } catch(error) {
        console.log(error);
    }
});

module.exports = router;