const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// const NewUser = mongoose.model('UserModel')
const NewUser = require('../models/users');
const accessTokenSecret = 'mynameissurajsuryawanshi';

router.get('/',async(req,res) => {
    let allUsers = await NewUser.find();
    res.json(allUsers);
})

router.post('/',async(req,res) => {
    try {
        const userDetails = new NewUser({
            name:req.body.name,
            PhNumber:req.body.PhNumber,
            email:req.body.email,
            password:req.body.password
        })
        const token = await userDetails.generateAuthToken();
        const userRegister = await userDetails.save();
        res.json({userRegister});
    } catch (error) {
        console.log(error);
    }
})

router.post('/login',(req,res) => {
        // authenticateUser(req,res);

        NewUser.findOne({name:req.body.name},(err,userInfo) => {
            if(err){
                next(err);
        
            }else{
                if(bcrypt.compareSync(req.body.password, userInfo.password)){
                    console.log(this._id);
                    const accessToken = jwt.sign({ name: this.name }, accessTokenSecret);
                    console.log(accessToken);
                    res.json({status:"success", message: "user found!!!"});
                    return accessToken;
                }else{
                    res.json({status:"failure", message: "not found!!!"});
                }
            }
        }) 

    });

    // router.patch('/:id',async(req,res) => {
    //     try {
    //         const a1 = await NewUser.findById(req.params.id)
    //         a1.name=req.body.name;
    //         const a2 = await a1.save();
    //         res.json(a2)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // })

    // router.delete('/:id', async(req, res) => {
    //     try {
    //     const a1 = await NewUser.findOneAndDelete(req.params.id)
    //     res.json(a1);
    //     } catch (error) {
    //      console.log(error);   
    //     }

    // });
    

module.exports = router;