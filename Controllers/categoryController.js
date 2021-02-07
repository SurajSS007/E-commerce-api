const mongoose = require("mongoose");
const Category = mongoose.model('Category');
const slugify = require('slugify')
module.exports = {
    addCategory: async (req,res) => {

        const categoryObj = {
             categoryname :req.body.categoryname,
             slug:slugify(req.body.categoryname)
        }
        if(req.body.parentId){
            categoryObj.parentId = req.body.parentId ;
        }

        const cat = new Category(categoryObj)

        cat.save((err,doc)=>{
            if(err){
                res.status(400).json(err)
            }else{
                res.status(201).json(doc)
            }

        })






    }
}