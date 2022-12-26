const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    text : {
        type : String,
        required : [true, "No existe mensaje"],
        maxlenght: 100 
    },
    date: {
        type : Date,
        required: [true, "No se dio fecha"]
    },
    author: {
        type: String,
        required: [true, "No existe autor"]
    }
})

module.exports = mongoose.model("Message",MessageSchema)