const mongoose=require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    PhNumber:{
        type:Number,
    required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AddProduct"
    }],
    tokens:[{
        token:{
            type:String,
            required:true 
        }
    }]
})



//generating token
exports = userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()},"mynameissurajsuryawanshi")
        console.log(token);
        this.tokens =  this.tokens.concat({token});
        await this.token.save();
        return token;
    } catch (error) {
        // console.log(error);
    }
}


// hashing
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

const NewUser = mongoose.model('NewUser',userSchema);
module.exports = NewUser ;