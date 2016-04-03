// COURSE MODEL

var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
  name: String,
  department_code: String,
  course_code: String,
  
}, { timestamps: true });

var Course = mongoose.model('Course', courseSchema);
module.exports = Course;

Course.create({ name: 'Frameworks', department_code: 'CS', course_code: '390P' }, 
  function (err, small) {
    if (err) return handleError(err);
});