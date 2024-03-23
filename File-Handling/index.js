const fs = require("fs");


//Create file with Async function--
// fs.writeFile("Hello i am new file with asyn",(err,result) =>{
//     if(err){
//         console.log("file not created",err)
//     }else{
//         result = console.log("Success")
//     }
// })


//Create file with Sync function--
// fs.writeFileSyncs("log.txt",("Hello i am new file"))
// console.log("Hey i am JavaScript")


//Read file with Sync Func--
// const result = fs.readFileSync("log1.txt", "utf-8")
// console.log(result)

//Copy file with Sync Func--
// fs.copyFileSync("log.txt","log2.txt");


//Append file with Sync Func--
// fs.appendFileSync("log.txt","hello baby\n");

//Delete file with Async Func--
fs.unlinkSync("log2.txt");


//------We can mostly use Async function----------