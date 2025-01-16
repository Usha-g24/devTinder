const express = require("express");
const app =express();

/// **order of the code is very important**///

// app.use('/text',(req,res)=>{
//     res.send("E-SAREES");
// });

// app.use("/E sarees",(req,res)=>{
//     res.send("Lakshmi");
// });
app.get("/user",(req,res)=>{
    res.send({"FirstName":"usha",
        "LastName":"G"});
});
app.post("/user",(req,res)=>{
    res.send("post this matte succesfull");
});
app.put("/user",(req,res)=>{
    res.send("matter wa sucessfully put in the database");
});
// app.update("/user",(req,res)=>{
//     res.send("update the challenge");
// });

app.listen(786,(req,res)=>{
    console.log("E-Sarees");
});