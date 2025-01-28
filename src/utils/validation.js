const validator = require ("validator");
const  validatorSignUp = (req) => {
    const {firstName,lastName,email, password} = req.body;
    if (!firstName||!lastName|| !email || !password) {
        throw new Error("All fields are required");
    }
    else if (!validator.isEmail(email)) {
        throw new Error("Email is not valid");
    }
    else if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
    }
       
};
module.exports = {
    validatorSignUp,
};