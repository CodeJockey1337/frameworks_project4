// STUDENT MODEL

var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  student_number: String,
  
}, { timestamps: true });

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;

Student.create({ first_name: 'Ross', last_name: 'Baldwin', student_number: '900418205' }, 
  function (err, small) {
    if (err) return handleError(err);
});