const mongoose = require("mongoose");
const Category = mongoose.model('Category');

const slugify = require('slugify')
const shortid = require('shortid')



function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
      category = categories.filter((cat) => cat.parentId == undefined);
    } else {
      category = categories.filter((cat) => cat.parentId == parentId);
    }
  
    for (let cate of category) {
      categoryList.push({
        _id: cate._id,
        name: cate.name,
        slug: cate.slug,
        parentId: cate.parentId,
        children: createCategories(categories, cate._id),
      });
    }
  
    return categoryList;
  }


    exports.addCategory = async (req,res) => {

        const categoryObj = {
            name :req.body.name,
             slug:`${slugify(req.body.name)}-${shortid.generate()}`
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
                const categoryList = createCategories(categories)
                res.status(201).json({categoryList})
            } 
        })
    }
