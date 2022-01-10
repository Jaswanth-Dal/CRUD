const express = require("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'1234',
    database: 'contacthandler'
});

app.post('/create', (req, res) => {
    const Firstname = req.body.Firstname;
    const Lastname = req.body.Lastname;
    const Email = req.body.Email;
    const Phone = req.body.Phone;


    db.query("INSERT INTO contacts(Firstname,Lastname,Email,Phone) values(?,?,?,?)",
        [Firstname, Lastname, Email, Phone],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});


app.get('/employees',(req,res)=>{
    db.query("SELECT * FROM contacts",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
})

app.listen(3001, () => {
    console.log("server is running on port 3001");
})