const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true,useUnifiedTopology:true},(err) =>{
    if(!err){console.log('MongoDB Connection Successfully ')}
    else{console.log('Error in DB connection :' + err)}
});

// require('./users')
// require('./product')