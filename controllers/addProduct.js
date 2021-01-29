const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// const AddProduct = mongoose.model('AddProduct');
const AddProduct = require('../models/product')
// const authenticateToken  = require('./userController/authenticateToken');

// router.get('/',(req,res) => {
//     res.send('Add Product Page');
// })

router.get('/',async(req,res) => {
    let allProducts = await AddProduct.find();
    res.json(allProducts);
})




router.post('/', async(req,res) => {
    try {
        const productDetails = new AddProduct({
            Pid:req.body.Pid,
            Pcategory:req.body.Pcategory,
            Pname:req.body.Pname,
            Pprice:req.body.Pprice,
            Pcode:req.body.Pcode,
        })
        const productRegistered= await productDetails.save();
        res.json({productRegistered})
    } catch (error) {
        res.send(error);
    }

})


router.patch('/:id',async(req,res) => {
    try {
        const a1 = await AddProduct.findById(req.params.id)
        a1.Pcategory=req.body.Pcategory;
        a1.Pname=req.body.Pname;
        a1.Pprice=req.body.Pprice;
        a1.Pcode=req.body.Pcode;
        const a2 = await a1.save();
        res.json(a2)
    } catch (error) {
        console.log(error);
    }
})

router.delete('/:id', async(req, res) => {
    try {
    const a1 = await AddProduct.findOneAndDelete(req.params.id)
    res.json(a1);
    } catch (error) {
     console.log(error);   
    }

});

module.exports = router;