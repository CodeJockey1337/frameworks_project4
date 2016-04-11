/**
 * STUDENTS CONTROLLER
 * classcatalog/students page.
 */
    
var Student = require('../../models/Student.js');

exports.index = function(req, res) {
    Student.find(function(error, docs) {
        res.render('classcatalog/students', { title: 'Students', students: docs });
  });
};
//This method pipes the entire Students list to the view

exports.create = function(req, res){
    Student.find(function(error, documents){
        res.render('classcatalog/createstudent', {title: 'Create Student', students: documents});
    });
};

/**
 * POST /createstudent
 * Register a new Student
 */
exports.post = function(req, res, next) {
    var student = new Student(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            student_number: req.body.student_number
        }
    );
    student.save(function(err) {
        if (err) {
            return next(err);
        }
        req.logIn(student, function(err) {
            if (err) {
                return next(err);
            }
            res.redirect('/classcatalog/students');
        });
    });
};