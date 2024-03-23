const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const app = express();


//Lets connect the servere MongoDB--
mongoose.connect("mongodb://127.0.0.1:27017/client")
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log("MongoDB Error", error))


//Define the Schema Structure--
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
    jobTitle: {
        type: String
    }
})


//Creating Schema as Model--
const USER = mongoose.model("user", userSchema);
console.log(USER);

app.use(express.urlencoded({ extended: false }))    

app.get("/", async(req, res) => {
    const user = await USER.find({});
    return res.json(user); 
});


app.post("/user", async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({ msg: "All Fields are required"});
    }
    
    const user = await USER.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    return res.status(201).json({ msg: "Success = Data Insterted Successfully" });
})


app.listen(port, () => console.log("Server Started...", port));