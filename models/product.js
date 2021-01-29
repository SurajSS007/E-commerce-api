const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Pid:{
        type:String,
        required:true
    },
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
    },
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"NewUser"
    }],

})


const AddProduct = mongoose.model('AddProduct',productSchema);
module.exports = AddProduct;