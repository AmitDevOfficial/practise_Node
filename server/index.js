const http = require("http");
const fs = require("fs");
const url = require("url");

//In this code we can apply URl Handling also--


const myServer = http.createServer((req, res) => {
    // res.end("Hello From Server Amit")
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Request Recived..\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("save.txt",log, (err,data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Hey i am your HOme Page")
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hey ${username}`)
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end("Here is the Search " + search); 
                break; 
            default:
                res.end("Oops 404 Error Not found")
                break;
        }       
        console.log("Server Started");
    });
   
})

myServer.listen(8000, () => console.log("Server Started..."))