var mongoose = require('mongoose');

var professorSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  Department: String,
  
}, { timestamps: true });