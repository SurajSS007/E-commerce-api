require('./Models/db')
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const user = require('./Routes/userRoute')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());



app.use('/adduser',user)
PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log('Running on http://localhost:5000/'))