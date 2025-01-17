// Desc: Database connection

const mongoose = require("mongoose");
const { connect } = require("mongoose");

connectDB =async () =>{
    await mongoose.connect("mongodb+srv://giddaluriusha24:aIUtEmGrkQIKllja@devtinder.cv9ed.mongodb.net/devTinder",);
};

module.exports = connectDB;


