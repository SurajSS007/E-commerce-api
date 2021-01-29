require('dotenv').config()
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// const NewUser = mongoose.model('UserModel')
const NewUser = require('../models/users');

router.get('/',async(req,res) => {
    let allUsers = await NewUser.find();
    res.json(allUsers.filter(allUsers => allUsers.name === req.name));
})

router.post('/',async(req,res) => {
    try {
        const userDetails = new NewUser({
            name:req.body.name,
            PhNumber:req.body.PhNumber,
            email:req.body.email,
            password:req.body.password,
            products:req.body.AddProduct
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

        // const name = req.body.name;
        // const user = {username:name};

        NewUser.findOne({name:req.body.name},(err,userInfo) => {
            if(err){
                next(err);
        
            }else{
                if(bcrypt.compareSync(req.body.password, userInfo.password)){
                    console.log(this._id);
                    const accessToken = jwt.sign({ name: this.name }, process.env.ACCESS_TOKEN_SECRET);
                    console.log(accessToken);
                    // res.json({status:"success", message: "user found!!!"});
                    res.json({accessToken:accessToken})
                    return accessToken;
                }else{
                    res.json({status:"failure", message: "not found!!!"});
                }
            }
        }) 

    });


   function authenticateToken(req,res,next){
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if( token == null) return res.sendStatus(401)

    console.log(token);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,userInfo) => {
            if(err) return res.sendStatus(403)
            req.NewUser = userInfo
            next();

        })
    }

    router.get('/:name',async(req,res) => {
        try {
            const a1 = await NewUser.find({name:req.params.name}.populate(AddProduct))
            res.json(a1)
        } catch (error) {
            console.log(error);
        }
    })

    router.patch('/:id',async(req,res) => {
        try {
            const a1 = await NewUser.findById(req.params.id)
            a1.name=req.body.name;
            const a2 = await a1.save();
            res.json(a2)
        } catch (error) {
            console.log(error);
        }
    })

    router.delete('/:id', async(req, res) => {
        try {
        const a1 = await NewUser.findOneAndDelete(req.params.id)
        res.json(a1);
        } catch (error) {
         console.log(error);   
        }

    });
    

module.exports = router;