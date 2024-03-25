const shortid = require("shortid");
const URL = require("../models/url")
// async function handelShowHome(req,res){
//     return res.send("Hello i am Home Page")
// }

async function handelGenerateNewUrl(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: "URL is required"});
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    })
    return res.status(201).json({ id: shortID});
}

module.exports = {
    handelGenerateNewUrl
}