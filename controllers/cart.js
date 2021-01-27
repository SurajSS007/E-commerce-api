const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// const AddProduct = mongoose.model('AddProduct');
const CartProduct = require('../models/cartmodel')



router.get('/',async(req,res) => {
    let allProducts = await CartProduct.find();
    res.json(allProducts);
})


router.post('/', async(req,res) => {
    try {
        const cartDetails = new CartProduct({
            name:req.body.name,
            Pid:req.body.Pid,
            Pname:req.body.Pname,
            Pcode:req.body.Pcode,
        })
        const cartRegistered= await cartDetails.save();
        res.json({cartRegistered})
    } catch (error) {
        res.send(error);
    }

})

router.patch('/:id',async(req,res) => {
    try {
        const a1 = await CartProduct.findById(req.params.id)
        a1.Pid=req.body.Pid;
        a1.Pname=req.body.Pname;
        a1.Pcode=req.body.Pcode;
        const a2 = await a1.save();
        res.json(a2)
    } catch (error) {
        console.log(error);
    }
})


router.delete('/:id', async(req, res) => {
    try {
    const a1 = await CartProduct.findOneAndDelete(req.params.id)
    res.json(a1);
    } catch (error) {
     console.log(error);   
    }

});

module.exports = router;