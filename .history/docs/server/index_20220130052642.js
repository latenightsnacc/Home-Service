const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Reg")
})
app.listen(3001, () => {
    console.log("Server started on port 3001")
})