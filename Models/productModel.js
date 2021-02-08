const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Pcategory:{
        type:String,
        required:true
    },
    Pname:{
        type:String,
        required:true
    },
    Pprice:{
        type:Number,
        required:true
    },
    Pcode:{
        type:Number,
        required:true
    }
})


const AddProduct = mongoose.model('AddProduct',productSchema);
