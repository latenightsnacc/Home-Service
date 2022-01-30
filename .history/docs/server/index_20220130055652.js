const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

//Database Connection
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'e-attendance'
});

app.get("/", (req,res) => {
    res.send("Hello world!")
})
app.post("/new", (req,res) => {
    console.log(req.body);
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})