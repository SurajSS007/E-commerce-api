const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    categoryname: {
      type:String,
      required:true,
      trim:true
    },
    slug: {
        type: String,
        required:true,
        unique:true
      },
      parentId: {
        type: String,
        unique:false
      },
  }, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);