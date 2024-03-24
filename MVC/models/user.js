const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    },
    jobTitle: {
        type: String
    }
});

//Creating Schema as Model--
const  USER = mongoose.model("user",userSchema);
console.log(USER)

module.exports = USER;