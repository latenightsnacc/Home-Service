const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.send("Hello world!")
})
app.post("/new", (req,res) => {
    
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})