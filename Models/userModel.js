const mongoose = require('mongoose');  //importing mongoose
const bcrypt = require('bcrypt');       //importing bcrypt

//userSchema for user
var userSchema = new mongoose.Schema({
  Ufirstname: {
    type: String,
    required:true
  },
  Ulastname: {
    type: String,
    required:true
  },
  Uemail: {
    type: String,
    required:true,
    unique:true
  },
  Upassword: {
    type:String,
    required:true
  },
//   U_avatar: String,
  Uage: Number,
  Ucontact: Number,
  Uaddress: String,
  Ugender: {
    type: String,
    enum: ['men', 'women'],
    required: false,
    default: 'men'
  }
  ,
  Uproducts: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
      },
      quantity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
      },
    }
  ]


});


userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(this.Upassword, salt)
    this.Upassword = hashPassword
    next()
  } catch (err) {
    console.log(err)
  }
})



module.exports = mongoose.model('User', userSchema);