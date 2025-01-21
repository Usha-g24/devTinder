const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        // minLength:200,
        // maxLength:150,
    },
    lastName:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        validate(value){
            if (!["male","female","other"].includes(value)){
                throw new Error("gender is not valid");}
        }
    },
    photoUrl:{
        type:String,
        default:"https://www.shutterstock.com/image-illustration/success-usually-comrs-those-who-busy-2368394019",
    },
    about:{
        type:String,
        default:"Hey there! i am a developer.",
    },
    email:{
        type: String,
        lowercase: true ,
        trim:true,
    },
    password:{
        type:String,
        trim:true,
        lowercase:true,
        uppercase:true,
        number:true,
    }
},
{
    timestamps:true,
});


module.exports=  mongoose.model("User",userSchema);