const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
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
    const len = Object.keys(req.body).length;
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
            for(let i = -1; i <= len; i++){
                dues_for = req.body[i].dues_for;
                year =  req.body[i].year; 
                collection = req.body[i].collection;
                status = req.body[i].newCollection_dues;
                amount_paid =req.body[i].amt_paid;
                corper_id = req.body[i].id;
                corper_name = req.body[i].name;
                corper_statecode = req.body[i].statecode;
                corper_batch = req.body[i].batch;
                corper_lga = req.body[i].lga;
                cds = req.body[i].cds_group;
                console.log(cds,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,collection,status,amount_paid,dues_for,year);
                db.query('INSERT INTO dues_collection (cds_group,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,collection,dues,amount_paid,month,year) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
                    [cds,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,collection,status,amount_paid,dues_for,year], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        res.send(`${collection} for ${corper_name} has been saved.`);
                        console.log(`${collection} for ${corper_name} has been saved.`);
                    }
                })
            } 
            
        } catch(e) {
            console.log(e);
        }
        
    
    
})
// Record Attendance
app.

app.listen(3001, () => {
    console.log("Server started on port 3001")
})