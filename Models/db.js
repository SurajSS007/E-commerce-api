const mongoose = require('mongoose');

//this is for connnecting MongoDB
mongoose.connect('mongodb://localhost:27017/newcommerce', { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./userModel');
require('./cartModel');
require('./categoryModel')