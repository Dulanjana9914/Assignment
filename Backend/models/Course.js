const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({

      Name: {
         type: String,
         required:true
  
      },
      Description: {
        type: String,
        required:true
 
     }, 
     Category: {
        type: String,
        required:true
 
     },
     Start_Date: {
        type: Date,
        required:true
 
     }
  
  
  })
  
  const Course = mongoose.model("Course", CourseSchema);
  
  module.exports = Course;