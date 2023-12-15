const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employee"
})

app.get('/',(req,res)=>{
    const sql="SELECT * FROM empreg";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.post('/', (req, res, next) => {
    const sql = "INSERT INTO empreg (EmployeeName, DOB, Age, Department, Designation, Salary, Address, Phone_No) VALUES (?, ?, ?, ?, ?,?,?,?)";
    const values = [
        req.body.EmployeeName,
        req.body.DOB,
        req.body.Age,
        req.body.Department,
        req.body.Designation,
        req.body.Salary,
        req.body.Address,
        req.body.Phone_No,
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("created");
    });
});

  
app.delete('/:Register_Number', (req, res, next) => {
    const sql = "DELETE FROM empreg WHERE EmployeeName= ?";
    const EmployeeName=req.params.EmployeeName;

    db.query(sql, [EmployeeName], (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("deleted");
    });
});



app.listen(3000, ()=>{
    console.log("Listening...");
})