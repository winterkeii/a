//Course-Controller
const Course = require("../models/Course-Model.js");

module.exports.createCourse = (req, res) => {
    let {name, description, price} = req.body;
    let newCourse = new Course({
        name: name,
        description: description,
        price: price
    });
    return newCourse.save().then(result => {
       res.send ({
            code: "Course Added",
            message: "Course Added Successfully",
            result: result
    })
    })
    .catch((err) => {
        res.send({
            code: "Course Not Added",
            message: "Course Not Added",
            result: err
        })
    });
}

module.exports.getallCourses = (req, res) => {
    Course.find({}).then(result => {
        if(result==null || result.length === 0){
            res.send({
                code: "No Course Found",
                message: "No Course Found",
                result: result
            })
        }else{
            res.send({
                code: "Course Found",
                message: "Here are the list of Courses",
                result: result
            })
        }
    })
}


module.exports.getallactive = (req, res) => {
    Course.find({isActive: true}).then(result => {
        if(result==null || result.length === 0){
            res.send({
                code: "No Course Found",
                message: "No Course Found",
                result: result
            })
        }else{
            res.send({
                code: "Course Found",
                message: "Here are the list of Active Courses",
                result: result
            })
        }
    })
}


module.exports.getallinactive = (req, res) => {
    Course.find({isActive: false}).then(result => {
        if(result==null || result.length === 0){
            res.send({
                code: "No Course Found",
                message: "No Course Found",
                result: result
            })
        }else{
            res.send({
                code: "Course Found",
                message: "Here are the list of Inactive Courses",
                result: result
            })
        }
    })
}


module.exports.getspecificcourse = (req,res) =>{
    const {_id} = req.params;
    return Course.findById(_id).then(result => {
        if (result == null || result.length === 0){
            return res.send({
                code: "Course not found",
                message: "The course cannot be found"
            })
        }else{
            return res.send({
                code: "Course Found",
                message: "Here is the course",
                data: result
            })
        }
    })
}

module.exports.archivecourse =(req,res) => {
    const _id = req.params
    const updateField =  {
        isActive: false
    }

    return Course.findByIdAndUpdate(_id, updateField).then(result => {
        if (result === null||result.length == 0){
            res.send({
                code: "Course not found",
                message: "Cannot find course"
            })
        }else{
            res.send({
                code: "Success",
                message: "The couse is now archived",
                data: result
            })

        }
    }) 
}

module.exports.activatecourse =(req,res) => {
    const _id = req.params
    const updateField =  {
        isActive: true
    }

    return Course.findByIdAndUpdate(_id, updateField).then(result => {
        if (result === null||result.length == 0){
            res.send({
                code: "Course not found",
                message: "Cannot find course"
            })
        }else{
            res.send({
                code: "Success",
                message: "The couse is now activate",
                data: result
            })

        }
    }) 
}