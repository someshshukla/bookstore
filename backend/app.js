const express = require("express");
const app = express();
require("./connection/conn");
app.use(express.json);
app.get("/", (req, res)=> {
    res.send("Hello")
});

app.listen(3000, ()=> {
    console.log("Server Started Successfully");
});