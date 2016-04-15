// SECTIONS MODEL

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sectionSchema = new mongoose.Schema({
  course : [{type: Schema.ObjectId, ref : 'Course' }],
  professor : [{type : Schema.ObjectId, ref : 'Professor'}],
  section_number : Number
  
}, { timestamps: true });

var Section = mongoose.model('Section', sectionSchema);
module.exports = Section;
