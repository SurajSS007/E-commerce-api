const mongoose = require('mongoose')
const User =  mongoose.model('User');
const Cart =  mongoose.model('Cart');
const bcrypt = require('bcrypt'); 
module.exports={
    addUser: async (req,res) => {
        try {
            const {
                Ufirstname, Ulastname, Uemail,
                Upassword,  Uage, Ugender, Ucontact, Uaddress
            } = req.body;

            const user = new User();
            user.Ufirstname = Ufirstname
            user.Ulastname = Ulastname
            user.Uemail =   Uemail
            user.Upassword = Upassword
            // user.U_avatar = uploadResponse.secure_url
            user.Uage = Uage
            user.Ugender = Ugender
            user.Ucontact = Ucontact
            user.Uaddress = Uaddress

            await user.save() 
            const user1 = await User.findOne({ Ufirstname: Ufirstname });
            const cart = new Cart();
            cart.user = user1._id
            await cart.save()
            res.json({ user , cart})
            
        } catch (error) {
            res.send(error);
            console.log(error); 
        }
    }

   
}