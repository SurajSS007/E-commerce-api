const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Category = mongoose.model('Category');
const categoryController = require('../Controllers/categoryController')



router.route('/')
.post(categoryController.addCategory)
.get(categoryController.getCategory)
module.exports = router ;