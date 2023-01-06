const express = require("express");
const message = require("./routers/message.js");
const router = require("./routers/message");
const connectDB = require("./db/connect");
const app = express();
const bodyParser = require("body-parser");
const {createServer} = require("http");
const {Server} = require("socket.io");
const cors = require("cors");

const jsonParser = bodyParser.json(); 

const httpServer = createServer(app);

const io = new Server(httpServer,{
    cors:{
        origin: ["http://localhost:3000","https://simple-chat-frontend.onrender.com"],
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
})

const urlencodedParser = bodyParser.urlencoded({ extended: false })

async function startApp(){
    try{
        await connectDB()
        httpServer.listen(3080);
        console.log("Server listening on 3080");
    }
    catch(e){
        console.log(e);
    }
}

startApp();
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use("/messages",jsonParser,router)
app.use(express.json())
app.use(express.urlencoded({extended: false}));

io.on("connection", (socket) => {console.log("Usuario Conectado")
socket.on("message",(msg) => {
    console.log("SOCKET:" , JSON.parse(msg))
    socket.broadcast.emit("Send_msg",msg);
},
socket.on("userName", (username) => {console.log(username)})
)})

