const express = require("express");
const profileRouter=express.Router();
const {userAuth}= require("../middlewares/auth");

profileRouter.get("/profile", async (req, res) => {
    try{
        const user = req.user;
         res.send(user);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});


module.exports=profileRouter;