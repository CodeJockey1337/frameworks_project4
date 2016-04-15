// STUDENT MODEL

var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  student_number: String
  
}, { timestamps: true });

var Student = mongoose.model('Student', studentSchema);
module.exports = Student;

//SEEDS
Student.create(
    { 
        first_name: 'Ross', 
        last_name: 'Baldwin', 
        student_number: 900418205
    },
    {
        first_name: 'Eddard',
        last_name: 'Stark',
        student_number: 900756885
    },
    {
        first_name: 'Jon',
        last_name: 'Snow',
        student_number: 900756846
    },
    {
        first_name: 'Brandon',
        last_name: 'Stark',
        student_number: 900756806
    },
    {
        first_name: 'Theon',
        last_name: 'Greyjoy',
        student_number: 900756811
    },
    { 
        first_name: 'Sandor',
        last_name: 'Clegane',
        student_number: 900756845
    },
    {
        first_name: 'Jojen',
        last_name: 'Reed',
        student_number: 900756873
    },
    {
        first_name: 'Catelyn',
        last_name: 'Tully',
        student_number: 900756888
    },
    {
        first_name: 'Petyr',
        last_name: 'Baelish',
        student_number: 900756894
    },
    {
        first_name: 'Joffery',
        last_name: 'Baratheon',
        student_number: 900756849
    },
    {
        first_name: 'Tyrion', 
        last_name: 'Lannister',
        student_number: 900756833
    },
    {
        first_name: 'Brienne',
        last_name: 'Tarth',
        student_number: 900756854
    },
    {
        first_name: 'Edmure',
        last_name: 'Tully',
        student_number: 900756871
    },
    {
        first_name: 'Tywin',
        last_name: 'Lannister',
        student_number: 900756872
    },
    {
        first_name: 'Daenerys',
        last_name: 'Targaryen',
        student_number: 900756812
    });