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
    const lt = Object.keys(req.body);
    try{
        for(var i = 0; i < lt.length; i++){
            let collection_date = req.body[i].attendance_date;
            let collection_month = req.body[i].attendance_month;
            let collection_year = req.body[i].attendance_year;
            let collection_for = req.body[i].attendance_year;
            let a_paid = req.body[i].attendance_for;
            let c_id = req.body[i].corper_id;
            let c_name = req.body[i].corper_name;
            let c_statecode = req.body[i].corper_statecode;
            let c_batch = req.body[i].corper_batch;
            let c_lga = req.body[i].corper_lga;
            let c_cds = req.body[i].corper_cds;
            
            let comment = req.body[i].comment;
            console.log([a_date,a_month,a_year,c_id,c_name,c_statecode,c_batch,c_lga,c_cds,a_type,c_attendance,comment]);
            try{
                db.query('INSERT INTO attendance (attendance_type,attendance_date,attendance_month,attendance_year,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,corper_cds,corper_attendance,comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',
                    [a_type,a_date,a_month,a_year,c_id,c_name,c_statecode,c_batch,c_lga,c_cds,c_attendance,comment], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        
                        console.log(`Attendance for corper:${c_name} for ${c_cds} ${a_type} on ${a_date} has been recorded.`);
                    }
                })
            }catch(e){
                console.log(e)
            }
            
        }
    }catch(e){
        console.log(e)
    }
})
// New Attendance
app.post("/trynew", (req,res) => {
    console.log(req.body);
    const lt = Object.keys(req.body);
    try{
        for(var i = 0; i < lt.length; i++){
            let a_date = req.body[i].attendance_date;
            let a_month = req.body[i].attendance_month;
            let a_year = req.body[i].attendance_year;
            let c_id = req.body[i].corper_id;
            let c_name = req.body[i].corper_name;
            let c_statecode = req.body[i].corper_statecode;
            let c_batch = req.body[i].corper_batch;
            let c_lga = req.body[i].corper_lga;
            let c_cds = req.body[i].corper_cds;
            let c_attendance = req.body[i].corper_attendance;
            let a_type = req.body[i].attendance_for;
            let comment = req.body[i].comment;
            console.log([a_date,a_month,a_year,c_id,c_name,c_statecode,c_batch,c_lga,c_cds,a_type,c_attendance,comment]);
            try{
                db.query('INSERT INTO attendance (attendance_type,attendance_date,attendance_month,attendance_year,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,corper_cds,corper_attendance,comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',
                    [a_type,a_date,a_month,a_year,c_id,c_name,c_statecode,c_batch,c_lga,c_cds,c_attendance,comment], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        
                        console.log(`Attendance for corper:${c_name} for ${c_cds} ${a_type} on ${a_date} has been recorded.`);
                    }
                })
            }catch(e){
                console.log(e)
            }
            
        }
    }catch(e){
        console.log(e)
    }
    
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