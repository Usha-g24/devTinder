const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());


const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");


app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);


// app.get("/user", async (req, res) => {
//     try {
//         const { email } = req.body;

//         if (!email) {
//             return res.status(400).send("Email is required.");
//         }

//         const user = await User.findOne({ email: email });
//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         res.send(user);
//     } catch (err) {
//         res.status(500).send("Error: " + err.message);
//     }
// });

// // Get all users
// app.get("/feed", async (req, res) => {
//     try {
//         const users = await User.find({});
//         if (users.length === 0) {
//             return res.status(404).send("No users found.");
//         }

//         res.send(users);
//     } catch (err) {
//         res.status(500).send("Error: " + err.message);
//     }
// });

// // Delete user
// app.delete("/user", async (req, res) => {
//     try {
//         const { userId } = req.body;

//         if (!userId) {
//             return res.status(400).send("User ID is required.");
//         }

//         const user = await User.findByIdAndDelete(userId);
//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         res.send("User deleted successfully");
//     } catch (err) {
//         res.status(500).send("Error: " + err.message);
//     }
// });

// // Update user
// app.patch("/user", async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const update = req.body;

//         if (!userId) {
//             return res.status(400).send("User ID is required.");
//         }

//         const updateAllowed = ["email","password"];
//         const isValidUpdate = Object.keys(update).every((key) =>
//             updateAllowed.includes(key)
//         );

//         if (!isValidUpdate) {
//             return res.status(400).send("Invalid update fields.");
//         }

//         const user = await User.findByIdAndUpdate(
//             userId,
//             update,
//             { new: true, runValidators: true }
//         );

//         if (!user) {
//             return res.status(404).send("User not found.");
//         }

//         res.send("User updated successfully");
//     } catch (err) {
//         res.status(500).send("Error: " + err.message);
//     }
// });



// Database connection
connectDB()
    .then(() => {
        console.log("Database is connected");
        app.listen(7777, () => {
            console.log("Port running on: 7777");
        });
    })
    .catch((err) => {
        console.error("Error: ", err);
    });