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
app.post("/newmonthlydues", (req,res) => {
    console.log(req.body);
        try {
            const title = req.body.title;
            const newTable = `CREATE TABLE ${title} ( corper_id INT NOT NULL , corper_name TEXT NOT NULL , corper_statecode TEXT NOT NULL , corper_batch TEXT NOT NULL , corper_lga TEXT NOT NULL , monthly_dues TEXT NOT NULL , month TEXT NOT NULL , PRIMARY KEY (corper_id))`;
            db.query(newTable, (err,result) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log('Table created.');
                }
            })    
            // let collection_month = '';
            //     let corper_id = '';
            //     let corper_name = '';
            //     let corper_statecode = '';
            //     let corper_batch = '';
            //     let corper_lga = '';

            // for(let a in req.body) {
            //     collection_month = a.month;
            //     corper_id = a.id;
            //     corper_name = a.name;
            //     corper_statecode = a.statecode;
            //     corper_batch = a.batch;
            //     corper_lga = a.lga;

            // }
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