const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Pid:{
        type:Number,
        required:true
    },
    Pname:{
        type:String,
        required:true
    },
    Pcode:{
        type:Number,
        required:true
    }
})


const CartProduct = mongoose.model('CartProduct',cartSchema);
module.exports = CartProduct;