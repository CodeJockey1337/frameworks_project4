var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  student_number: String,
  
}, { timestamps: true });