const USER = require("../models/user");

async function handelGetAllUsers(req,res) {
    const user = await USER.find({});
    return res.json(user);
};

async function handelFindByUsers(req,res) {
    const user = await USER.findById(req.params.id);
    return res.json(user);
};

async function handelCreate(req,res) {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields are required"})
    }
    const user = await USER.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    return res.status(201).json({ msg: "User created Successfully" });
};

async function handelUpdateUser(req,res) {
    const user = await USER.findByIdAndUpdate(req.params.id, { lastName: "Updated"});
    return res.status(201).json({ msg: "User Updated Successfully" });
};

async function handelDeleteUser(req,res) {
    const user = await USER.findByIdAndDelete(req.params.id);
    return res.status(201).json({ msg: "User Deleted Successfully "});
}
module.exports = {
    handelGetAllUsers,
    handelCreate,
    handelFindByUsers,
    handelUpdateUser,
    handelDeleteUser
}