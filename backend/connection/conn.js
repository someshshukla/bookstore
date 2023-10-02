const mongoose  = require("mongoose");
mongoose.connect("mongodb+srv://somesh:1234@bookstore.xosjbyo.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(() => console.log("Connected"));
