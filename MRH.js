const express = require("express");
const MRH = express();
// app.use("/route,"[rh1,rh2,rh3],rh4);
MRH.use("/user",(req,res,next)=>{
    console.log("this was a new router");
    // res.send("response1");
    next();
});
MRH.use("/user",(req,res,next)=>{
    console.log("this was a 2nd router");
    //res.send("response2");
    next();
});
MRH.use("/user",(req,res,next)=>{
    console.log("this was a 3rd router");
    // res.send("response3");
    next();
});
MRH.use("/user",(req,res,next)=>{
    console.log("this was a 4th router");
    res.send("response4");
    // if we code as next() then it will go to the router but there no next router send it comeback as a error
},
);
MRH.listen(9000,(req,res)=>{
    console.log("main router");
});