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

app.use(express.urlencoded({ extended: false }));

app.get("/users", async (req, res) => {
    const user = await USER.find({})
    return res.send(user)
})

app
.route("/users/:id")
.get(async(req,res) => {
    const user = await USER.findById(req.params.id)
    if(!user) return res.json({error: "Oops..!!! User not found"});
    return res.json(user);
})
.patch(async(req,res)=>{
    const user = await USER.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
    res.json({ status: "Updated Succesfull"})
})
.delete(async(req,res) =>{
    const user = await USER.findByIdAndDelete(req.params.id)
    res.json({ status: "User Deleted Succesfull"})
})

app.post("/users", async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All Fields are required" });
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