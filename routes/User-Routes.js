const express = require('express');
const router = express.Router();
const userController = require("../controllers/User-Controller.js");
const { verify } = require('jsonwebtoken');

//User Registration
router.post('/register', userController.registerUser)

//User Login
router.post('/login', userController.loginUser)

//Check if email exists
router.get('/check-email', userController.checkEmail)

//Check profile by ID
router.post('/details', userController.getProfile)

router.post('/enroll',verify, userController.enroll)

module.exports = router;