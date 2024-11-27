const express = require("express");
const router = express.Router();
const courseController = require("../controllers/Course-Controller.js");

// create course
router.post("/create", courseController.createCourse);

// get all courses
router.get("/all", courseController.getallCourses);
router.get("/all/active", courseController.getallactive);
router.get("/all/inactive", courseController.getallinactive);
router.get("/search/:_id", courseController.getspecificcourse);
router.put("/archive/:_id", courseController.archivecourse);
router.put("/activate/:_id", courseController.activatecourse);
module.exports = router;

