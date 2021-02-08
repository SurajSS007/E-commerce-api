require('./Models/db')
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const user = require('./Routes/userRoute')
const category = require('./Routes/categoryRoute')

const mongoose = require('mongoose');
const User = mongoose.model('User');
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/adduser',user)
app.use('/category/create',category)
app.use('/category/getcategory',category)
PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log('Running on http://localhost:5000/'))