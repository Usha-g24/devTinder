const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fristName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    gender:{
        type:String,
    },
    email:{
        type: String,
    },
    password:{
        type:String
    }
});


module.exports=  mongoose.model("User",userSchema);