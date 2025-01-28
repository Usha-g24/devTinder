const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Ensure the correct path to the User model

const userAuth = async (req, res, next) => {
    try {
        // Extract the token from cookies
        const token = req.cookies.token;
        console.log("Token from cookies:", token); // Debugging

        if (!token) {
            throw new Error("Unauthorized: No token provided");
        }

        // Verify the token
        const decoded = jwt.verify(token, "token"); // Use the same secret key as in the login route
        console.log("Decoded token:", decoded); // Debugging

        // Find the user by ID from the token
        const user = await User.findById(decoded._id);
        console.log("User found in database:", user); // Debugging

        if (!user) {
            throw new Error("Unauthorized: User not found");
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (err) {
        console.error("Authentication error:", err); // Debugging
        res.status(401).send("Unauthorized: " + err.message);
    }
};

module.exports = { userAuth };