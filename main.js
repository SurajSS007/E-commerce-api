require('./models/db');

const express = require('express');
var app = express();
const PORT=process.env.PORT || 3000 ;
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());


const userController = require('./controllers/userController');
const addProduct = require('./controllers/addProduct');
const cartmodel =require('./controllers/cart');

app.use('/NewUser',userController);
app.use('/AddProduct',addProduct);
app.use('/UserCart',cartmodel);
app.listen(PORT,() => console.log(`Listening to PORT ${PORT}`));