const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User =  mongoose.model('User');
const userController = require('../Controllers/userController');


router.route('/')
.post(userController.addUser)

module.exports = router ;