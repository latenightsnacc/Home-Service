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
// Get list of all members
app.get("/members", (req,res) => {
    db.query("SELECT * FROM corpers", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// Post New Monthly Dues
app.post("/monthlyDues", (req,res) => {
    console.log(req.body);
    const lt = Object.keys(req.body);
    try{
        for(var i = 0; i < lt.length; i++){
            let collection_date = req.body[i].collection_date;
            let collection_month = req.body[i].dues_for;
            let collection_year = req.body[i].year;
            let collection_for = req.body[i].collection;
            let payment_status = req.body[i].newCollection_dues;
            let a_paid = req.body[i].amt_paid;
            let c_id = req.body[i].id;
            let c_name = req.body[i].name;
            let c_statecode = req.body[i].statecode;
            let c_batch = req.body[i].batch;
            let c_lga = req.body[i].lga;
            let c_cds = req.body[i].cds_group;
            
            try{
                db.query('INSERT IGNORE INTO monthly_dues (date_recorded,month,year,payment_status,amount_paid,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,corper_cds) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
                    [collection_date,collection_month,collection_year,payment_status,a_paid,c_id,c_name,c_statecode,c_batch,c_lga,c_cds], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log(`Corper:${c_name} Dues:${collection_for} in C.D.S:${c_cds}  Status: ${payment_status} recorded.`);
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
// Post New Project Dues
app.post("/projectDues", (req,res) => {
    console.log(req.body);
    const lt = Object.keys(req.body);
    try{
        for(var i = 0; i < lt.length; i++){
            let project_batch = req.body[i].project_batch;
            let collection_for = req.body[i].collection;
            let payment_status = req.body[i].newCollection_dues;
            let a_paid = req.body[i].amt_paid;
            let c_id = req.body[i].id;
            let c_name = req.body[i].name;
            let c_statecode = req.body[i].statecode;
            let c_batch = req.body[i].batch;
            let c_lga = req.body[i].lga;
            let c_cds = req.body[i].cds_group;
            let project_title = `${collection_for} for ${project_batch}`;
            console.log([project_batch,project_title,payment_status,a_paid,c_id,c_name,c_statecode,c_batch,c_lga,c_cds]);
            try{
                db.query('INSERT INTO project_dues (project_batch,project_title,payment_status,amount_paid,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,corper_cds) VALUES(?,?,?,?,?,?,?,?,?,?)',
                    [project_batch,project_title,payment_status,a_paid,c_id,c_name,c_statecode,c_batch,c_lga,c_cds], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log(`Corper:${c_name} Dues:${collection_for} Project Title:${project_title} C.D.S:${c_cds}  Status: ${payment_status} recorded.`);
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
// Post New Event Dues
app.post("/eventDues", (req,res) => {
    console.log(req.body);
    const lt = Object.keys(req.body);
    try{
        for(var i = 0; i < lt.length; i++){
            let event_title = req.body[i].event_title;
            let payment_status = req.body[i].newCollection_dues;
            let a_paid = req.body[i].amt_paid;
            let c_id = req.body[i].id;
            let c_name = req.body[i].name;
            let c_statecode = req.body[i].statecode;
            let c_batch = req.body[i].batch;
            let c_lga = req.body[i].lga;
            let c_cds = req.body[i].cds_group;
            console.log([event_title,payment_status,a_paid,c_id,c_name,c_statecode,c_batch,c_lga,c_cds]);
            try{
                db.query('INSERT INTO event_dues (event_title,payment_status,amount_paid,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,corper_cds) VALUES(?,?,?,?,?,?,?,?,?)',
                    [event_title,payment_status,a_paid,c_id,c_name,c_statecode,c_batch,c_lga,c_cds], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log(` Event Title:${event_title} Corper:${c_name} C.D.S:${c_cds}  Status: ${payment_status}:${a_paid} recorded.`);
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
// Post New Attendance
app.post("/newAttendance", (req,res) => {
    console.log(req.body);
    const lt = Object.keys(req.body);
    try{
        for(var i = 0; i < lt.length; i++){
            let date = req.body[i].date_recorded;
            let month = req.body[i].month_recorded;
            let year = req.body[i].year_recorded;
            let attd_type = req.body[i].attend_for;
            let attd_status = req.body[i].attendance_status;
            let comment = req.body[i].comt;
            let c_id = req.body[i].id;
            let c_name = req.body[i].name;
            let c_statecode = req.body[i].statecode;
            let c_batch = req.body[i].batch;
            let c_lga = req.body[i].lga;
            let c_cds = req.body[i].cds_group;
            // console.log([date,month,year,attd_type,attd_status,c_id,c_name,c_statecode,c_batch,c_lga,c_cds]);
            try{
                db.query('INSERT INTO corper_attendance (attendance_date,attendance_month,attendance_year,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,corper_cds,attendance_type,attendance_stat,comment) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',
                    [date,month,year,c_id,c_name,c_statecode,c_batch,c_lga,c_cds,attd_type,attd_status,comment], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log(` Attedance for ${attd_type} Date:${date} Corper:${c_name} C.D.S:${c_cds}  Status: ${attd_status} recorded.`);
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


// Get All from Monthly_Dues Table
app.get("/mDues", (req,res) => {
    db.query(`SELECT * FROM monthly_dues `, (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
    
})

// Get All from Project_Dues Table
app.get("/pDues", (req,res) => {
    db.query(`SELECT * FROM project_dues `, (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
    
})

// Get All from Event_Dues Table
app.get("/eDues", (req,res) => {
    db.query(`SELECT * FROM event_dues `, (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
    
})
// Get All Notes from Event_Dues Table
app.get("/notes", (req,res) => {
    db.query(`SELECT * FROM notes `, (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
    
})
// Get specific Note from Notes Table
app.get("/notes/:minuteId", (req,res) => {
    const noteId = req.params.minuteId;
    
    db.query(`SELECT * FROM notes WHERE id = ? `,noteId, (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
            console.log(result);
        }
    })
    
})
// New Collection
app.post("/try", (req,res) => {
    console.log(req.body);
    const lt = Object.keys(req.body);
    try{
        for(var i = 0; i < lt.length; i++){
            let collection_date = req.body[i].collection_date;
            let collection_month = req.body[i].dues_for;
            let collection_year = req.body[i].year;
            let collection_for = req.body[i].collection;
            let payment_status = req.body[i].newCollection_dues;
            let a_paid = req.body[i].amt_paid;
            let c_id = req.body[i].id;
            let c_name = req.body[i].name;
            let c_statecode = req.body[i].statecode;
            let c_batch = req.body[i].batch;
            let c_lga = req.body[i].lga;
            let c_cds = req.body[i].cds_group;
            console.log([collection_date,collection_month,collection_year,collection_for,payment_status,a_paid,c_id,c_name,c_statecode,c_batch,c_lga,c_cds]);
            try{
                db.query('INSERT INTO dues_collection (collection_date,collection_month,collection_year,collection_for,payment_status,amount_paid,corper_id,corper_name,corper_statecode,corper_batch,corper_lga,cds_group) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',
                    [collection_date,collection_month,collection_year,collection_for,payment_status,a_paid,c_id,c_name,c_statecode,c_batch,c_lga,c_cds], (err, result) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log(`Corper:${c_name} Dues:${collection_for} in C.D.S:${c_cds}  Status: ${payment_status} recorded.`);
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
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
app.get("/dues", (req,res) => {
    db.query(`SELECT * FROM dues_collection WHERE collection_for = 'monthly_dues' AND collection_month = 'February' `, (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
    
})
app.get("/dues/:collectionMonth/:collectionYear/:collectionFor", (req,res) => {
    const collectionM = req.params.collectionMonth;
    const collectionY = req.params.collectionYear;
    const collection = req.params.collectionFor;
    db.query(`SELECT * FROM dues_collection WHERE collection_month = ? AND collection_year = ? AND collection_for = ? `,[collectionM, collectionY, collection], (err,result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
            console.log(result);
        }
    })
    
})

// Post New Note
app.post("/new", (req,res) => {
    console.log(req.body);
    try {
        const type = req.body.type;
        const date = req.body.date;
        const month = req.body.date;
        const year = req.body.date;
        const venue = req.body.venue;
        const topic = req.body.topic;
        const start = req.body.start;
        const end = req.body.end;
        const minutes = req.body.minutes;
    
        db.query('INSERT INTO notes (date,month,year, venue, topic, start_time, end_time, type, minutes) VALUES(?,?,?,?,?,?,?,?,?)', [date,month,year,venue,topic,start,end,type,minutes], (err, result) => {
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

app.listen(3001, () => {
    console.log("Server started on port 3001")
})