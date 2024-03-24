const fs = require("fs");


//Similer Middleware--
function logReqRes(filename){
    return(req,res,next) => {
        fs.appendFile("log.text",`\n ${Date.now()} : ${req.method} : ${req.path}`,(err,data) =>{
            next();
        })
    }
}

module.exports = {
    logReqRes
}