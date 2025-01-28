const express = require("express");
const requestRouter = express.Router();
const {userAuth}= require("../middlewares/auth");

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
    try {
        const user = req.user;
        console.log("User:", user);
        res.send(user.firstName + " sent the connection request.");
    } catch (err) {
        console.error("Error sending connection request:", err);
        res.status(500).send("Error: " + err.message);
    }
});

module.exports=requestRouter;

