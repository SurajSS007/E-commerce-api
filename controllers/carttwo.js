const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const NewUser = require('../models/users');
const AddProduct = require('../models/product')

router.get('/', async(req,res) => {
    const productDetails = await AddProduct.find();
    
})