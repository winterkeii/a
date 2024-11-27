const User = require("../models/User-Model.js");
const bcryptjs = require("bcryptjs");
const auth = require("../auth.js");
const enroll = require("../models/Enrollment-Model.js")
module.exports.registerUser = (req,res) =>{
    let newUser = new User({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: bcryptjs.hashSync(req.body.password, 10)
    })
    return User.findOne({email: email}).then(result =>{
        if(result == null)  {
            res.send({
                code: "LOGIN ERROR",
                message: "Email is not registered. Please Register first!"
            })
        }
    })
    return newUser.save().then(result => {
        res.send({
            code: "Registration Success",
            message: "You are now Registered",
            result: result
        })
    })
    .catch(error =>{
        res.send({
            code: "REGISTRATION ERROR",
            message: "We have encountered an error during the registration. PLease Try Again!",
            result: error
        })
    })
}

//User login

module.exports.loginUser = (req,res) =>{
    let {email, password} = req.body;
    return User.findOne({email: email}).then(result =>{
    if(result == null)  {
        res.send({
            code: "LOGIN ERROR",
            message: "Email is not registered. Please Register first!"
        })
    }else{
        const isPasswordCorrect = bcryptjs.compareSync(password, result.password);
        if(isPasswordCorrect){
            res.send({
                code: "LOGIN SUCCESS",
                token: auth.createAccessToken(result),
                message: "You are now logged in"
            })
        }else{
            res.send({
                code: "LOGIN ERROR",
                message: "Password is incorrect. Please try again!"
            })
        }
    }
    })
}

//Check if email exist
module.exports.checkEmail = (req,res) =>{
    let {email} = req.body;
    return User.find({email: email}).then(result =>{
        if(result.length > 0){
            res.send({
                code: "EMAIL EXIST",
                message: "Email is registered"
            })
        }else{
            res.send({
                code: "EMAIL NOT TAKEN",
                message: "Email is not registered"
    })
    }
    })
}

//getprofile using ID
module.exports.getProfile = (req,res) =>{
    let {id} = req.body;
    return User.findById(id).then(result =>{
        if(result){
            res.send({
                code: "GET PROFILE SUCCESS",
                data: result
            })
        }else{
            res.send({
                code: "GET PROFILE ERROR",
                message: "User not found"
            })
        }
    })
}

module.exports.enroll = (req,res) => {
    const id = req.user;
    let newenrollment = new enroll({
        userId: id,
        enrolledCourse: req.body.enrolledcourse,
        totalPrice: req.body.totalprice
    })
    
    return newenrollment.save().then((err, result) => {
        if(err){
            res.send({
                code: "Success",
                message: "Enrollment Successful"
            })
        }else{
           
            res.send({
                code: "Enrollment Error",
                message: "Enrollment unsuccessfull, please try again"
            })
        }
    })
}
