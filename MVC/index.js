const express = require("express");
const { connectMongoDB } = require("./connect");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares/middleware");

const app = express();
const port = 8000;


//Connect with MongoDB DataBase--
connectMongoDB("mongodb://127.0.0.1:27017/client")
.then(() =>{
    console.error("MongoDb Connected");
})
.catch(error => {
    console.error("MongoDb not Connected", error);
})

//Creating Middleware -- Connect with PostMan--
app.use(express.urlencoded({ extended: false}));
app.use(logReqRes ("log.txt"));

app.use("/", userRouter);

app.listen(port, () => console.log("Server Connnected at PORT", port));