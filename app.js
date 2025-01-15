const express = require("express");
const app =express();
app.use('/text',(req,res)=>{
    res.send("server is created");
});
app.use('/hello',(req,res)=>{
    res.send("helo helo");
});
app.listen(7777,()=>{
    console.log("sucessfully register");
});