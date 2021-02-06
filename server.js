const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log('Running on http://localhost:5000/'))