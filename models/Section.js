// SECTIONS MODEL

var mongoose = require('mongoose');

var sectionSchema = new mongoose.Schema({
  course_id: String,
  professor_id: String,
  _id : String
  
}, { timestamps: true });

var Section = mongoose.model('Section', sectionSchema);
module.exports = Section;

Section.create(
    {
        course_id : '1',
        professor_id : '1',
        _id : '1'
    }
);