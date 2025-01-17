const adminAuth =(req,res,next)=>{
    console.log("the auth was stil checking please await a moment ...");
    const token = "xyz";
    const isAdminAuthorized =  token==="xyz";
    if(isAdminAuthorized){
        res.status(401).send("unauthorized acess");
    }
    else{
        next();
    } 
};

module.exports={
    adminAuth,
};