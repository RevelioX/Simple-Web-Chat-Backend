const express = require("express");
const message = require("./routers/message.js");
const router = require("./routers/message");
const connectDB = require("./db/connect");
const app = express();

async function startApp(){
    try{
        await connectDB()
        app.listen(4000);
        console.log("Server listening on 4000");
    }
    catch(e){
        console.log(e);
    }
}

startApp();
app.use("/chat",router)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

