const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 8000;

//Adding Middleware -- for PostMan
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.send("Home Page");
})

//MiddleWare From Express
app.use((req,res,next)=>{
    // console.log("Hello from Middleware");
    // res.send("Hey i am Middleware")
    next();
})

app.get("/users",(req,res) =>{
    res.json(users);
})

app.route("/users/:id") 
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({msg: "User not Found..."})
    return res.json(user);
})
  
app.post("/users",(req,res) =>{
    const body = req.body;      
    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title){
        return res.status(400).json({msg: "All Fields are requird"});
    }
    console.log("Body",body);
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.status(201).json({status: "success", id: users.length})
    })
})

app.listen(port,() => console.log("Server Started.."))