const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({

    // _id: {
    //     type: Schema.Types.ObjectId,
    //   },
  
      Name: {
         type: String,
         required:true
  
      }
   
  })
  
  const Category = mongoose.model("Category", CategorySchema);
  
  module.exports = Category;