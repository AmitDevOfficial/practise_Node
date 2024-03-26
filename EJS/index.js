const express = require("express");
const path = require("path");
const { connectMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")
const URL = require("./models/url")

const port = 8000;
const app = express();

connectMongoDB("mongodb://127.0.0.1:27017/customer-url")
.then(() => console.log("MongoDB Connected"))
.catch(error => console.log("MongoDB Not Connected", error));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/url", urlRoute);
app.use("/", staticRoute)

app.get("/url/:shortid", async(req,res) => {
    const shortId = req.params.shortid;
    const entery = await URL.findOneAndUpdate(
        {
            shortId
        },{
            $push: {
                visitHistory: {
                    timestamps: Date.now(),
                }
            }
        }
        )
        res.redirect(entery.redirectURL)
})

app.listen(port, () => console.log("Server Started at Port...", port));