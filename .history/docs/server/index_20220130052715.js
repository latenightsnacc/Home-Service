const express = require("express");
const app = express();

app.post("/new", ())
app.get("/", (req,res) => {
    res.send("Hello world!")
})
app.listen(3001, () => {
    console.log("Server started on port 3001")
})