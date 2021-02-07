const mongoose = require("mongoose");
const Category = mongoose.model('Category');

const slugify = require('slugify')
const shortid = require('shortid')

function createCategory(categories,parentId = null){
    console.log(categories);

    categoryList = [];
    let category;
    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined)
    }else{
        category = categories.filter(cat => cat.parentId == parentId)
    }

    for(let cate of category){
        categoryList.push({
            _id:cate._id,
            categoryname:cate.categoryname,
            slug:cate.slug,
            children: createCategory(categories, cate._id)
        })
     
    }

    return categoryList;

}


    exports.addCategory = async (req,res) => {

        const categoryObj = {
             categoryname :req.body.categoryname,
             slug:`${slugify(req.body.categoryname)}-${shortid.generate()}`
        }
        if(req.body.parentId){
            categoryObj.parentId = req.body.parentId ;
        }

        const cat = new Category(categoryObj)

        cat.save((err,doc)=>{
            if(err){
                console.log(err);
                res.status(400).json(err)
            }else{
                res.status(201).json(doc)
            }

        })

    }
    exports.getCategory = async(req,res) => {
        Category.find({})
        .exec((err,categories) => {
            if(err){
                res.status(400).json(err)
            }
            if(categories){
                const categoryList = createCategory(categories)
                res.status(201).json({categoryList})
            } 
        })
    }
