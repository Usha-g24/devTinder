const mongoose = require("mongoose");
const validator = require("validator"); 
const jwt   = require("jsonwebtoken");
const  bcrypt = require("bcrypt");

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
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid URL");
            }
        },
    },
    about:{
        type:String,
        default:"Hey there! i am a developer.",
    },
    email:{
        type: String,
        lowercase: true ,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is not valid");
            }
        },
    },
    skills:{
        type:[String],  
    },
    password:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("email is not valid");  
            }
        },
    },
},
{
    timestamps:true,
});



userSchema.methods.getJWT = async function () {
    const user = this;

    const  token = await jwt.sign({_id: user._id},"token",{
        expiresIn: "7d",
    });
    return token;
};



userSchema.methods.validatePassword = async function (passwordInputByUser) {
    const user = this;
    const passwordHash = user.password;


    const  isMatch = await bcrypt.compare(
        passwordInputByUser,
        passwordHash);
        return isMatch; 
};



module.exports=  mongoose.model("User",userSchema);