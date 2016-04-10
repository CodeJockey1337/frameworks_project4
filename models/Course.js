// COURSE MODEL

var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
  name: String,
  department_code: String,
  course_code: String,
  
}, { timestamps: true });

var Course = mongoose.model('Course', courseSchema);
module.exports = Course;

//SEEDS
Course.create(
  { 
    name: 'Frameworks', 
    department_code: 'CS', 
    course_code: '390P' 
  },
  {
    name: 'Computer Science 1',
    department_code: 'CS',
    course_code: '1050'
  },
  {
    name: 'Computer Science 2',
    department_code: 'CS',
    course_code: '2050'
  },
  {
    name: 'Databases',
    department_code: 'CS',
    course_code: '3020'
  },
  {
    name: 'Operating Systems',
    department_code: 'CS',
    course_code: '3600'
  },
  {
    name: 'Software Engineering 1',
    department_code: 'CS',
    course_code: '4250'
  },
  {
    name: 'Software Engineering 2',
    department_code: 'CS',
    course_code: '4260'
  },
  {
    name: 'Embedded Systems',
    department_code: 'CS',
    course_code: '3410'
  },
  {
    name: 'Principles Of Programming Languages',
    department_code: 'CS',
    course_code: '3210'
  }
);