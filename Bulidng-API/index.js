const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const port = 8000;

app.get("/", (req, res) => {
    res.send("Home Page Amit"); 
})

app.get("/users", (req, res) => {
    const html = `<ul>
        ${users.map(users => `<li>${users.first_name}</li>`).join("")} 
    </ul>`
    res.send(html);
})

app.get("/api/users", (req, res) => {
    res.json(users); 
})          

app.route("/api/users/:id").get((req,res) =>{   
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).patch((req,res) =>{
    console.log("Status Pending");
}).delete((req,res) =>{
    console.log("Status Pending");
});


// app.get("/api/users/:id",(req,res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })


app.listen(port, () => console.log("Server Started.."));        