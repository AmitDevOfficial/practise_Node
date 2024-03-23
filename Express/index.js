const express = require("express");
const app = express();
const port = 8000;

// console.log("Hey i am express");
app.get("/",(req,res) =>{
    res.send("HEy i am Express")
});

app.get("/about",(req,res) => {
    res.send("i am about page")
})

app.get("/contact", (req,res) =>{
    res.send("i am contact us page")
})

app.listen(port,() => console.log("Server Started.."));