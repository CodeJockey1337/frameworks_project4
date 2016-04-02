var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
  name: String,
  department_code: String,
  course_code: String,
  
}, { timestamps: true });