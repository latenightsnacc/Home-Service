const express = require("express");
const app = express();

app.use(ex)

app.get("/", (req,res) => {
    res.send("Hello world!")
})
app.post("/new", (req,res) => {
    console.log(req.body);
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})