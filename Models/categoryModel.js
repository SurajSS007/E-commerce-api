const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    categoryname: {
      type:String,
      unique: true,
      required:true
    },
    slug: {
        type: String,
        required:true,
        unique: true
      },
      parentId: {
        type: String
      },
  }, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);