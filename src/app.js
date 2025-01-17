const express = require("express");
const connectDB = require("./config/database");
const app =express();
const User = require("./models/user");
 
app.use(express.json());

app.post("/signup",async(req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        res.send("user is created successfully");
    }
    catch (err){
        res.status(500).send("error"+err.message);
    }
    
});

// database connection
connectDB()
    .then(()=>{
        console.log("database is connected");
        app.listen(7777,(req,res)=>{
            console.log("Port runing in : "+7777);
        });
    })
    .catch((err)=>{
        console.error("error : ");
    });
