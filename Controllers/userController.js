const mongoose = require('mongoose')
const User =  mongoose.model('User');

module.exports={
    addUser: async (req,res) => {
        try {
            const {
                U_firstname, U_lastname, U_email,
                U_password,  U_age, U_gender, U_contact, U_address
            } = req.body;

            const user = new User();
            user.U_firstname = U_firstname
            user.U_lastname = U_lastname
            user.U_email =   U_email
            user.U_password = U_password
            // user.U_avatar = uploadResponse.secure_url
            user.U_age = U_age
            user.U_gender = U_gender
            user.U_contact = U_contact
            user.U_address = U_address

            await user.save()
            res.json(user)
            
        } catch (error) {
            res.send(error);
            console.log(error); 
        }
    }
}