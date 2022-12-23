const express = require("express");
const message = require("./routers/message.js");
const app = express();

function startApp(){
    try{
        app.listen(4000);
        console.log("Server listening on 4000");
    }
    catch(e){
        console.log(e);
    }
}

startApp();
app.use("/chat",message)

