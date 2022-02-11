const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
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
app.post("/newcollection", (req,res) => {
    console.log(req.body[0].year);
    console.log(req.body)
        try {
            console.log('try block'); 
            let dues_for = '';
            let year =  ''; 
            let collection = '';
            let status = '';
            let amount_paid ='';
            let corper_id = '';
            let corper_name = '';
            let corper_statecode = '';
            let corper_batch = '';
            let corper_lga = '';
            let cds = '';

            for(let a in req.body) {
                dues_for = a.dues_for;
                year =  a.year; 
                collection = a.collection;
                status = a.newCollection_dues;
                amount_paid =a.amt_paid;
                corper_id = a.id;
                corper_name = a.name;
                corper_statecode = a.statecode;
                corper_batch = a.batch;
                corper_lga = a.lga;
                cds = a.cds_group;
                console.log(a.year);
                // console.log(cds,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,collection,status,amount_paid,dues_for,year);
            }
        } catch(e) {
            console.log(e);
        }
        
    
    //  try {
    //     const title = req.body.title;
    //     const month = req.body.;
    //     const id = req.body.venue;
    //     const name = req.body.topic;
    //     const statecode = req.body.start;
    //     const batch = req.body.end;
    //     const lga = req.body.minutes;
    //     const dues = req.body.m_dues
    
    //     db.query('INSERT INTO notes (date, venue, topic, start_time, end_time, type, minutes) VALUES(?,?,?,?,?,?,?)', [date,venue,topic,start,end,type,minutes], (err, result) => {
    //          if(err){
    //              console.log(err)
    //          } else {
    //              res.send("Values Inserted");
    //              console.log(`${req.body.type} minutes created.`);
    //          }
    //      })
    // } catch (e) {
    //     console.log(e);
    // }   
})
// Record Attendance
app.post("/recordattendance", (req,res) => {
    
    console.log(req.body);
    try {
        const date = req.body.date;
        const id = req.body.id;
        const name = req.body.name;
        const state_code = req.body.state_code;
        const batch = req.body.batch;
        const attendance = req.body.attendance;
        const comment = req.body.comment;
    
        db.query('INSERT INTO attendance (date, id, name, state_code, batch, attendance, comment) VALUES(?,?,?,?,?,?,?)', [date,id,name,state_code,batch,attendance,comment], (err, result) => {
             if(err){
                 console.log(err)
             } else {
                 res.send("New Attendance Recorded");
                 console.log(`New Attendance for ${req.body.date} recorded.`);
             }
         })
    } catch (e) {
        console.log(e);
    }   
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
app.listen(3001, () => {
    console.log("Server started on port 3001")
})