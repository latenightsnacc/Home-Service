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

// Checks database Connection
db.connect(function (err) {
    if(err) {
        return console.error(`Error: ${err.message}`);
    }
    console.log('Connected to Database Successfully.');
})
 
app.get("/", (req,res) => {
    res.send("Hello world!")
})
app.post("/new", (req,res) => {
    console.log(req.body);
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})