const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
// const bodyParser = require("body-parser");
app.use(cors());
// const jsonParser = bodyParser.json();
app.use(express.urlencoded({ extended: true }));
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
app.get("/members", (req,res) => {
    db.query("SELECT * FROM corpers", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})
// New Collection
app.post("/try", (req,res) => {
    console.log(req.body);
})
// New Attendance
app.post("/trynew", (req,res) => {
    console.log(req.body);
    const lt = Object.keys(req.body).length;
    
})
// Create New Minutes
app.post("/new", (req,res) => {
    console.log(req.body);
    try {
        const type = req.body.type;
        const date = req.body.date;
        const venue = req.body.venue;
        const topic = req.body.topic;
        const start = req.body.start;
        const end = req.body.end;
        const minutes = req.body.minutes;
    
        db.query('INSERT INTO notes (date, venue, topic, start_time, end_time, type, minutes) VALUES(?,?,?,?,?,?,?)', [date,venue,topic,start,end,type,minutes], (err, result) => {
             if(err){
                 console.log(err)
             } else {
                 res.send("Values Inserted");
                 console.log(`${req.body.type} minutes created.`);
             }
         })
    } catch (e) {
        console.log(e);
    }   
})
// Create New Monthly Dues
app.post("/newcollection", function (req, res) {
    console.log(req.body);    
})
// Record Attendance
app.post("/newattendance", (req,res) => {
    console.log(req.body);
})

app.listen(3001, () => {
    console.log("Server started on port 3001")
})