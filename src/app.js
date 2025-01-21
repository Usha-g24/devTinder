const express = require("express");
const connectDB = require("./config/database");
const app =express();
const User = require("./models/user");
 
app.use(express.json());
// new  user to signup
app.post("/signup",async(req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        res.send("user Added successfully");
    }
    catch (err){
        res.status(500).send("error"+err.message);
    }
    
});

// get all user from API
app.get("/user",async(req,res)=>{
    
    const userEmail = req.body.email;
   
    try{
        console.log("userEmail : "+userEmail);
        const user = await  User.findOne({email:userEmail});
        if(!user){
            res.status(404).send("user found"); 
        }
        else{
            res.send(user);
        }
    }
    catch(err){
        res.status(500).send("something went wrong");
    }

});

 app.get("/feed",async(req,res)=>{
    const userEmail = req.body.email;
    try{
    const users = await User.find({});
    res.send(users);
    }
    catch(err){
        res.status(500).send("error"+err.message);
    }

 });
// delete from API
 app.delete("/user",async(req,res)=>{
    const  userId = req.body.userId; 
    try{
        const user = await User.findByIdAndDelete(userId);
        res.send("user delete successfully");
    }
    catch(err){
        res.status(500).send("error"+err.message);
    }
 });
// update from API
app.patch("/user",async(req,res)=>{
    const userId = req.body.userId;
    const update = req.body;
    console.log("update : "+update);
    try{
        const user = await User.findByIdAndUpdate(userId,update);
        res.send('user update successfully');
    }
    catch(err){
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
