const express = require("express");
const authRouter =express.Router();
const { validatorSignUp } = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../models/user");

authRouter.post("/signup", async (req, res) => {
    try {
        // Validation
        validatorSignUp(req);

        const { firstName, lastName, email, password } = req.body;

        // Encrypt password
        const passwordHash = await bcrypt.hash(password, 8);

        // Create user
        const user = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
        });

        await user.save();
        res.send("User added successfully");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});


authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Invalid credentials");
        }

        // Compare the password
        const isMatch = await user.validatePassword(password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        // Generate a JWT token
        const token = await user.getJWT();

        // Set the token in cookies
        res.cookie("token", token, {
            expires: new Date(Date.now() + 8 * 3600000), // 8 hours
            httpOnly: true, // Ensure the cookie is HTTP-only for security
        });

        // Send a success response
        res.send("Login successful");
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});




module.exports=authRouter;